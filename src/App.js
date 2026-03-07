import React, { useState, useEffect, useCallback } from "react";
import samplePages from "./samplePages";
import PageList from "./components/PageList";
import EditorPanel from "./components/EditorPanel";
import PreviewPanel from "./components/PreviewPanel";
import "./styles.css";

function App() {
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(null);
  const [content, setContent] = useState("");
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }, []);

  useEffect(() => {
    const savedPages = localStorage.getItem("cms-pages");
    if (savedPages) {
      const parsed = JSON.parse(savedPages);
      setPages(parsed);
      setActivePage(parsed[0]);
      setContent(parsed[0].content);
    } else {
      setPages(samplePages);
      setActivePage(samplePages[0]);
      setContent(samplePages[0].content);
    }
  }, []);

  useEffect(() => {
    if (pages.length > 0) {
      localStorage.setItem("cms-pages", JSON.stringify(pages));
    }
  }, [pages]);

  const handlePageSelect = (page) => {
    setActivePage(page);
    setContent(page.content);
  };

  const setTitle = (title) => {
    setActivePage((prev) => ({ ...prev, title }));
  };

  const setSlug = (slug) => {
    setActivePage((prev) => ({ ...prev, slug }));
  };

  const setEditorContent = (data) => {
    setContent(data);
    setActivePage((prev) => ({ ...prev, content: data }));
  };

  const savePage = () => {
    const now = new Date().toISOString();
    const updated = { ...activePage, lastModified: now };
    setActivePage(updated);
    const updatedPages = pages.map((p) =>
      p.id === updated.id ? updated : p
    );
    setPages(updatedPages);
    showToast("Page saved successfully!");
  };

  const toggleStatus = () => {
    const newStatus = activePage.status === "published" ? "draft" : "published";
    const updated = { ...activePage, status: newStatus };
    setActivePage(updated);
    const updatedPages = pages.map((p) =>
      p.id === updated.id ? updated : p
    );
    setPages(updatedPages);
    showToast(`Status changed to ${newStatus}`);
  };

  const deletePage = (pageId) => {
    const page = pages.find((p) => p.id === pageId);
    if (!window.confirm(`Delete "${page.title}"?`)) return;

    const remaining = pages.filter((p) => p.id !== pageId);
    setPages(remaining);
    if (activePage?.id === pageId) {
      if (remaining.length > 0) {
        setActivePage(remaining[0]);
        setContent(remaining[0].content);
      } else {
        setActivePage(null);
        setContent("");
      }
    }
    showToast("Page deleted");
  };

  const createPage = () => {
    const newPage = {
      id: Date.now(),
      title: "New Page",
      slug: "new-page",
      content: "<p>Start editing...</p>",
      status: "draft",
      lastModified: new Date().toISOString()
    };
    setPages([...pages, newPage]);
    setActivePage(newPage);
    setContent(newPage.content);
  };

  const formatDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="app">
      <h2>Admin Content Editor</h2>
      <div className="container">
        <PageList
          pages={pages}
          activePage={activePage}
          onSelect={handlePageSelect}
          onCreatePage={createPage}
          onDeletePage={deletePage}
        />

        <div className="editor-area">
          {activePage && (
            <>
              <EditorPanel
                page={activePage}
                setContent={setEditorContent}
                setTitle={setTitle}
                setSlug={setSlug}
              />

              <div className="editor-actions">
                <button onClick={savePage} className="save-btn">
                  Save Page
                </button>
                <button onClick={toggleStatus} className="status-toggle-btn">
                  {activePage.status === "published"
                    ? "Unpublish"
                    : "Publish"}
                </button>
                {activePage.lastModified && (
                  <span className="last-modified">
                    Last modified: {formatDate(activePage.lastModified)}
                  </span>
                )}
              </div>

              <PreviewPanel content={activePage.content} />
            </>
          )}
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
