import React from "react";

function PreviewPanel({ content }) {
  return (
    <div className="preview-panel">
      <h3>Preview</h3>
      <div
        className="preview-box ck-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default PreviewPanel;
