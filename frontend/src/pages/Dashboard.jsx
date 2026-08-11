import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

// Professional Icons
const IconGrid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
  </svg>
);

const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconLogout = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
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

function Dashboard() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const pageSize = 6;

 const clearSession = () => {
  try {
    localStorage.removeItem("token");
  } catch (err) {
    console.error("Failed to clear stored token.", err);
  }

  try {
    localStorage.removeItem("user");
  } catch (err) {
    console.error("Failed to clear stored user.", err);
  }
};
 const getUserFromStorage = () => {
  try {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return null;
    }

    return JSON.parse(storedUser);
  } catch (err) {
    try {
      localStorage.removeItem("user");
    } catch (storageErr) {
      console.error("Failed to remove invalid stored user.", storageErr);
    }

    console.error("Failed to read stored user.", err);
    return null;
  }
};

  const user = getUserFromStorage();

  useEffect(() => {
    fetchContacts();
  }, [page, search]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/contacts", {
        params: {
          search,
          page,
          size: pageSize
        }
      });

      setContacts(response.data.content || []);
      setTotalPages(response.data.totalPages || 0);
      setTotalElements(response.data.totalElements || 0);
    } catch (err) {
      if (err.response?.status === 401) {
        clearSession();
        navigate("/login");
        return;
      }
      setError(err.response?.data?.error || "Unable to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(0);
  };

  const handleLogout = () => {
    clearSession();
    navigate("/login");
  };

  const handleExport = async () => {
  try {
    const response = await api.get("/contacts/export", {
      responseType: "blob",
    });

   const url = window.URL.createObjectURL(response.data);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "contacts.csv");

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
    await fetchContacts();
} catch (err) {
  if (err.response?.status === 401) {
    clearSession();
    navigate("/login");
    return;
  }

  alert("Failed to export contacts.");
  console.error(err);
}
};

  const getInitials = (contact) => {
    const first = contact.firstName?.[0] || "";
    const last = contact.lastName?.[0] || "";
    return (first + last).toUpperCase() || "?";
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
          background: #f5f3ff;
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== APP SHELL ===== */
        .app-shell {
          display: flex;
          min-height: 100vh;
          background: #f5f3ff;
        }

        /* ===== SIDEBAR - PASTEL ===== */
        .sidebar {
          width: 260px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, #faf5ff 0%, #f3e8ff 100%);
          border-right: 1px solid #e9d5ff;
          padding: 28px 18px;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 4px 10px;
          margin-bottom: 36px;
        }

        .sidebar-logo-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
          color: #fff;
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 16px;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
        }

        .sidebar-logo-text {
          font-weight: 700;
          font-size: 18px;
          color: #4c1d95;
          letter-spacing: -0.01em;
        }

        .sidebar-logo-text small {
          display: block;
          font-size: 11px;
          font-weight: 400;
          color: #8b8a9e;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .sidebar-nav-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #a78bfa;
          padding: 0 12px 8px;
          margin-top: 4px;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 12px;
          background: transparent;
          color: #6d5a8a;
          font-weight: 500;
          font-size: 14px;
          text-align: left;
          transition: all 0.3s ease;
          text-decoration: none;
          width: 100%;
          cursor: pointer;
        }

        .sidebar-link svg {
          opacity: 0.6;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .sidebar-link:hover {
          background: rgba(139, 92, 246, 0.08);
          color: #4c1d95;
        }

        .sidebar-link:hover svg {
          opacity: 0.9;
        }

        .sidebar-link.active {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(167, 139, 250, 0.08) 100%);
          color: #4c1d95;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.08);
        }

        .sidebar-link.active svg {
          opacity: 1;
          color: #7c3aed;
        }

        .sidebar-divider {
          height: 1px;
          background: linear-gradient(90deg, #e9d5ff, transparent);
          margin: 12px 12px 16px;
        }

        .sidebar-logout {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 12px;
          background: transparent;
          color: #f472b6;
          font-weight: 500;
          font-size: 14px;
          margin-top: auto;
          transition: all 0.3s ease;
          cursor: pointer;
          width: 100%;
          border: 1px solid rgba(244, 114, 182, 0.15);
        }

        .sidebar-logout:hover {
          background: rgba(244, 114, 182, 0.06);
          border-color: rgba(244, 114, 182, 0.3);
          color: #db2777;
        }

        .sidebar-logout svg {
          opacity: 0.7;
        }

        /* ===== MAIN PANEL ===== */
        .main-panel {
          flex: 1;
          min-width: 0;
        }

        /* ===== HEADER - PASTEL ===== */
        .dashboard-header {
          min-height: 80px;
          padding: 20px 5%;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(233, 213, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 20;
          gap: 16px;
        }

        .dashboard-header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .dashboard-header-left .greeting-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          font-size: 22px;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.25);
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

        .profile-button {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: #f3e8ff;
          border: 1.5px solid #d8b4fe;
          color: #7c3aed;
        }

        .profile-button:hover {
          background: #e9d5ff;
          border-color: #c084fc;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.15);
        }

        /* ===== CONTENT ===== */
        .dashboard-content {
          width: 92%;
          max-width: 1280px;
          margin: auto;
          padding: 28px 0 60px;
        }

        /* ===== STATS ===== */
        .dashboard-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 28px;
        }

        .stat-card {
          padding: 22px 24px;
          background: #ffffff;
          border: 1px solid #e9d5ff;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          border-color: #c084fc;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.06);
          transform: translateY(-2px);
        }

        .stat-card .stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3e8ff;
          color: #7c3aed;
          margin-bottom: 12px;
          font-size: 20px;
        }

        .stat-card span {
          font-size: 12px;
          font-weight: 600;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-card strong {
          display: block;
          font-size: 32px;
          font-weight: 800;
          color: #1e1b4b;
          letter-spacing: -0.02em;
          margin-top: 4px;
        }

        /* ===== HEADER ROW ===== */
        .contacts-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contacts-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: #1e1b4b;
          letter-spacing: -0.01em;
        }

        .contacts-header p {
          margin-top: 4px;
          color: #8b8a9e;
          font-size: 13.5px;
        }

        .add-contact-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .add-contact-button:hover {
          box-shadow: 0 6px 28px rgba(139, 92, 246, 0.35);
          transform: translateY(-2px);
        }

        .add-contact-button:active {
          transform: scale(0.97);
        }

        /* ===== SEARCH ===== */
        .contacts-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-wrapper {
          position: relative;
          flex: 1;
          max-width: 440px;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #b8b0cc;
          display: flex;
          pointer-events: none;
        }

        .search-input {
          padding: 0 16px 0 48px;
          height: 48px;
          border-radius: 14px;
          border: 1.5px solid #e9d5ff;
          background: #ffffff;
          font-size: 14px;
          width: 100%;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
          color: #1e1b4b;
          outline: none;
        }

        .search-input::placeholder {
          color: #b8b0cc;
        }

        .search-input:focus {
          border-color: #a78bfa;
          box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.12);
        }

        .contact-count {
          font-weight: 500;
          color: #8b8a9e;
          font-size: 13px;
          white-space: nowrap;
        }

        /* ===== CONTACT GRID ===== */
        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .contact-card {
          background: #ffffff;
          border: 1px solid #e9d5ff;
          border-radius: 16px;
          padding: 24px 24px 20px;
          transition: all 0.3s ease;
          cursor: default;
          animation: fadeInUp 0.4s ease;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          border-color: #c084fc;
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.06);
        }

        .contact-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 16px;
        }

        .contact-avatar {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 0.01em;
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          color: #7c3aed;
        }

        .contact-card-top h3 {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 600;
          color: #1e1b4b;
        }

        .contact-title-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          color: #7c3aed;
          background: #f3e8ff;
          padding: 2px 12px;
          border-radius: 100px;
          text-transform: capitalize;
        }

        .contact-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #6d5a8a;
          margin: 8px 0;
        }

        .chip-icon {
          color: #b8b0cc;
          display: flex;
          flex-shrink: 0;
          width: 16px;
        }

        .contact-card button {
          width: 100%;
          margin-top: 16px;
          padding: 10px;
          border-radius: 12px;
          border: 1.5px solid #e9d5ff;
          background: transparent;
          color: #4c1d95;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-card button:hover {
          background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
          border-color: #8b5cf6;
          color: #fff;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
        }

        /* ===== SKELETON ===== */
        .skeleton-card {
          cursor: default;
          padding: 24px;
        }

        .skeleton-card:hover {
          transform: none;
          border-color: #e9d5ff;
          box-shadow: none;
        }

        .skeleton {
          background: linear-gradient(90deg, #f5f0ff 25%, #faf5ff 37%, #f5f0ff 63%);
          background-size: 400% 100%;
          animation: shimmer 1.4s ease infinite;
          border-radius: 10px;
        }

        .skeleton-avatar {
          width: 48px;
          height: 48px;
          border-radius: 14px;
        }

        .skeleton-line {
          height: 12px;
          border-radius: 10px;
          margin: 6px 0;
        }

        /* ===== EMPTY STATE ===== */
        .empty-state {
          background: #ffffff;
          border: 2px dashed #e9d5ff;
          padding: 56px 32px;
          border-radius: 16px;
          text-align: center;
        }

        .empty-state .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .empty-state h3 {
          margin-bottom: 8px;
          font-size: 18px;
          font-weight: 600;
          color: #1e1b4b;
        }

        .empty-state p {
          font-size: 14px;
          color: #8b8a9e;
        }

        .empty-state button {
          margin-top: 20px;
          padding: 12px 28px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
        }

        .empty-state button:hover {
          box-shadow: 0 6px 28px rgba(139, 92, 246, 0.35);
          transform: translateY(-2px);
        }

        /* ===== PAGINATION ===== */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
        }

        .pagination button {
          padding: 10px 22px;
          border-radius: 12px;
          border: 1.5px solid #e9d5ff;
          background: #ffffff;
          color: #4c1d95;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .pagination button:hover:not(:disabled) {
          border-color: #a78bfa;
          background: #f3e8ff;
        }

        .pagination button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination span {
          color: #8b8a9e;
          font-weight: 500;
          font-size: 13px;
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
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .sidebar { display: none; }
          .dashboard-header { padding: 16px 4%; flex-wrap: wrap; }
          .dashboard-header h1 { font-size: 18px; }
          .contacts-header { flex-direction: column; align-items: flex-start; }
          .contacts-toolbar { flex-direction: column; align-items: stretch; }
          .search-wrapper { max-width: none; }
          .dashboard-content { width: 95%; padding: 20px 0 40px; }
          .dashboard-stats { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 480px) {
          .dashboard-header { flex-direction: column; align-items: flex-start; }
          .dashboard-actions { width: 100%; justify-content: flex-start; flex-wrap: wrap; }
          .dashboard-stats { grid-template-columns: 1fr; }
          .contacts-grid { grid-template-columns: 1fr; }
          .contact-card { padding: 18px 16px; }
          .pagination button { padding: 8px 16px; font-size: 12px; }
          .dashboard-header-left .greeting-icon { width: 40px; height: 40px; font-size: 18px; }
        }
      `}</style>

      {/* ===== MAIN UI ===== */}
      <div className="app-shell">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">CM</div>
            <div className="sidebar-logo-text">
              Contact Manager
              <small>Manage your contacts</small>
            </div>
          </div>

          <nav className="sidebar-nav">
            <div className="sidebar-nav-label">Menu</div>
            <button className="sidebar-link active" onClick={() => navigate("/dashboard")}>
              <IconGrid />
              Dashboard
            </button>
            <button className="sidebar-link" onClick={() => navigate("/contacts/new")}>
              <IconPlus />
              Add Contact
            </button>
            <button className="sidebar-link" onClick={() => navigate("/profile")}>
              <IconUser />
              My Profile
            </button>
            <button
  className="sidebar-link"
  onClick={handleExport}
>
  📥 Export Contacts
</button>
          </nav>

          <div className="sidebar-divider"></div>

          <button className="sidebar-logout" onClick={handleLogout}>
            <IconLogout />
            Logout
          </button>
        </aside>

        {/* Main Panel */}
        <div className="main-panel">
          {/* Header */}
          <header className="dashboard-header">
            <div className="dashboard-header-left">
              <div className="greeting-icon">👋</div>
              <div>
                <h1>Good to see you, {user?.firstName || "User"}</h1>
                <p>Manage your contacts from one place</p>
              </div>
            </div>

            <div className="dashboard-actions">
              <button className="profile-button" onClick={() => navigate("/profile")}>
                My Profile
              </button>
              <button
  className="profile-button"
  onClick={handleExport}
>
  Export CSV
</button>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </header>

          {/* Content */}
          <main className="dashboard-content">
            {/* Stats */}
            <div className="dashboard-stats">
              <div className="stat-card">
                <div className="stat-icon">📇</div>
                <span>Total Contacts</span>
                <strong>{totalElements}</strong>
              </div>
            </div>

            {/* Header */}
            <div className="contacts-header">
              <div>
                <h2>📋 Contacts</h2>
                <p>Manage your personal and professional connections</p>
              </div>
              <button className="add-contact-button" onClick={() => navigate("/contacts/new")}>
                <IconPlus />
                Add Contact
              </button>
            </div>

            {/* Search */}
            <div className="contacts-toolbar">
              <div className="search-wrapper">
                <span className="search-icon"><IconSearch /></span>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search contacts..."
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              {!loading && !error && (
                <span className="contact-count">{totalElements} contacts</span>
              )}
            </div>

            {/* Loading */}
            {loading && (
              <div className="contacts-grid">
                {Array.from({ length: pageSize }).map((_, i) => (
                  <div className="contact-card skeleton-card" key={i}>
                    <div className="skeleton skeleton-avatar"></div>
                    <div className="skeleton skeleton-line" style={{ width: "60%", height: "16px" }}></div>
                    <div className="skeleton skeleton-line" style={{ width: "40%", height: "12px" }}></div>
                    <div className="skeleton skeleton-line" style={{ width: "80%", height: "12px" }}></div>
                    <div className="skeleton skeleton-line" style={{ width: "70%", height: "12px" }}></div>
                    <div className="skeleton skeleton-line" style={{ width: "100%", height: "40px", marginTop: "12px" }}></div>
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && <div className="error-message">❌ {error}</div>}

            {/* Empty */}
            {!loading && !error && contacts.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">📭</div>
                <h3>{search ? "No Contacts Found" : "No Contacts Yet"}</h3>
                <p>
                  {search
                    ? "No matching contacts found."
                    : "Start building your contact list."}
                </p>
                {!search && (
                  <button onClick={() => navigate("/contacts/new")}>
                    ✨ Add Your First Contact
                  </button>
                )}
              </div>
            )}

            {/* Contacts Grid */}
            {!loading && !error && contacts.length > 0 && (
              <div className="contacts-grid">
                {contacts.map(contact => (
                  <div className="contact-card" key={contact.id}>
                    <div className="contact-card-top">
                      <div className="contact-avatar">
                        {getInitials(contact)}
                      </div>
                      <div>
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <span className="contact-title-badge">
                          {contact.title || "No title"}
                        </span>
                      </div>
                    </div>

                    <div className="contact-chip">
                      <span className="chip-icon"><IconMail /></span>
                      {contact.workEmail || "N/A"}
                    </div>

                    <div className="contact-chip">
                      <span className="chip-icon"><IconPhone /></span>
                      {contact.workPhone || "N/A"}
                    </div>

                    <button onClick={() => navigate(`/contacts/${contact.id}`)}>
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button disabled={page === 0} onClick={() => setPage(page - 1)}>
                  ← Previous
                </button>
                <span>Page {page + 1} of {totalPages}</span>
                <button disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>
                  Next →
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;