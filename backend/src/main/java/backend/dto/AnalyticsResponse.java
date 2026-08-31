package backend.dto;

import java.util.List;

public class AnalyticsResponse {

    private List<String> months;
    private List<Integer> monthlyContacts;

    private List<String> recentMonths;
    private List<Integer> recentContacts;

    private long totalContacts;

    private int newContactsPercent;
    private int contactsWithTitlePercent;

    private List<Integer> contactStatus;

    public AnalyticsResponse() {
    }

    public List<String> getMonths() {
        return months;
    }

    public void setMonths(List<String> months) {
        this.months = months;
    }

    public List<Integer> getMonthlyContacts() {
        return monthlyContacts;
    }

    public void setMonthlyContacts(List<Integer> monthlyContacts) {
        this.monthlyContacts = monthlyContacts;
    }

    public List<String> getRecentMonths() {
        return recentMonths;
    }

    public void setRecentMonths(List<String> recentMonths) {
        this.recentMonths = recentMonths;
    }

    public List<Integer> getRecentContacts() {
        return recentContacts;
    }

    public void setRecentContacts(List<Integer> recentContacts) {
        this.recentContacts = recentContacts;
    }

    public long getTotalContacts() {
        return totalContacts;
    }

    public void setTotalContacts(long totalContacts) {
        this.totalContacts = totalContacts;
    }

    public int getNewContactsPercent() {
        return newContactsPercent;
    }

    public void setNewContactsPercent(int newContactsPercent) {
        this.newContactsPercent = newContactsPercent;
    }

    public int getContactsWithTitlePercent() {
        return contactsWithTitlePercent;
    }

    public void setContactsWithTitlePercent(int contactsWithTitlePercent) {
        this.contactsWithTitlePercent = contactsWithTitlePercent;
    }

    public List<Integer> getContactStatus() {
        return contactStatus;
    }

    public void setContactStatus(List<Integer> contactStatus) {
        this.contactStatus = contactStatus;
    }
}