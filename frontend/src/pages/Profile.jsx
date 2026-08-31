import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

// Professional Icons
const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
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

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

function Profile() {
  const navigate = useNavigate();
const [user, setUser] = useState(null);

useEffect(() => {
  try {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  } catch (error) {
    console.error("Failed to parse user data:", error);
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  }
}, [navigate]);

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      setLoading(true);
      await api.put("/auth/change-password", {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword
      });

      setSuccess("Password changed successfully.");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
      setShowPasswordForm(false);
    } catch (err) {
      setError(err.response?.data?.error || "Unable to change password.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const getInitials = () => {
    const first = user?.firstName?.charAt(0) || "U";
    const last = user?.lastName?.charAt(0) || "";
    return (first + last).toUpperCase();
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

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
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

        .dashboard-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .back-button {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: rgba(var(--primary-rgb), 0.06);
          border: 1.5px solid var(--border-strong);
         color: var(--heading-color);
        }

        .back-button:hover {
          background: rgba(var(--primary-rgb), 0.10);
          border-color: var(--primary-hover);
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
          max-width: 780px;
          margin: 0 auto;
          padding: 28px 0 60px;
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

        .success-message {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
          margin-bottom: 20px;
          animation: slideDown 0.3s ease;
        }

        /* ===== PROFILE CARD ===== */
        .profile-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 40px;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.04);
          animation: fadeInUp 0.5s ease;
        }

        /* ===== PROFILE HEADER ===== */
        .profile-header {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 28px;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
          color: #fff;
          font-size: 30px;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.14);
        }

        .profile-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: #1e1b4b;
          letter-spacing: -0.01em;
        }

        .profile-header p {
          color: #8b8a9e;
          font-size: 14px;
          margin-top: 4px;
        }

        /* ===== PROFILE SECTION ===== */
        .profile-section h3 {
          font-size: 13px;
          font-weight: 700;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 16px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .detail-item {
          padding: 14px 18px;
          border-radius: 12px;
          background: #faf5ff;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

   .detail-item:hover {
  border-color: var(--border-strong);
  background: var(--primary-light);
}
        .detail-item .detail-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }

        .detail-item .detail-label svg {
          opacity: 0.7;
        }

        .detail-item strong {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: #1e1b4b;
          word-break: break-word;
          margin-top: 2px;
        }

        .status-badge {
          display: inline-block;
          padding: 2px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          background: #ecfdf5;
          color: #065f46;
          margin-top: 2px;
        }

        /* ===== CHANGE PASSWORD BUTTON ===== */
        .change-password-btn {
          width: 100%;
          padding: 14px;
          border: 1.5px dashed #d8b4fe;
          border-radius: 12px;
          background: #faf5ff;
          color: #7c3aed;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .change-password-btn:hover {
          background: var(--primary-light);
          border-color: #c084fc;
          transform: translateY(-2px);
        }

        /* ===== PASSWORD SECTION ===== */
        .password-section {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .password-section h3 {
          font-size: 13px;
          font-weight: 700;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
        }

        /* ===== FORM ===== */
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

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid #e9d5ff;
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

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .form-actions button {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .form-actions button[type="button"] {
          background: #ffffff;
          border: 1.5px solid #e9d5ff;
          color: #4c1d95;
        }

        .form-actions button[type="button"]:hover {
          background: #f5f0ff;
          border-color: #d8b4fe;
        }

        .form-actions button[type="submit"] {
          background: var(--primary);
          border: none;
          color: #fff;
          box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.12);
        }

        .form-actions button[type="submit"]:hover:not(:disabled) {
          box-shadow: 0 10px 40px rgba(var(--primary-rgb), 0.18);
          transform: translateY(-2px);
        }

        .form-actions button[type="submit"]:disabled {
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

          .profile-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .profile-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column;
          }

          .dashboard-actions {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .profile-card {
            padding: 18px 14px;
          }

          .profile-avatar {
            width: 64px;
            height: 64px;
            font-size: 24px;
          }

          .profile-header h2 {
            font-size: 20px;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .dashboard-actions {
            width: 100%;
          }

          .dashboard-actions button {
            flex: 1;
            text-align: center;
          }
        }
      `}</style>

      {/* ===== MAIN UI ===== */}
      <div className="app-container">
        {/* Header */}
        <header className="dashboard-header">
          <div>
            <h1>👤 My Profile</h1>
            <p>Manage your account and security</p>
          </div>
          <div className="dashboard-actions">
            <button className="back-button" onClick={() => navigate("/dashboard")}>
              ← Dashboard
            </button>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="dashboard-content">
          {/* Alerts */}
          {(error || success) && (
            <>
              {error && <div className="error-message">❌ {error}</div>}
              {success && <div className="success-message">✅ {success}</div>}
            </>
          )}

          {/* Profile Card */}
          <div className="profile-card">
            {/* Profile Header */}
            <div className="profile-header">
              <div className="profile-avatar">{getInitials()}</div>
              <div>
                <h2>{user?.firstName || "User"} {user?.lastName || ""}</h2>
                <p>Contact Management User</p>
              </div>
            </div>

            {/* User Information */}
            <div className="profile-section">
              <h3>📋 User Information</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <div className="detail-label">
                    <IconUser />
                    <span>First Name</span>
                  </div>
                  <strong>{user?.firstName || "N/A"}</strong>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <IconUser />
                    <span>Last Name</span>
                  </div>
                  <strong>{user?.lastName || "N/A"}</strong>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <IconMail />
                    <span>Email</span>
                  </div>
                  <strong>{user?.email || "N/A"}</strong>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <IconPhone />
                    <span>Phone</span>
                  </div>
                  <strong>{user?.phone || "N/A"}</strong>
                </div>

                <div className="detail-item">
                  <div className="detail-label">
                    <IconCheck />
                    <span>Account Status</span>
                  </div>
                  <span className="status-badge">● Active</span>
                </div>
              </div>
            </div>

            {/* Change Password */}
            {!showPasswordForm && (
              <button
                className="change-password-btn"
                onClick={() => {
                  setShowPasswordForm(true);
                  setError("");
                  setSuccess("");
                }}
              >
                <IconLock />
                Change Password
              </button>
            )}

            {/* Password Form */}
            {showPasswordForm && (
              <div className="password-section">
                <h3>🔒 Change Password</h3>
                <form onSubmit={handleChangePassword}>
                  <div className="form-group">
                    <label htmlFor="currentPassword">
  Current Password
</label>

<input
  id="currentPassword"
  type="password"
  name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      placeholder="Enter current password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="newPassword">
  New Password
</label>

<input
  id="newPassword"
  type="password"
  name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      placeholder="Enter new password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">
  Confirm Password
</label>

<input
  id="confirmPassword"
  type="password"
  name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm new password"
                      required
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      onClick={() => {
                        setShowPasswordForm(false);
                        setError("");
                        setSuccess("");
                      }}
                    >
                      Cancel
                    </button>
                    <button type="submit" disabled={loading}>
                      {loading ? "Changing..." : "Update Password"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;