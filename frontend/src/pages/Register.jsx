import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  IconCheck,
  IconMail,
  IconLock,
  IconUser,
  IconPhone,
  IconArrowRight,
  IconAlertCircle,
} from "../components/Icons";



function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
     const response = await api.post("/auth/register", formData);

const { token, ...userData } = response.data;

if (token) {
  localStorage.setItem("token", token);
}

localStorage.setItem("user", JSON.stringify(userData));

navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.error ||
        "Registration failed. Please try again."
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
  background: #F7F9FB;
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
  background: #F7F9FB;
}

        /* ===== LEFT PANEL ===== */
        .auth-brand {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 56px;
          background: linear-gradient(155deg, #1E3A5F 0%, #12323f 55%);
          color: #fff;
        }

        .auth-brand .orb-1 {
          position: absolute;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(20,184,166,0.22) 0%, transparent 70%);
          top: -240px;
          right: -180px;
          animation: floatBlob 16s ease-in-out infinite;
        }

        .auth-brand .orb-2 {
          position: absolute;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(30,58,95,0.16) 0%, transparent 70%);
          bottom: -180px;
          left: -140px;
          animation: floatBlob2 20s ease-in-out infinite;
        }

        .auth-brand .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(20,184,166, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,184,166, 0.03) 1px, transparent 1px);
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
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          box-shadow: 0 8px 28px rgba(18,40,48,0.08);
        }

        .brand-logo-wrapper span {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #ffffff;
}

.brand-content h1 {
  font-family: 'Fraunces', serif;
  font-size: 38px;
  font-weight: 600;
  font-style: italic;
  line-height: 1.12;
  margin-bottom: 18px;
  letter-spacing: -0.01em;
  color: #ffffff;
}

.brand-content .subtitle {
  color: rgba(255, 255, 255, 0.78);
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
          border-color: rgba(20,184,166,0.18);
        }

        .feature-icon {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(20,184,166,0.10);
          color: #1E3A5F;
        }

        /* ===== RIGHT PANEL ===== */
        .auth-form {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 30px;
                  background: #F7F9FB;
        }

        .auth-card {
          width: 100%;
          max-width: 440px;
          background: #ffffff;
          padding: 44px 40px 36px;
          border-radius: 20px;
          box-shadow: 
            0 1px 3px rgba(18, 40, 48, 0.02),
            0 4px 16px rgba(18, 40, 48, 0.04),
            0 8px 44px rgba(18, 40, 48, 0.04);
          border: 1px solid rgba(226,232,240, 0.6);
          animation: fadeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.08s backwards;
        }

        /* Header */
        .auth-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .auth-header .welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
                  background: rgba(20,184,166,0.12);
                  color: #1E3A5F;
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
                  background: #14B8A6;
          animation: pulseDot 2s ease-in-out infinite;
        }

        .auth-header h1 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
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
          margin-bottom: 18px;
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

        /* ===== FORM FIELDS ===== */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          position: relative;
          margin-bottom: 18px;
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
          height: 52px;
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

        /* ===== FLOATING LABEL ===== */
        .form-group.floating input {
          padding: 22px 14px 6px 46px;
          height: 56px;
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
          top: 8px;
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
                  padding: 14px 20px;
          margin-top: 6px;
          border: none;
          border-radius: 12px;
                  background: var(--primary);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.01em;
                  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.18);
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
                  transition: all 0.2s var(--ease);
          font-family: 'Inter', sans-serif;
          cursor: pointer;
        }

        .auth-button:hover:not(:disabled) {
          transform: translateY(-2px);
                  box-shadow: 0 8px 26px rgba(var(--primary-rgb), 0.22);
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
          margin-top: 24px;
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
          .brand-content h1 { font-size: 32px; }
        }

        @media (max-width: 900px) {
          .auth-split { grid-template-columns: 1fr; }
          .auth-brand { padding: 46px 30px; min-height: 240px; }
          .brand-content { max-width: 100%; text-align: center; }
          .brand-logo-wrapper { justify-content: center; }
          .brand-content .subtitle { margin-left: auto; margin-right: auto; }
          .brand-features { max-width: 400px; margin: 0 auto; }
          .brand-features li { justify-content: center; }
          .auth-form { padding: 30px 20px; }
          .auth-card { padding: 32px 24px 28px; }
        }

        @media (max-width: 480px) {
          .auth-brand { padding: 28px 20px; min-height: 180px; }
          .brand-content h1 { font-size: 24px; }
          .brand-logo-wrapper span { font-size: 17px; }
          .brand-features li { padding: 10px 14px; font-size: 13px; }
          .auth-card { padding: 24px 16px 20px; }
          .auth-header h1 { font-size: 22px; }
          .form-row { grid-template-columns: 1fr; gap: 0; }
          .form-group.floating input { height: 52px; padding: 20px 12px 6px 40px; }
          .form-group.floating label { left: 40px; font-size: 13px; }
          .auth-button { height: 50px; font-size: 14px; }
          .auth-header .welcome-badge { font-size: 11px; padding: 4px 14px; }
        }

        @media (max-width: 380px) {
          .auth-card { padding: 18px 12px 18px; }
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

            <h1>Join<br />Contact Manager</h1>
            <p className="subtitle">
              Create your account and start organizing your contacts in
              minutes — clean, fast and secure.
            </p>

            <ul className="brand-features">
              <li>
                <span className="feature-icon"><IconCheck /></span>
                Free to get started
              </li>
              <li>
                <span className="feature-icon"><IconCheck /></span>
                Unlimited contacts, organized instantly
              </li>
              <li>
                <span className="feature-icon"><IconCheck /></span>
                Your information is encrypted &amp; private
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="auth-form">
          <div className="auth-card">
            <div className="auth-header">
              <div className="welcome-badge">Get started</div>
              <h1>Create Account</h1>
              <p>Join Contact Management System</p>
            </div>
{error && (
  <div className="error-message" role="alert">
    <IconAlertCircle />
    {error}
  </div>
)}

            <form onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group floating">
      <input
        id="firstName"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder=" "
        autoComplete="given-name"
        required
      />
      <label htmlFor="firstName">First Name</label>
      <span className="input-icon"><IconUser /></span>
    </div>

    <div className="form-group floating">
      <input
        id="lastName"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder=" "
        autoComplete="family-name"
        required
      />
      <label htmlFor="lastName">Last Name</label>
      <span className="input-icon"><IconUser /></span>
    </div>
  </div>

  <div className="form-group floating">
    <input
      id="email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder=" "
      autoComplete="email"
      required
    />
    <label htmlFor="email">Email</label>
    <span className="input-icon"><IconMail /></span>
  </div>

  <div className="form-group floating">
    <input
      id="phone"
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder=" "
      autoComplete="tel"
    />
    <label htmlFor="phone">Phone Number</label>
    <span className="input-icon"><IconPhone /></span>
  </div>

  <div className="form-group floating">
    <input
      id="password"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder=" "
      autoComplete="new-password"
      required
    />
    <label htmlFor="password">Password</label>
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
        Creating Account...
      </>
    ) : (
      <>
        Register
        <IconArrowRight />
      </>
    )}
  </button>
</form>

            <p className="auth-footer">
              Already have an account?{" "}
              <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;