import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

// Professional Icons
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const IconAlertCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
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
      const response = await api.post("/auth/login", formData);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.error ||
        "Login failed. Please check your credentials."
      );
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
          background: #f6f5fb;
          overflow: hidden;
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -24px) scale(1.06); }
        }

        @keyframes floatBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-24px, 30px) scale(1.08); }
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== Container ===== */
        .auth-split {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          min-height: 100vh;
          background: #f6f5fb;
          overflow: hidden;
        }

        /* ===== LEFT PANEL - PASTEL BRAND ===== */
        .auth-brand {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 56px;
          background: linear-gradient(155deg, #eae7ff 0%, #e3d9fb 45%, #f7e6f4 80%, #fdeaef 100%);
          color: #241f4d;
        }

        .auth-brand .orb-1 {
          position: absolute;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(147, 137, 246, 0.22) 0%, transparent 70%);
          top: -240px;
          right: -180px;
          animation: floatBlob 16s ease-in-out infinite;
        }

        .auth-brand .orb-2 {
          position: absolute;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(236, 178, 220, 0.18) 0%, transparent 70%);
          bottom: -180px;
          left: -140px;
          animation: floatBlob2 20s ease-in-out infinite;
        }

        .auth-brand .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(79, 70, 229, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.035) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .brand-content {
          position: relative;
          z-index: 2;
          max-width: 420px;
          width: 100%;
          animation: fadeInLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .brand-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 44px;
        }

        .brand-logo {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: rgba(79, 70, 229, 0.12);
          border: 1px solid rgba(79, 70, 229, 0.16);
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 18px;
          color: #4f46e5;
          box-shadow: 0 8px 28px rgba(79, 70, 229, 0.08);
        }

        .brand-logo-wrapper span {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #241f4d;
        }

        .brand-content h1 {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 600;
          font-style: italic;
          line-height: 1.12;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
          color: #201b47;
        }

        .brand-content .subtitle {
          color: #504a72;
          font-size: 15.5px;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 370px;
        }

        .brand-features {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .brand-features li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 14px;
          font-weight: 500;
          color: #322c5c;
          padding: 12px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.7);
          transition: all 0.25s ease;
        }

        .brand-features li:hover {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(79, 70, 229, 0.18);
        }

        .feature-icon {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(79, 70, 229, 0.1);
          color: #4f46e5;
        }

        /* ===== RIGHT PANEL - FORM ===== */
        .auth-form {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 30px;
          background: #f6f5fb;
        }

        .auth-card {
          width: 100%;
          max-width: 410px;
          background: #ffffff;
          padding: 48px 42px 40px;
          border-radius: 20px;
          box-shadow: 
            0 1px 3px rgba(30, 27, 75, 0.02),
            0 4px 16px rgba(79, 70, 229, 0.05),
            0 8px 44px rgba(79, 70, 229, 0.04);
          border: 1px solid rgba(226,232,240, 0.6);
          animation: fadeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.08s backwards;
        }

        /* Header */
        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .auth-header .welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          background: #eef2ff;
          color: #4f46e5;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.01em;
          margin-bottom: 18px;
        }

        .auth-header .welcome-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4f46e5;
          animation: pulseDot 2s ease-in-out infinite;
        }

        .auth-header h1 {
          font-family: 'Fraunces', serif;
          font-size: 30px;
          font-weight: 600;
          color: #201b47;
          letter-spacing: -0.01em;
        }

        .auth-header p {
          margin-top: 8px;
          color: #6b6389;
          font-size: 14px;
        }

        /* Error Message */
        .error-message {
          padding: 13px 16px;
          border-radius: 12px;
          margin-bottom: 20px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
          animation: shake 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ===== FIXED FORM FIELDS ===== */
        .form-group {
          position: relative;
          margin-bottom: 20px;
        }

        .form-group .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          z-index: 2;
          transition: color 0.25s ease;
          pointer-events: none;
        }

        .form-group input {
          width: 100%;
          padding: 0 14px 0 46px;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          background: #fafbfc;
          color: #1e1b4b;
          transition: all 0.25s ease;
          height: 56px;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .form-group input::placeholder {
          color: #b8b0cc;
          font-weight: 400;
        }

        .form-group input:hover {
          border-color: #c4b5fd;
          background: #ffffff;
        }

        .form-group input:focus {
          border-color: #818cf8;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.1);
        }

        .form-group input:focus ~ .input-icon {
          color: #818cf8;
        }

        /* ===== FLOATING LABEL - FIXED ===== */
        .form-group.floating input {
          padding: 22px 14px 6px 46px;
          height: 58px;
        }

        .form-group.floating label {
          position: absolute;
          left: 46px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          font-weight: 500;
          color: #9ca3af;
          pointer-events: none;
          transition: all 0.22s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 1;
          background: transparent;
          padding: 0 2px;
        }

        .form-group.floating input:focus + label,
        .form-group.floating input:not(:placeholder-shown) + label {
          top: 9px;
          transform: scale(0.8);
          transform-origin: left center;
          color: #818cf8;
          font-weight: 600;
          background: #ffffff;
          padding: 0 4px;
        }

        .form-group.floating input:focus + label {
          color: #818cf8;
        }

        /* Submit Button */
        .auth-button {
          width: 100%;
          padding: 16px 24px;
          margin-top: 8px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #818cf8 0%, #a78bfa 100%);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 16px rgba(129, 140, 248, 0.25);
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.25s ease;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
        }

        .auth-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(129, 140, 248, 0.32);
        }

        .auth-button:active:not(:disabled) {
          transform: scale(0.98);
        }

        .auth-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        .auth-button .spinner {
          width: 20px;
          height: 20px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* Footer */
        .auth-footer {
          margin-top: 26px;
          text-align: center;
          color: #6b6389;
          font-size: 14px;
        }

        .auth-footer a {
          color: #818cf8;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .auth-footer a:hover {
          color: #6366f1;
          text-decoration: underline;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .brand-content h1 { font-size: 34px; }
        }

        @media (max-width: 900px) {
          .auth-split { grid-template-columns: 1fr; }
          .auth-brand { padding: 46px 30px; min-height: 260px; }
          .brand-content { max-width: 100%; text-align: center; }
          .brand-logo-wrapper { justify-content: center; }
          .brand-content .subtitle { margin-left: auto; margin-right: auto; }
          .brand-features { max-width: 400px; margin: 0 auto; }
          .brand-features li { justify-content: center; }
          .auth-form { padding: 30px 20px; }
          .auth-card { padding: 34px 26px 30px; }
        }

        @media (max-width: 480px) {
          .auth-brand { padding: 28px 20px; min-height: 190px; }
          .brand-content h1 { font-size: 25px; }
          .brand-logo-wrapper span { font-size: 17px; }
          .brand-features li { padding: 10px 14px; font-size: 13px; }
          .auth-card { padding: 26px 18px 22px; }
          .auth-header h1 { font-size: 22px; }
          .form-group.floating input { height: 52px; padding: 20px 12px 6px 40px; }
          .form-group.floating label { left: 40px; font-size: 13px; }
          .auth-button { height: 50px; font-size: 14px; }
          .auth-header .welcome-badge { font-size: 11px; padding: 4px 14px; }
        }

        @media (max-width: 380px) {
          .auth-card { padding: 20px 14px 20px; }
          .brand-features { display: none; }
        }
      `}</style>

      {/* ===== MAIN UI ===== */}
      <div className="auth-split">
        {/* LEFT: Brand Panel */}
        <div className="auth-brand">
          <div className="grid-pattern"></div>
          <div className="orb-1"></div>
          <div className="orb-2"></div>

          <div className="brand-content">
            <div className="brand-logo-wrapper">
              <div className="brand-logo">CM</div>
              <span>Contact Manager</span>
            </div>

            <h1>Manage your<br />contacts, smarter</h1>
            <p className="subtitle">
              One clean, secure place to organize every personal and
              professional contact you care about.
            </p>

            <ul className="brand-features">
              <li>
                <span className="feature-icon"><IconCheck /></span>
                Fast search across all your contacts
              </li>
              <li>
                <span className="feature-icon"><IconCheck /></span>
                Work, home &amp; personal details in one card
              </li>
              <li>
                <span className="feature-icon"><IconCheck /></span>
                Your data stays private and secure
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="auth-form">
          <div className="auth-card">
            <div className="auth-header">
              <div className="welcome-badge">Welcome back</div>
              <h1>Sign in</h1>
              <p>Login to manage your contacts securely</p>
            </div>

            {error && (
              <div className="error-message">
                <IconAlertCircle />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group floating">
                <input
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder=" "
                  autoComplete="username"
                  required
                />
                <label>Email or Phone</label>
                <span className="input-icon"><IconMail /></span>
              </div>

              <div className="form-group floating">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" "
                  autoComplete="current-password"
                  required
                />
                <label>Password</label>
                <span className="input-icon"><IconLock /></span>
              </div>

              <button
                type="submit"
                className="auth-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Signing in...
                  </>
                ) : (
                  <>
                    Get started
                    <IconArrowRight />
                  </>
                )}
              </button>
            </form>

            <p className="auth-footer">
              Don't have an account?{" "}
              <Link to="/register">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;