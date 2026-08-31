import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

function AddContact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    workEmail: "",
    personalEmail: "",
    workPhone: "",
    homePhone: "",
    personalPhone: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/contacts", formData);
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }
      setError(err.response?.data?.error || "Unable to create contact.");
    } finally {
      setLoading(false);
    }
  };

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
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        /* ===== FORM CARD ===== */
        .contact-form-card {
          width: 100%;
          max-width: 680px;
                  background: var(--surface);
                  border: 1px solid var(--border);
                  border-radius: var(--radius-lg);
          padding: 36px 40px;
                  box-shadow: var(--shadow-sm);
                  animation: fadeInUp 0.45s var(--ease);
        }

        /* ===== BACK BUTTON ===== */
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: #ffffff;
          color: var(--heading-color);
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .back-button:hover {
                  border-color: var(--primary);
                  background: var(--primary-light);
          transform: translateX(-4px);
        }

        /* ===== HEADER ===== */
        .auth-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .auth-logo {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
                  background: linear-gradient(135deg, var(--primary), var(--primary-hover));
          color: #fff;
          font-size: 24px;
          font-weight: 700;
                  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.18);
        }

        .auth-header h1 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 600;
          color: #1e1b4b;
          letter-spacing: -0.01em;
        }

        .auth-header .auth-subtitle {
          color: #8b8a9e;
          font-size: 14px;
          margin-top: 4px;
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
          color: var(--heading-color);
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
          background: var(--surface);
          color: var(--text-primary);
          transition: all 0.3s ease;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .form-group input::placeholder {
          color: #b8b0cc;
        }

        .form-group input:hover {
          border-color: var(--border-strong);
          background: var(--surface);
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
          background: rgba(var(--primary-rgb), 0.06);
          border-color: var(--border-strong);
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
          .app-container {
            padding: 30px 16px;
          }

          .contact-form-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .auth-header h1 {
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

          .auth-header h1 {
            font-size: 20px;
          }

          .auth-logo {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .back-button {
            padding: 8px 16px;
            font-size: 12px;
          }
        }
      `}</style>

      {/* ===== MAIN UI ===== */}
      <div className="app-container">
        <div className="contact-form-card">
          {/* Back Button */}
          <button className="back-button" onClick={() => navigate("/dashboard")}>
            <IconArrowLeft />
            Back to Contacts
          </button>

          {/* Header */}
          <div className="auth-header">
            <div className="auth-logo">
              <IconPlus />
            </div>
            <h1>Add New Contact</h1>
            <p className="auth-subtitle">Create a new professional contact</p>
          </div>

          {/* Error */}
          {error && (
            <div className="error-message">❌ {error}</div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
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
                  Job Title
                </span>
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter job title (e.g. Software Engineer)"
              />
            </div>

            {/* Email Information */}
            <div className="form-section-title">✉️ Email Addresses</div>
            <div className="form-row">
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
                  placeholder="office@company.com"
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
                  placeholder="personal@email.com"
                />
              </div>
            </div>

            {/* Phone Information */}
            <div className="form-section-title">📞 Phone Numbers</div>
            <div className="form-row">
              <div className="form-group">
                <label>
                  <span className="label-icon">
                    <IconPhone />
                    Work Phone
                  </span>
                </label>
                <input
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                  placeholder="Enter work number"
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
                  name="homePhone"
                  value={formData.homePhone}
                  onChange={handleChange}
                  placeholder="Enter home number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                <span className="label-icon">
                  <IconPhone />
                  Personal Phone
                </span>
              </label>
              <input
                name="personalPhone"
                value={formData.personalPhone}
                onChange={handleChange}
                placeholder="Enter personal number"
              />
            </div>

            {/* Actions */}
            <div className="form-actions">
              <button type="button" onClick={() => navigate("/dashboard")}>
                Cancel
              </button>
              <button type="submit" disabled={loading}>
                {loading ? "Saving..." : "💾 Save Contact"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddContact;