package backend.service;

import backend.dto.AnalyticsResponse;
import backend.entity.Contact;
import backend.entity.User;
import backend.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.TextStyle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AnalyticsService {

    private final ContactRepository contactRepository;

    public AnalyticsService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public AnalyticsResponse getAnalyticsForUser(User user) {

        List<Contact> contacts = contactRepository.findByUser(user);

        ZoneId zone = ZoneId.systemDefault();
        LocalDate now = LocalDate.now(zone);

        /*
         * Build the last 7 months including the current month.
         */
        List<LocalDate> months = new ArrayList<>();

        for (int i = 6; i >= 0; i--) {
            months.add(
                    now.minusMonths(i)
                            .withDayOfMonth(1)
            );
        }

        List<String> monthLabels = months.stream()
                .map(month ->
                        month.getMonth()
                                .getDisplayName(
                                        TextStyle.SHORT,
                                        Locale.ENGLISH
                                )
                )
                .collect(Collectors.toList());

        /*
         * Count contacts created in each month.
         */
        Map<String, Integer> monthlyCounts = new HashMap<>();

        for (LocalDate month : months) {
            monthlyCounts.put(month.toString(), 0);
        }

        for (Contact contact : contacts) {

            Instant createdAt = contact.getCreatedAt();

            if (createdAt == null) {
                continue;
            }

            LocalDate createdDate = createdAt
                    .atZone(zone)
                    .toLocalDate();

            LocalDate monthStart =
                    createdDate.withDayOfMonth(1);

            String monthKey = monthStart.toString();

            if (monthlyCounts.containsKey(monthKey)) {

                monthlyCounts.put(
                        monthKey,
                        monthlyCounts.get(monthKey) + 1
                );
            }
        }

        List<Integer> monthlyContacts = months.stream()
                .map(month ->
                        monthlyCounts.getOrDefault(
                                month.toString(),
                                0
                        )
                )
                .collect(Collectors.toList());

        /*
         * Recent contact activity uses the latest 6 months.
         */
        int recentStartIndex =
                Math.max(0, monthLabels.size() - 6);

        List<String> recentMonths =
                monthLabels.subList(
                        recentStartIndex,
                        monthLabels.size()
                );

        List<Integer> recentContacts =
                monthlyContacts.subList(
                        recentStartIndex,
                        monthlyContacts.size()
                );

        /*
         * Total number of contacts belonging to this user.
         */
        long totalContacts = contacts.size();

        /*
         * Calculate month-over-month contact growth.
         */
        int newContactsPercent = 0;

        if (monthlyContacts.size() >= 2) {

            int lastMonth =
                    monthlyContacts.get(
                            monthlyContacts.size() - 1
                    );

            int previousMonth =
                    monthlyContacts.get(
                            monthlyContacts.size() - 2
                    );

            if (previousMonth == 0) {

                newContactsPercent =
                        lastMonth > 0 ? 100 : 0;

            } else {

                newContactsPercent =
                        (int) (
                                (lastMonth - previousMonth)
                                        * 100.0
                                        / previousMonth
                        );
            }
        }

        /*
         * Contacts with a title are considered
         * contacts with complete professional details.
         */
        long contactsWithTitle =
                contacts.stream()
                        .filter(contact ->
                                contact.getTitle() != null
                                        && !contact.getTitle().isBlank()
                        )
                        .count();

        int contactsWithTitlePercent =
                totalContacts == 0
                        ? 0
                        : (int) (
                                contactsWithTitle
                                        * 100
                                        / totalContacts
                        );

        /*
         * Contact status:
         * [contacts with title, contacts without title]
         */
        int completeContacts =
                (int) contactsWithTitle;

        int contactsNeedingDetails =
                (int) (
                        totalContacts
                                - contactsWithTitle
                );

        AnalyticsResponse response =
                new AnalyticsResponse();

        response.setMonths(monthLabels);

        response.setMonthlyContacts(
                monthlyContacts
        );

        response.setRecentMonths(
                recentMonths
        );

        response.setRecentContacts(
                recentContacts
        );

        response.setTotalContacts(
                totalContacts
        );

        response.setNewContactsPercent(
                newContactsPercent
        );

        response.setContactsWithTitlePercent(
                contactsWithTitlePercent
        );

        response.setContactStatus(
                List.of(
                        completeContacts,
                        contactsNeedingDetails
                )
        );

        return response;
    }
}