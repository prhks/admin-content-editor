import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const saveContent = () => {
    localStorage.setItem("editorContent", content);
    alert("Content saved successfully!");
  };

  return (
    <div style={{ width: "800px", margin: "40px auto" }}>
      <h2>Admin Content Editor</h2>

      <CKEditor
        editor={ClassicEditor}
        data={content}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "undo",
            "redo"
          ]
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />

      <button onClick={saveContent} style={{ marginTop: "20px" }}>
        Save Content
      </button>

      <h3>Preview</h3>

      <div
        style={{ border: "1px solid #ccc", padding: "15px" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default App;