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

const IconEdit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const IconWarning = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

function ContactDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchContact();
  }, [id]);

  const fetchContact = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(`/contacts/${id}`);
      setContact(response.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }
      setError(err.response?.data?.error || "Unable to load contact details.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      setError("");

      await api.delete(`/contacts/${id}`);
      navigate("/dashboard");
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }
      setError(err.response?.data?.error || "Unable to delete contact.");
      setDeleting(false);
      setShowDeleteModal(false);
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
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Loading contact details...</p>
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error && !contact) {
    return (
          <div style={{ minHeight: '100vh', background: 'var(--background)', padding: '40px 5%' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ 
            padding: '14px 20px', 
            borderRadius: '12px', 
            background: 'var(--danger-light)', 
            color: 'var(--danger)', 
            border: '1px solid rgba(220,34,34,0.12)',
            marginBottom: '20px'
          }}>❌ {error}</div>
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              background: 'var(--primary)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(var(--primary-rgb), 0.18)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 28px rgba(var(--primary-rgb), 0.28)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(var(--primary-rgb), 0.18)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            ← Back to Contacts
          </button>
        </div>
      </div>
    );
  }

  if (!contact) return null;

  const initials = ((contact.firstName?.[0] || "") + (contact.lastName?.[0] || "")).toUpperCase() || "?";

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

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
          max-width: 900px;
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
          border: 1.5px solid var(--border);
          background: var(--surface);
          color: var(--heading-color);
          font-weight: 600;
          font-size: 13px;
          transition: all 0.18s ease;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .back-button:hover {
          border-color: var(--border-strong);
          background: rgba(var(--primary-rgb), 0.06);
          transform: translateX(-4px);
        }

        /* ===== DETAILS CARD ===== */
        .contact-details-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 40px;
          box-shadow: 0 6px 24px rgba(16,24,40,0.04);
          animation: fadeInUp 0.5s ease;
        }

        .contact-details-header {
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .contact-details-header .avatar-large {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
          color: #ffffff;
          font-weight: 700;
          font-size: 24px;
          flex-shrink: 0;
        }

        .contact-details-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .contact-details-header p {
         color: var(--heading-color);
          font-weight: 600;
          font-size: 14px;
          margin-top: 4px;
        }

        /* ===== SECTIONS ===== */
        .contact-details-section {
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
        }

        .contact-details-section:last-of-type {
          border-bottom: none;
        }

        .contact-details-section h3 {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 16px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .detail-item {
          padding: 14px 18px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          transition: all 0.18s ease;
        }

        .detail-item:hover {
          border-color: var(--border-strong);
          background: var(--surface);
        }

        .detail-item span {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }

        .detail-item strong {
          font-size: 15px;
          font-weight: 600;
          color: #1e1b4b;
          word-break: break-word;
        }

        /* ===== ACTION BUTTONS ===== */
        .contact-details-actions {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .edit-contact-button,
        .delete-contact-button {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1.5px solid transparent;
        }

        .edit-contact-button {
          background: var(--sidebar-bg);
          border-color: transparent;
          color: #fff;
        }

        .edit-contact-button:hover {
          background: var(--heading-color);
          box-shadow: 0 8px 32px rgba(30,58,91,0.12);
          transform: translateY(-2px);
        }

        .delete-contact-button {
          background: var(--danger-light);
          border-color: rgba(220,34,34,0.12);
          color: var(--danger);
        }

        .delete-contact-button:hover:not(:disabled) {
          background: #fee2e2;
          border-color: rgba(220,34,34,0.28);
          transform: translateY(-2px);
        }

        .delete-contact-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ===== ERROR ===== */
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

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(30, 27, 75, 0.5);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }

        .modal-box {
          width: 100%;
          max-width: 400px;
          background: var(--surface);
          border-radius: 20px;
          padding: 36px 32px 28px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(16,24,40,0.08);
          animation: modalSlideUp 0.3s ease;
          border: 1px solid var(--border);
        }

        .modal-warning-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fef2f2;
          color: #ef4444;
        }

        .modal-box h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1e1b4b;
          margin-bottom: 8px;
        }

        .modal-text {
          font-size: 14px;
          color: #6d5a8a;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .modal-text strong {
          color: #1e1b4b;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
        }

        .modal-cancel-button,
        .modal-confirm-delete-button {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1.5px solid transparent;
        }

        .modal-cancel-button {
          background: #f5f0ff;
          border-color: var(--border);
          color: #4c1d95;
        }

        .modal-cancel-button:hover:not(:disabled) {
          background: #f3e8ff;
          border-color: #d8b4fe;
        }

        .modal-confirm-delete-button {
          background: #ef4444;
          color: #fff;
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.2);
        }

        .modal-confirm-delete-button:hover:not(:disabled) {
          background: #dc2626;
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.3);
          transform: translateY(-2px);
        }

        .modal-cancel-button:disabled,
        .modal-confirm-delete-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
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

          .contact-details-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .contact-details-header {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .contact-details-actions {
            flex-direction: column;
          }

          .modal-box {
            padding: 28px 20px 24px;
          }
        }

        @media (max-width: 480px) {
          .contact-details-card {
            padding: 18px 14px;
          }

          .contact-details-header .avatar-large {
            width: 60px;
            height: 60px;
            font-size: 20px;
          }

          .contact-details-header h2 {
            font-size: 20px;
          }

          .modal-box {
            padding: 24px 16px 20px;
          }
        }
      `}</style>

      {/* ===== MAIN UI ===== */}
      <div className="app-container">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>📇 Contact Details</h1>
            <p>View and manage contact information</p>
          </div>
          <button className="logout-button" onClick={clearSession}>
            Logout
          </button>
        </header>

        {/* Main Content */}
        <main className="dashboard-content">
          <button className="back-button" onClick={() => navigate("/dashboard")}>
            <IconArrowLeft />
            Back to Contacts
          </button>

          <div className="contact-details-card">
            {/* Header */}
            <div className="contact-details-header">
              <div className="avatar-large">{initials}</div>
              <div>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p>{contact.title || "No title"}</p>
              </div>
            </div>

            {error && (
              <div className="error-message">❌ {error}</div>
            )}

            {/* Contact Information */}
            <div className="contact-details-section">
              <h3>📋 Contact Information</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span>First Name</span>
                  <strong>{contact.firstName || "N/A"}</strong>
                </div>
                <div className="detail-item">
                  <span>Last Name</span>
                  <strong>{contact.lastName || "N/A"}</strong>
                </div>
                <div className="detail-item">
                  <span>Title</span>
                  <strong>{contact.title || "N/A"}</strong>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="contact-details-section">
              <h3>✉️ Email Addresses</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span>Work Email</span>
                  <strong>{contact.workEmail || "N/A"}</strong>
                </div>
                <div className="detail-item">
                  <span>Personal Email</span>
                  <strong>{contact.personalEmail || "N/A"}</strong>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="contact-details-section">
              <h3>📞 Phone Numbers</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span>Work Phone</span>
                  <strong>{contact.workPhone || "N/A"}</strong>
                </div>
                <div className="detail-item">
                  <span>Home Phone</span>
                  <strong>{contact.homePhone || "N/A"}</strong>
                </div>
                <div className="detail-item">
                  <span>Personal Phone</span>
                  <strong>{contact.personalPhone || "N/A"}</strong>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="contact-details-actions">
              <button
                className="edit-contact-button"
                onClick={() => navigate(`/contacts/${contact.id}/edit`)}
              >
                <IconEdit />
                Edit Contact
              </button>
              <button
                className="delete-contact-button"
                onClick={() => setShowDeleteModal(true)}
                disabled={deleting}
              >
                <IconTrash />
                {deleting ? "Deleting..." : "Delete Contact"}
              </button>
            </div>
          </div>
        </main>

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="modal-overlay" onClick={() => !deleting && setShowDeleteModal(false)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="modal-warning-icon"><IconWarning /></div>
              <h3>Delete Contact?</h3>
              <p className="modal-text">
                Are you sure you want to delete{" "}
                <strong>{contact.firstName} {contact.lastName}</strong>?
                <br />
                This action cannot be undone.
              </p>
              <div className="modal-actions">
                <button
                  className="modal-cancel-button"
                  onClick={() => setShowDeleteModal(false)}
                  disabled={deleting}
                >
                  Cancel
                </button>
                <button
                  className="modal-confirm-delete-button"
                  onClick={handleDelete}
                  disabled={deleting}
                >
                  {deleting ? "Deleting..." : "Yes, Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ContactDetails;