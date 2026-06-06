"use client";

import { useState, useEffect, useMemo } from "react";

interface Lead {
  _id: string;
  name: string;
  phone: string;
  email: string;
  productInterest: string;
  requirements: string;
  source: "popup" | "contact_page" | "home_page";
  createdAt: string;
}

const SOURCE_LABELS: Record<string, string> = {
  popup: "Popup",
  contact_page: "Contact Page",
  home_page: "Home Page",
};

const SOURCE_COLORS: Record<string, string> = {
  popup: "#6c5ce7",
  contact_page: "#00b894",
  home_page: "#0984e3",
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) setLeads(data.data);
    } catch {
      /* silently fail */
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    let results = leads;
    if (sourceFilter !== "all") {
      results = results.filter((l) => l.source === sourceFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.phone.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q)
      );
    }
    return results;
  }, [leads, search, sourceFilter]);

  const todayCount = useMemo(() => {
    const today = new Date().toDateString();
    return leads.filter((l) => new Date(l.createdAt).toDateString() === today)
      .length;
  }, [leads]);

  const sourceCounts = useMemo(() => {
    const counts: Record<string, number> = {
      popup: 0,
      contact_page: 0,
      home_page: 0,
    };
    leads.forEach((l) => {
      if (counts[l.source] !== undefined) counts[l.source]++;
    });
    return counts;
  }, [leads]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this lead permanently?")) return;
    setDeletingId(id);
    try {
      await fetch(`/api/leads?id=${id}`, { method: "DELETE" });
      setLeads((prev) => prev.filter((l) => l._id !== id));
    } catch {
      /* */
    }
    setDeletingId(null);
  };

  const handleExportCSV = () => {
    if (filteredLeads.length === 0) return;
    const headers = [
      "Name",
      "Phone",
      "Email",
      "Product Interest",
      "Requirements",
      "Source",
      "Date",
    ];
    const rows = filteredLeads.map((l) => [
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.productInterest}"`,
      `"${l.requirements.replace(/"/g, '""')}"`,
      `"${SOURCE_LABELS[l.source] || l.source}"`,
      `"${new Date(l.createdAt).toLocaleString()}"`,
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `apex-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="admin-dashboard">
        {/* Header */}
        <header className="admin-header">
          <div className="admin-header-inner">
            <div>
              <h1>Lead Dashboard</h1>
              <p className="admin-subtitle">
                Apex Engineering — Lead Management
              </p>
            </div>
            <button className="btn-export" onClick={handleExportCSV}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export CSV
            </button>
          </div>
        </header>

        {/* KPI Cards */}
        <section className="kpi-grid">
          <div className="kpi-card kpi-total">
            <div className="kpi-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="kpi-value">{leads.length}</span>
            <span className="kpi-label">Total Leads</span>
          </div>

          <div className="kpi-card kpi-today">
            <div className="kpi-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span className="kpi-value">{todayCount}</span>
            <span className="kpi-label">Today&apos;s Leads</span>
          </div>

          {Object.entries(sourceCounts).map(([src, count]) => (
            <div
              className="kpi-card"
              key={src}
              style={
                {
                  "--kpi-accent": SOURCE_COLORS[src],
                } as React.CSSProperties
              }
            >
              <div className="kpi-icon" style={{ color: SOURCE_COLORS[src] }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="kpi-value">{count}</span>
              <span className="kpi-label">{SOURCE_LABELS[src]}</span>
            </div>
          ))}
        </section>

        {/* Toolbar */}
        <section className="admin-toolbar">
          <div className="admin-search-box">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, phone or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="admin-filter-select"
          >
            <option value="all">All Sources</option>
            <option value="popup">Popup</option>
            <option value="contact_page">Contact Page</option>
            <option value="home_page">Home Page</option>
          </select>
          <button className="btn-refresh" onClick={fetchLeads} title="Refresh">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>
        </section>

        {/* Table */}
        <section className="admin-table-wrapper">
          {loading ? (
            <div className="admin-loader">
              <div className="spinner" />
              <p>Loading leads…</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="admin-empty">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="18" y1="8" x2="23" y2="13" />
                <line x1="23" y1="8" x2="18" y2="13" />
              </svg>
              <h3>No leads found</h3>
              <p>
                {search || sourceFilter !== "all"
                  ? "Try adjusting your search or filter."
                  : "Leads will appear here once submitted through the website."}
              </p>
            </div>
          ) : (
            <div className="table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Product Interest</th>
                    <th>Requirements</th>
                    <th>Source</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, i) => (
                    <tr key={lead._id} className="lead-row">
                      <td className="row-num">{i + 1}</td>
                      <td className="cell-name">{lead.name}</td>
                      <td>
                        <a
                          href={`tel:${lead.phone}`}
                          className="cell-phone"
                        >
                          {lead.phone}
                        </a>
                      </td>
                      <td>
                        {lead.email ? (
                          <a
                            href={`mailto:${lead.email}`}
                            className="cell-email"
                          >
                            {lead.email}
                          </a>
                        ) : (
                          <span className="cell-muted">—</span>
                        )}
                      </td>
                      <td>{lead.productInterest || <span className="cell-muted">—</span>}</td>
                      <td className="cell-requirements">
                        {lead.requirements || <span className="cell-muted">—</span>}
                      </td>
                      <td>
                        <span
                          className="source-badge"
                          style={{
                            background: `${SOURCE_COLORS[lead.source]}18`,
                            color: SOURCE_COLORS[lead.source],
                            borderColor: `${SOURCE_COLORS[lead.source]}40`,
                          }}
                        >
                          {SOURCE_LABELS[lead.source] || lead.source}
                        </span>
                      </td>
                      <td className="cell-date">
                        {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                        <br />
                        <small>
                          {new Date(lead.createdAt).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </small>
                      </td>
                      <td>
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(lead._id)}
                          disabled={deletingId === lead._id}
                          title="Delete lead"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <footer className="admin-footer">
          <p>
            Showing {filteredLeads.length} of {leads.length} leads
          </p>
        </footer>
      </div>

      {/* ─── Scoped Styles ──────────────────────────────────────── */}
      <style jsx>{`
        .admin-dashboard {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0e27 0%, #141b3d 50%, #0d1025 100%);
          color: #e2e8f0;
          padding: 0 0 3rem 0;
          font-family: "Inter", "Segoe UI", sans-serif;
        }

        /* Header */
        .admin-header {
          background: rgba(20, 27, 61, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 1.75rem 2rem;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .admin-header-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .admin-header h1 {
          font-size: 1.6rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }
        .admin-subtitle {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0.25rem 0 0;
          letter-spacing: 0.5px;
        }
        .btn-export {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #10b981, #059669);
          color: #fff;
          border: none;
          padding: 0.65rem 1.25rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .btn-export:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35);
        }

        /* KPI Cards */
        .kpi-grid {
          max-width: 1400px;
          margin: 2rem auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
        }
        .kpi-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          transition: all 0.3s;
        }
        .kpi-card:hover {
          background: rgba(255, 255, 255, 0.07);
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .kpi-total {
          --kpi-accent: #60a5fa;
        }
        .kpi-today {
          --kpi-accent: #f59e0b;
        }
        .kpi-icon {
          color: var(--kpi-accent, #60a5fa);
          background: rgba(96, 165, 250, 0.1);
          border-radius: 10px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kpi-value {
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .kpi-label {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Toolbar */
        .admin-toolbar {
          max-width: 1400px;
          margin: 0 auto 1.5rem;
          padding: 0 2rem;
          display: flex;
          gap: 0.75rem;
          align-items: stretch;
        }
        .admin-search-box {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }
        .admin-search-box svg {
          position: absolute;
          left: 1rem;
          color: #64748b;
          pointer-events: none;
        }
        .admin-search-box input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #e2e8f0;
          font-size: 0.85rem;
          font-family: inherit;
          transition: all 0.2s;
        }
        .admin-search-box input:focus {
          outline: none;
          border-color: #60a5fa;
          box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.15);
        }
        .admin-search-box input::placeholder {
          color: #475569;
        }
        .admin-filter-select {
          padding: 0.85rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #e2e8f0;
          font-size: 0.85rem;
          font-family: inherit;
          font-weight: 600;
          cursor: pointer;
          min-width: 160px;
          transition: all 0.2s;
        }
        .admin-filter-select:focus {
          outline: none;
          border-color: #60a5fa;
        }
        .admin-filter-select option {
          background: #1e293b;
          color: #e2e8f0;
        }
        .btn-refresh {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #94a3b8;
          padding: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .btn-refresh:hover {
          background: rgba(96, 165, 250, 0.15);
          color: #60a5fa;
          border-color: rgba(96, 165, 250, 0.3);
        }

        /* Table */
        .admin-table-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .table-scroll {
          overflow-x: auto;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }
        .admin-table thead {
          background: rgba(255, 255, 255, 0.04);
        }
        .admin-table th {
          text-align: left;
          padding: 1rem 1rem;
          font-weight: 700;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.75px;
          color: #64748b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          white-space: nowrap;
        }
        .admin-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          vertical-align: top;
        }
        .lead-row {
          transition: background 0.15s;
        }
        .lead-row:hover {
          background: rgba(96, 165, 250, 0.04);
        }
        .row-num {
          color: #475569;
          font-weight: 700;
          font-size: 0.75rem;
        }
        .cell-name {
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
        }
        .cell-phone {
          color: #60a5fa;
          text-decoration: none;
          font-weight: 600;
          white-space: nowrap;
        }
        .cell-phone:hover {
          text-decoration: underline;
        }
        .cell-email {
          color: #a78bfa;
          text-decoration: none;
        }
        .cell-email:hover {
          text-decoration: underline;
        }
        .cell-muted {
          color: #334155;
        }
        .cell-requirements {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #94a3b8;
        }
        .cell-date {
          white-space: nowrap;
          color: #94a3b8;
          font-size: 0.8rem;
        }
        .cell-date small {
          color: #475569;
        }
        .source-badge {
          display: inline-block;
          padding: 0.3rem 0.7rem;
          border-radius: 50px;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 1px solid;
          white-space: nowrap;
        }
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          color: #ef4444;
          padding: 0.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .btn-delete:hover {
          background: rgba(239, 68, 68, 0.25);
          transform: scale(1.1);
        }
        .btn-delete:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* Empty / Loader */
        .admin-loader,
        .admin-empty {
          text-align: center;
          padding: 4rem 2rem;
          color: #64748b;
        }
        .spinner {
          width: 36px;
          height: 36px;
          border: 3px solid rgba(96, 165, 250, 0.15);
          border-top-color: #60a5fa;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 1rem;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .admin-empty svg {
          color: #334155;
          margin-bottom: 1rem;
        }
        .admin-empty h3 {
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        /* Footer */
        .admin-footer {
          max-width: 1400px;
          margin: 1.5rem auto 0;
          padding: 0 2rem;
          text-align: right;
        }
        .admin-footer p {
          font-size: 0.75rem;
          color: #475569;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .admin-header-inner {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          .kpi-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1rem;
          }
          .admin-toolbar {
            flex-direction: column;
            padding: 0 1rem;
          }
          .admin-filter-select {
            min-width: unset;
          }
          .admin-table-wrapper {
            padding: 0 1rem;
          }
          .admin-footer {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}
