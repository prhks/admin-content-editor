import React from "react";

function PageList({ pages, onSelect, activePage, onCreatePage, onDeletePage }) {
  return (
    <div className="sidebar">
      <h3>Pages</h3>
      <button onClick={onCreatePage} className="new-page-btn">
        + New Page
      </button>

      {pages.map((page) => (
        <div
          key={page.id}
          className={activePage?.id === page.id ? "active-page" : "page-item"}
          onClick={() => onSelect(page)}
        >
          <span className="page-item-title">{page.title}</span>
          <span
            className={`status-badge ${
              page.status === "published" ? "status-published" : "status-draft"
            }`}
          >
            {page.status === "published" ? "Published" : "Draft"}
          </span>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDeletePage(page.id);
            }}
            title="Delete page"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}

export default PageList;
