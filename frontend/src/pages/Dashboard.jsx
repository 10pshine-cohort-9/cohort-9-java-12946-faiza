import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

// Professional Icons
const IconGrid = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const IconPlus = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconUser = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
  </svg>
);

const IconLogout = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const IconSearch = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
);

const IconMail = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
);

const IconPhone = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconUpload = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 16V4" />
    <polyline points="7 9 12 4 17 9" />
    <path d="M4 20h16" />
  </svg>
);

function Dashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [importing, setImporting] = useState(false);
  const [importMessage, setImportMessage] = useState("");
  const [importError, setImportError] = useState("");

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
        console.error(
          "Failed to remove invalid stored user.",
          storageErr
        );
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
          size: pageSize,
        },
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

      setError(
        err.response?.data?.error ||
          "Unable to load contacts."
      );
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

  const handleImportButtonClick = () => {
    setImportMessage("");
    setImportError("");

    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImport = async (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setImportMessage("");
    setImportError("");

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setImportError("Please select a CSV file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setImportError("CSV file size must not exceed 5 MB.");
      event.target.value = "";
      return;
    }

    try {
      setImporting(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/contacts/import", formData, {
    timeout: 60000,
});
      const importedCount =
        response.data?.importedCount || 0;

      const skippedCount =
        response.data?.skippedCount || 0;

      const errors =
        response.data?.errors || [];

      if (importedCount > 0) {
        setImportMessage(
          `${importedCount} contact${
            importedCount !== 1 ? "s" : ""
          } imported successfully.${
            skippedCount > 0
              ? ` ${skippedCount} row${
                  skippedCount !== 1 ? "s" : ""
                } skipped.`
              : ""
          }`
        );

        if (page === 0) {
    await fetchContacts();
} else {
    setPage(0);
}
      } else if (skippedCount > 0) {
        setImportError(
          `No contacts were imported. ${skippedCount} row${
            skippedCount !== 1 ? "s" : ""
          } were skipped.`
        );
      } else {
        setImportMessage(
          "CSV import completed. No new contacts were found."
        );
      }

      if (errors.length > 0) {
        console.warn("CSV import row errors:", errors);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        clearSession();
        navigate("/login");
        return;
      }

      const backendMessage =
        err.response?.data?.error ||
        err.response?.data?.message;

      setImportError(
        backendMessage ||
          "Failed to import contacts. Please check your CSV file."
      );

      console.error("CSV import failed:", err);
    } finally {
      setImporting(false);

      if (event.target) {
        event.target.value = "";
      }
    }
  };

  const getInitials = (contact) => {
    const first = contact.firstName?.[0] || "";
    const last = contact.lastName?.[0] || "";

    return (
      (first + last).toUpperCase() || "?"
    );
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }

          100% {
            background-position: 200% 0;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .app-shell {
          display: flex;
          min-height: 100vh;
          background: #f5f3ff;
        }

        .sidebar {
          width: 260px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          background: linear-gradient(
            180deg,
            #faf5ff 0%,
            #f3e8ff 100%
          );
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
          background: linear-gradient(
            135deg,
            #a78bfa 0%,
            #8b5cf6 100%
          );
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
          border: none;
        }

        .sidebar-link:hover {
          background: rgba(139, 92, 246, 0.08);
          color: #4c1d95;
        }

        .sidebar-link.active {
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.12) 0%,
            rgba(167, 139, 250, 0.08) 100%
          );
          color: #4c1d95;
          font-weight: 600;
        }

        .sidebar-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            #e9d5ff,
            transparent
          );
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

        .main-panel {
          flex: 1;
          min-width: 0;
        }

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

        .greeting-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            #fbbf24 0%,
            #f59e0b 100%
          );
          font-size: 22px;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.25);
        }

        .dashboard-header h1 {
          margin: 0;
          font-size: 20px;
          color: #1e1b4b;
          font-weight: 700;
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
          flex-wrap: wrap;
        }

        .profile-button,
        .import-button,
        .export-button,
        .logout-button {
          padding: 10px 18px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .profile-button {
          background: #f3e8ff;
          border: 1.5px solid #d8b4fe;
          color: #7c3aed;
        }

        .import-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ecfdf5;
          border: 1.5px solid #a7f3d0;
          color: #047857;
        }

        .export-button {
          background: #eff6ff;
          border: 1.5px solid #bfdbfe;
          color: #2563eb;
        }

        .logout-button {
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          color: #ef4444;
        }

        .profile-button:hover {
          background: #e9d5ff;
        }

        .import-button:hover {
          background: #d1fae5;
        }

        .export-button:hover {
          background: #dbeafe;
        }

        .logout-button:hover {
          background: #fee2e2;
        }

        .dashboard-content {
          width: 92%;
          max-width: 1280px;
          margin: auto;
          padding: 28px 0 60px;
        }

        .dashboard-stats {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(200px, 1fr)
          );
          gap: 16px;
          margin-bottom: 28px;
        }

        .stat-card {
          padding: 22px 24px;
          background: #ffffff;
          border: 1px solid #e9d5ff;
          border-radius: 16px;
        }

        .stat-icon {
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
          margin-top: 4px;
        }

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
        }

        .contacts-header p {
          margin-top: 4px;
          color: #8b8a9e;
          font-size: 13.5px;
        }

        .contact-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .add-contact-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            #a78bfa 0%,
            #8b5cf6 100%
          );
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
        }

        .add-contact-button:hover {
          box-shadow: 0 6px 28px rgba(139, 92, 246, 0.35);
          transform: translateY(-2px);
        }

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

        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(280px, 1fr)
          );
          gap: 20px;
        }

        .contact-card {
          background: #ffffff;
          border: 1px solid #e9d5ff;
          border-radius: 16px;
          padding: 24px 24px 20px;
          transition: all 0.3s ease;
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
          background: linear-gradient(
            135deg,
            #f3e8ff 0%,
            #e9d5ff 100%
          );
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
          background: linear-gradient(
            135deg,
            #a78bfa 0%,
            #8b5cf6 100%
          );
          border-color: #8b5cf6;
          color: #fff;
        }

        .skeleton-card {
          cursor: default;
          padding: 24px;
        }

        .skeleton {
          background: linear-gradient(
            90deg,
            #f5f0ff 25%,
            #faf5ff 37%,
            #f5f0ff 63%
          );
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

        .empty-state {
          background: #ffffff;
          border: 2px dashed #e9d5ff;
          padding: 56px 32px;
          border-radius: 16px;
          text-align: center;
        }

        .empty-icon {
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
          background: linear-gradient(
            135deg,
            #a78bfa 0%,
            #8b5cf6 100%
          );
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }

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
          cursor: pointer;
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

        .error-message,
        .import-error,
        .import-success {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .error-message,
        .import-error {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        .import-success {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .import-details {
          margin-top: 8px;
          font-size: 12px;
          opacity: 0.9;
        }

        .import-loading {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .hidden-file-input {
          display: none;
        }

        @media (max-width: 900px) {
          .sidebar {
            display: none;
          }

          .dashboard-header {
            padding: 16px 4%;
            flex-wrap: wrap;
          }

          .dashboard-content {
            width: 95%;
            padding: 20px 0 40px;
          }

          .dashboard-stats {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .dashboard-actions {
            width: 100%;
          }

          .dashboard-stats {
            grid-template-columns: 1fr;
          }

          .contacts-grid {
            grid-template-columns: 1fr;
          }

          .contact-actions {
            width: 100%;
          }

          .add-contact-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="app-shell">

        {/* Hidden CSV file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,text/csv"
          className="hidden-file-input"
          onChange={handleImport}
        />

        {/* Sidebar */}
        <aside className="sidebar">

          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              CM
            </div>

            <div className="sidebar-logo-text">
              Contact Manager
              <small>Manage your contacts</small>
            </div>
          </div>

          <nav className="sidebar-nav">

            <div className="sidebar-nav-label">
              Menu
            </div>

            <button
              className="sidebar-link active"
              onClick={() => navigate("/dashboard")}
            >
              <IconGrid />
              Dashboard
            </button>

            <button
              className="sidebar-link"
              onClick={() => navigate("/contacts/new")}
            >
              <IconPlus />
              Add Contact
            </button>

            <button
              className="sidebar-link"
              onClick={() => navigate("/profile")}
            >
              <IconUser />
              My Profile
            </button>

            <button
              className="sidebar-link"
              onClick={handleImportButtonClick}
              disabled={importing}
            >
              <IconUpload />
              {importing
                ? "Importing..."
                : "Import Contacts"}
            </button>

            <button
              className="sidebar-link"
              onClick={handleExport}
            >
              📥
              Export Contacts
            </button>

          </nav>

          <div className="sidebar-divider" />

          <button
            className="sidebar-logout"
            onClick={handleLogout}
          >
            <IconLogout />
            Logout
          </button>

        </aside>

        {/* Main Panel */}
        <div className="main-panel">

          {/* Header */}
          <header className="dashboard-header">

            <div className="dashboard-header-left">

              <div className="greeting-icon">
                👋
              </div>

              <div>
                <h1>
                  Good to see you,{" "}
                  {user?.firstName || "User"}
                </h1>

                <p>
                  Manage your contacts from one place
                </p>
              </div>

            </div>

            <div className="dashboard-actions">

              <button
                className="profile-button"
                onClick={() => navigate("/profile")}
              >
                My Profile
              </button>

              <button
                className="import-button"
                onClick={handleImportButtonClick}
                disabled={importing}
              >
                <IconUpload />

                {importing
                  ? "Importing..."
                  : "Import CSV"}
              </button>

              <button
                className="export-button"
                onClick={handleExport}
              >
                📥 Export CSV
              </button>

              <button
                className="logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          </header>

          {/* Content */}
          <main className="dashboard-content">

            {/* Stats */}
            <div className="dashboard-stats">

              <div className="stat-card">

                <div className="stat-icon">
                  📇
                </div>

                <span>
                  Total Contacts
                </span>

                <strong>
                  {totalElements}
                </strong>

              </div>

            </div>

            {/* Import messages */}
            {importMessage && (
              <div className="import-success">
                ✅ {importMessage}
              </div>
            )}

            {importError && (
              <div className="import-error">
                ❌ {importError}
              </div>
            )}

            {/* Contacts Header */}
            <div className="contacts-header">

              <div>
                <h2>
                  📋 Contacts
                </h2>

                <p>
                  Manage your personal and professional connections
                </p>
              </div>

              <div className="contact-actions">

                <button
                  className="add-contact-button"
                  onClick={() =>
                    navigate("/contacts/new")
                  }
                >
                  <IconPlus />
                  Add Contact
                </button>

              </div>

            </div>

            {/* Search */}
            <div className="contacts-toolbar">

              <div className="search-wrapper">

                <span className="search-icon">
                  <IconSearch />
                </span>

                <input
                  className="search-input"
                  type="text"
                  placeholder="Search contacts..."
                  value={search}
                  onChange={handleSearch}
                />

              </div>

              {!loading && !error && (
                <span className="contact-count">
                  {totalElements} contacts
                </span>
              )}

            </div>

            {/* Loading */}
            {loading && (
              <div className="contacts-grid">

                {Array.from({
                  length: pageSize,
                }).map((_, i) => (
                  <div
                    className="contact-card skeleton-card"
                    key={i}
                  >
                    <div
                      className="skeleton skeleton-avatar"
                    />

                    <div
                      className="skeleton skeleton-line"
                      style={{
                        width: "60%",
                        height: "16px",
                      }}
                    />

                    <div
                      className="skeleton skeleton-line"
                      style={{
                        width: "40%",
                        height: "12px",
                      }}
                    />

                    <div
                      className="skeleton skeleton-line"
                      style={{
                        width: "80%",
                        height: "12px",
                      }}
                    />

                    <div
                      className="skeleton skeleton-line"
                      style={{
                        width: "70%",
                        height: "12px",
                      }}
                    />

                    <div
                      className="skeleton skeleton-line"
                      style={{
                        width: "100%",
                        height: "40px",
                        marginTop: "12px",
                      }}
                    />
                  </div>
                ))}

              </div>
            )}

            {/* Error */}
            {error && (
              <div className="error-message">
                ❌ {error}
              </div>
            )}

            {/* Empty */}
            {!loading &&
              !error &&
              contacts.length === 0 && (
                <div className="empty-state">

                  <div className="empty-icon">
                    📭
                  </div>

                  <h3>
                    {search
                      ? "No Contacts Found"
                      : "No Contacts Yet"}
                  </h3>

                  <p>
                    {search
                      ? "No matching contacts found."
                      : "Start building your contact list."}
                  </p>

                  {!search && (
                    <button
                      onClick={() =>
                        navigate("/contacts/new")
                      }
                    >
                      ✨ Add Your First Contact
                    </button>
                  )}

                </div>
              )}

            {/* Contacts Grid */}
            {!loading &&
              !error &&
              contacts.length > 0 && (
                <div className="contacts-grid">

                  {contacts.map((contact) => (
                    <div
                      className="contact-card"
                      key={contact.id}
                    >

                      <div className="contact-card-top">

                        <div className="contact-avatar">
                          {getInitials(contact)}
                        </div>

                        <div>

                          <h3>
                            {contact.firstName}{" "}
                            {contact.lastName}
                          </h3>

                          <span className="contact-title-badge">
                            {contact.title ||
                              "No title"}
                          </span>

                        </div>

                      </div>

                      <div className="contact-chip">

                        <span className="chip-icon">
                          <IconMail />
                        </span>

                        {contact.workEmail ||
                          "N/A"}

                      </div>

                      <div className="contact-chip">

                        <span className="chip-icon">
                          <IconPhone />
                        </span>

                        {contact.workPhone ||
                          "N/A"}

                      </div>

                      <button
                        onClick={() =>
                          navigate(
                            `/contacts/${contact.id}`
                          )
                        }
                      >
                        View Details →
                      </button>

                    </div>
                  ))}

                </div>
              )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">

                <button
                  disabled={page === 0}
                  onClick={() =>
                    setPage(page - 1)
                  }
                >
                  ← Previous
                </button>

                <span>
                  Page {page + 1} of{" "}
                  {totalPages}
                </span>

                <button
                  disabled={
                    page >= totalPages - 1
                  }
                  onClick={() =>
                    setPage(page + 1)
                  }
                >
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