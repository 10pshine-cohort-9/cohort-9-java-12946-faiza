import { useEffect, useState } from "react";

import { Line, Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import api from "../services/api";
function Analytics({ refreshToken, onUnauthorized }) {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function fetchAnalytics() {
      try {
        setLoading(true);
        setError("");

        const res = await api.get("/analytics");

        if (mounted) {
          setData(res.data);
        }
      } catch (e) {
       if (e?.response?.status === 401) {
  onUnauthorized();
  return;
}
        let msg =
          e?.response?.data ??
          e?.message ??
          "Failed to load analytics";

        if (typeof msg === "object") {
          msg =
            msg?.error ??
            msg?.message ??
            JSON.stringify(msg);
        }

        if (mounted) {
          setError(msg);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchAnalytics();

    return () => {
      mounted = false;
    };
  }, [refreshToken, onUnauthorized]);

  if (loading) {
    return (
      <div style={{ padding: 20 }}>
        Loading analytics…
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: 20,
          color: "var(--danger)",
        }}
      >
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ padding: 20 }}>
        No analytics data available.
      </div>
    );
  }

  /*
   * Resolve CSS variables before passing colors
   * to Chart.js.
   */
  const styles = getComputedStyle(document.documentElement);

  const primaryColor =
    styles.getPropertyValue("--primary").trim() ||
    "#14b8a6";

  const sidebarColor =
    styles.getPropertyValue("--sidebar-bg").trim() ||
    "#1e3a5f";

  /*
   * Monthly contact activity.
   */
  const areaData = {
    labels: data.months,
    datasets: [
      {
        label: "Contacts Added",
        data: data.monthlyContacts,
        fill: true,
        backgroundColor: "rgba(20,184,166,0.12)",
        borderColor: "rgba(20,184,166,0.9)",
        tension: 0.4,
      },
    ],
  };

  /*
   * Recent contact activity.
   */
  const barData = {
    labels: data.recentMonths,
    datasets: [
      {
        label: "Contacts Added",
        data: data.recentContacts,
        backgroundColor: "rgba(30,58,91,0.9)",
      },
    ],
  };

  /*
   * Contact completeness.
   */
  const doughnutData = {
    labels: [
      "Complete Contacts",
      "Needs Details",
    ],
    datasets: [
      {
        data: data.contactStatus,
        backgroundColor: [
          primaryColor,
          sidebarColor,
        ],
      },
    ],
  };

  const growthPercent = data.newContactsPercent;

  const growthText =
    growthPercent > 0
      ? `+${growthPercent}%`
      : `${growthPercent}%`;

  return (
    <>
      <style>
        {`
          @media (max-width: 600px) {
            .analytics-main-grid {
              grid-template-columns: 1fr !important;
            }

            .analytics-bottom-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <div
        className="analytics-main-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 18,
        }}
      >
        {/* Monthly Contact Activity */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 18,
            boxShadow: "var(--shadow-xs)",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: 8,
            }}
          >
            Contact Growth
          </div>

          <div style={{ height: 220 }}>
            <Line
              data={areaData}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: "rgba(16,24,40,0.04)",
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Total Contacts */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 18,
              minHeight: 120,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: "var(--heading-color)",
                marginBottom: 6,
              }}
            >
              TOTAL CONTACTS
            </div>

            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              {data.totalContacts.toLocaleString()}
            </div>
          </div>

          {/* New Contacts */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 18,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: "var(--heading-color)",
                marginBottom: 6,
              }}
            >
              CONTACT GROWTH
            </div>

            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {growthText}
            </div>
          </div>

          {/* Contact Completeness */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 18,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: "var(--heading-color)",
                marginBottom: 6,
              }}
            >
              CONTACTS WITH TITLE
            </div>

            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {data.contactsWithTitlePercent}%
            </div>

            <div
              style={{
                height: 8,
                background: "rgba(16,24,40,0.06)",
                borderRadius: 8,
                marginTop: 12,
              }}
            >
              <div
                style={{
                  width: `${data.contactsWithTitlePercent}%`,
                  height: 8,
                  background: "var(--primary)",
                  borderRadius: 8,
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Analytics */}
        <div
          className="analytics-bottom-grid"
          style={{
            gridColumn: "1 / -1",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 18,
            marginTop: 8,
          }}
        >
          {/* Recent Contact Activity */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "var(--heading-color)",
                marginBottom: 8,
              }}
            >
              Recent Contact Activity
            </div>

            <div style={{ height: 120 }}>
              <Bar
                data={barData}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Contact Completeness */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "var(--heading-color)",
              }}
            >
              Contact Completeness
            </div>

            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                marginTop: 8,
              }}
            >
              {data.contactsWithTitlePercent}%
            </div>

            <div
              style={{
                height: 8,
                width: "100%",
                marginTop: 12,
                background: "rgba(16,24,40,0.06)",
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  width: `${data.contactsWithTitlePercent}%`,
                  height: 8,
                  background: "var(--primary)",
                  borderRadius: 8,
                }}
              />
            </div>
          </div>

          {/* Contact Status */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                color: "var(--heading-color)",
              }}
            >
              Contact Status
            </div>

            <div
              style={{
                width: 120,
                height: 120,
                marginTop: 8,
              }}
            >
              <Doughnut
                data={doughnutData}
                options={{
                  plugins: {
                    legend: {
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;