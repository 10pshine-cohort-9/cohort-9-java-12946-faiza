import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

// Professional Icons
const IconArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const IconBriefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    workEmail: "",
    personalEmail: "",
    workPhone: "",
    homePhone: "",
    personalPhone: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContact();
  }, [id]);

  const fetchContact = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await api.get(`/contacts/${id}`);
      setFormData({
        firstName: response.data.firstName || "",
        lastName: response.data.lastName || "",
        title: response.data.title || "",
        workEmail: response.data.workEmail || "",
        personalEmail: response.data.personalEmail || "",
        workPhone: response.data.workPhone || "",
        homePhone: response.data.homePhone || "",
        personalPhone: response.data.personalPhone || "",
      });
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }
      setError(err.response?.data?.error || "Unable to load contact.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      setError("");
      await api.put(`/contacts/${id}`, formData);
      navigate(`/contacts/${id}`);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }
      setError(err.response?.data?.error || "Unable to update contact.");
    } finally {
      setSaving(false);
    }
  };

  const clearSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
                  border: '3px solid var(--border)', 
                  borderTopColor: 'var(--primary)', 
            borderRadius: '50%', 
            margin: '0 auto 16px',
            animation: 'spin 0.7s linear infinite'
          }}></div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Loading contact...</p>
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--background);
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== APP CONTAINER ===== */
        .app-container {
          min-height: 100vh;
          background: var(--background);
        }

        /* ===== HEADER ===== */
        .dashboard-header {
          min-height: 72px;
          padding: 16px 5%;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 20;
          gap: 16px;
        }

        .dashboard-header h1 {
          margin: 0;
          font-size: 20px;
          color: #1e1b4b;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .dashboard-header p {
          margin-top: 2px;
          color: #8b8a9e;
          font-size: 13px;
        }

        .logout-button {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          color: #ef4444;
        }

        .logout-button:hover {
          background: #fee2e2;
          border-color: #fca5a5;
        }

        /* ===== CONTENT ===== */
        .dashboard-content {
          width: 92%;
          max-width: 680px;
          margin: 0 auto;
          padding: 28px 0 60px;
        }

        /* ===== BACK BUTTON ===== */
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          border: 1.5px solid var(--border-strong);
          background: var(--surface);
          color: var(--heading-color);
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .back-button:hover {
          border-color: var(--primary-hover);
          background: rgba(var(--primary-rgb), 0.06);
          transform: translateX(-4px);
        }

        /* ===== FORM CARD ===== */
        .contact-form-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 40px;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.04);
          animation: fadeInUp 0.5s ease;
        }

        .contact-form-card h1 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 600;
          color: #1e1b4b;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }

        .contact-form-card .auth-subtitle {
          color: #8b8a9e;
          font-size: 14px;
          margin-bottom: 24px;
        }

        /* ===== ALERTS ===== */
        .error-message {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
          margin-bottom: 20px;
          animation: slideDown 0.3s ease;
        }

        /* ===== FORM ===== */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 6px;
        }

        .form-group label .label-icon {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          font-size: 14px;
          background: #faf5ff;
          color: #1e1b4b;
          transition: all 0.3s ease;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .form-group input::placeholder {
          color: #b8b0cc;
        }

        .form-group input:hover {
          border-color: #d8b4fe;
          background: #ffffff;
        }

       .form-group input:focus {
  border-color: var(--primary);
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.25);
}

        /* ===== SECTION HEADERS ===== */
        .form-section-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 24px 0 16px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .form-section-title:first-of-type {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }

        /* ===== FORM ACTIONS ===== */
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .form-actions button {
          flex: 1;
          padding: 13px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.18s ease;
          cursor: pointer;
        }

        .form-actions button[type="button"] {
          background: var(--surface);
          border: 1.5px solid var(--border);
          color: var(--heading-color);
        }

        .form-actions button[type="button"]:hover {
          background: #f5f0ff;
          border-color: #d8b4fe;
        }

        .form-actions button[type="submit"] {
          background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
          border: none;
          color: #fff;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
        }

        .form-actions button[type="submit"]:hover:not(:disabled) {
          box-shadow: 0 6px 28px rgba(139, 92, 246, 0.35);
          transform: translateY(-2px);
        }

        .form-actions button[type="submit"]:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .dashboard-header {
            padding: 14px 4%;
            flex-wrap: wrap;
          }

          .dashboard-header h1 {
            font-size: 18px;
          }

          .dashboard-content {
            width: 95%;
            padding: 20px 0 40px;
          }

          .contact-form-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .contact-form-card h1 {
            font-size: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .form-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .contact-form-card {
            padding: 18px 14px;
          }

          .contact-form-card h1 {
            font-size: 20px;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* ===== MAIN UI ===== */}
      <div className="app-container">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>✏️ Edit Contact</h1>
            <p>Update your contact information</p>
          </div>
          <button className="logout-button" onClick={clearSession}>
            Logout
          </button>
        </header>

        {/* Main Content */}
        <main className="dashboard-content">
          <button className="back-button" onClick={() => navigate(`/contacts/${id}`)}>
            <IconArrowLeft />
            Back to Contact
          </button>

          <div className="contact-form-card">
            <h1>Edit Contact</h1>
            <p className="auth-subtitle">Update your contact information</p>

            {error && (
              <div className="error-message">❌ {error}</div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name Section */}
              <div className="form-section-title">👤 Personal Information</div>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    <span className="label-icon">
                      <IconUser />
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <span className="label-icon">
                      <IconUser />
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  <span className="label-icon">
                    <IconBriefcase />
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter job title"
                />
              </div>

              {/* Email Section */}
              <div className="form-section-title">✉️ Email Addresses</div>
              <div className="form-group">
                <label>
                  <span className="label-icon">
                    <IconMail />
                    Work Email
                  </span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="Enter work email"
                />
              </div>

              <div className="form-group">
                <label>
                  <span className="label-icon">
                    <IconMail />
                    Personal Email
                  </span>
                </label>
                <input
                  type="email"
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleChange}
                  placeholder="Enter personal email"
                />
              </div>

              {/* Phone Section */}
              <div className="form-section-title">📞 Phone Numbers</div>
              <div className="form-group">
                <label>
                  <span className="label-icon">
                    <IconPhone />
                    Work Phone
                  </span>
                </label>
                <input
                  type="text"
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                  placeholder="Enter work phone"
                />
              </div>

              <div className="form-group">
                <label>
                  <span className="label-icon">
                    <IconPhone />
                    Home Phone
                  </span>
                </label>
                <input
                  type="text"
                  name="homePhone"
                  value={formData.homePhone}
                  onChange={handleChange}
                  placeholder="Enter home phone"
                />
              </div>

              <div className="form-group">
                <label>
                  <span className="label-icon">
                    <IconPhone />
                    Personal Phone
                  </span>
                </label>
                <input
                  type="text"
                  name="personalPhone"
                  value={formData.personalPhone}
                  onChange={handleChange}
                  placeholder="Enter personal phone"
                />
              </div>

              {/* Actions */}
              <div className="form-actions">
                <button type="button" onClick={() => navigate(`/contacts/${id}`)}>
                  Cancel
                </button>
                <button type="submit" disabled={saving}>
                  {saving ? "Updating..." : "💾 Update Contact"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default EditContact;