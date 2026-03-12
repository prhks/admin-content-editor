import React, { useRef, useEffect, useState, useCallback } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  Subscript,
  Superscript,
  Link,
  List,
  TodoList,
  BlockQuote,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Table,
  TableToolbar,
  TableCaption,
  TableProperties,
  TableCellProperties,
  MediaEmbed,
  Indent,
  IndentBlock,
  Undo,
  Paragraph,
  PasteFromOffice,
  Autoformat,
  Alignment,
  CodeBlock,
  SourceEditing,
  Font,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  HorizontalLine,
  Highlight,
  FindAndReplace,
  RemoveFormat,
  WordCount,
  Mention,
  Emoji,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Fullscreen,
  CloudServices,
  CKBox,
  CKBoxImageEdit,
  PictureEditing
} from "ckeditor5";

import {
  SlashCommand,
  FormatPainter,
  CaseChange,
  PasteFromOfficeEnhanced,
  Template,
  ExportPdf,
  ExportWord,
  ImportWord,
  MultiLevelList,
  DocumentOutline,
  TableOfContents,
  MergeFields,
  RealTimeCollaborativeEditing,
  RealTimeCollaborativeComments,
  RealTimeCollaborativeTrackChanges,
  RealTimeCollaborativeRevisionHistory,
  Comments,
  TrackChanges,
  RevisionHistory,
  PresenceList
} from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

const LICENSE_KEY = process.env.REACT_APP_CKEDITOR_LICENSE_KEY || "GPL";

const TOKEN_URL = process.env.REACT_APP_CKEDITOR_TOKEN_URL;
const WS_URL = process.env.REACT_APP_CKEDITOR_WS_URL;

const COLLABORATION_ENABLED = !!(TOKEN_URL && WS_URL);

function EditorPanel({ page, setContent, setTitle, setSlug }) {
  const wordCountRef = useRef(null);
  const presenceRef = useRef(null);
  const sidebarRef = useRef(null);
  const outlineRef = useRef(null);
  const [containersReady, setContainersReady] = useState(false);

  useEffect(() => {
    // Wait one tick for all refs to mount before initializing editor
    setContainersReady(true);
  }, []);

  useEffect(() => {
    return () => {
      if (wordCountRef.current) {
        wordCountRef.current.innerHTML = "";
      }
    };
  }, []);

  const buildConfig = useCallback(() => {
    const basePlugins = [
      Essentials,
      Bold,
      Italic,
      Strikethrough,
      Underline,
      Subscript,
      Superscript,
      Link,
      List,
      TodoList,
      BlockQuote,
      Heading,
      Image,
      ImageCaption,
      ImageResize,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      Table,
      TableToolbar,
      TableCaption,
      TableProperties,
      TableCellProperties,
      MediaEmbed,
      Indent,
      IndentBlock,
      Undo,
      Paragraph,
      PasteFromOffice,
      PasteFromOfficeEnhanced,
      Autoformat,
      Alignment,
      CodeBlock,
      ...(COLLABORATION_ENABLED ? [] : [SourceEditing]),
      Font,
      FontSize,
      FontFamily,
      FontColor,
      FontBackgroundColor,
      HorizontalLine,
      Highlight,
      FindAndReplace,
      RemoveFormat,
      WordCount,
      Mention,
      Emoji,
      SpecialCharacters,
      SpecialCharactersEssentials,
      Fullscreen,
      // Premium productivity plugins
      SlashCommand,
      FormatPainter,
      CaseChange,
      Template,
      ExportPdf,
      ExportWord,
      ImportWord,
      MultiLevelList,
      DocumentOutline,
      TableOfContents,
      MergeFields,
      CKBox,
      CKBoxImageEdit,
      PictureEditing
    ];

    const collaborationPlugins = COLLABORATION_ENABLED
      ? [
          CloudServices,
          RealTimeCollaborativeEditing,
          RealTimeCollaborativeComments,
          RealTimeCollaborativeTrackChanges,
          RealTimeCollaborativeRevisionHistory,
          Comments,
          TrackChanges,
          RevisionHistory,
          PresenceList
        ]
      : [];

    const plugins = [...basePlugins, ...collaborationPlugins];

    const baseToolbarItems = [
      "heading",
      "|",
      "bold",
      "italic",
      "strikethrough",
      "underline",
      "|",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "formatPainter",
      "caseChange",
      "-",
      "alignment",
      "|",
      "bulletedList",
      "numberedList",
      "multiLevelList",
      "todoList",
      "|",
      "indent",
      "outdent",
      "-",
      "link",
      "insertTable",
      "mediaEmbed",
      "ckbox",
      "blockQuote",
      "codeBlock",
      "horizontalLine",
      "|",
      "insertTemplate",
      "tableOfContents",
      "insertMergeField",
      "|",
      "emoji",
      "specialCharacters",
      "-",
      "exportPdf",
      "exportWord",
      "importWord",
      "|",
      "highlight",
      "removeFormat",
      "|",
      "findAndReplace",
      ...(COLLABORATION_ENABLED ? [] : ["sourceEditing"]),
      "|",
      "undo",
      "redo",
      "|",
      "fullscreen"
    ];

    const collaborationToolbarItems = COLLABORATION_ENABLED
      ? ["|", "comment", "trackChanges", "revisionHistory"]
      : [];

    const toolbarItems = [...baseToolbarItems, ...collaborationToolbarItems];

    const config = {
      licenseKey: LICENSE_KEY,
      plugins,
      toolbar: {
        items: toolbarItems,
        shouldNotGroupWhenFull: true
      },
      image: {
        toolbar: [
          "imageStyle:inline",
          "imageStyle:block",
          "imageStyle:side",
          "|",
          "toggleImageCaption",
          "imageTextAlternative",
          "|",
          "ckboxImageEdit"
        ]
      },
      table: {
        contentToolbar: [
          "tableColumn",
          "tableRow",
          "mergeTableCells",
          "tableProperties",
          "tableCellProperties"
        ]
      },
      template: {
        definitions: [
          {
            title: "Blog Post",
            description: "Standard blog post layout with sections",
            data: "<h2>Blog Title</h2><p>Write your introduction here...</p><h3>Section 1</h3><p>Content goes here...</p><h3>Section 2</h3><p>More content...</p>"
          },
          {
            title: "Product Page",
            description: "Product description with features and pricing",
            data: "<h2>Product Name</h2><p>Product description...</p><h3>Features</h3><ul><li>Feature 1</li><li>Feature 2</li><li>Feature 3</li></ul><h3>Pricing</h3><p>Contact us for pricing details.</p>"
          },
          {
            title: "FAQ Section",
            description: "Frequently asked questions layout",
            data: "<h2>Frequently Asked Questions</h2><h3>Question 1?</h3><p>Answer to question 1...</p><h3>Question 2?</h3><p>Answer to question 2...</p><h3>Question 3?</h3><p>Answer to question 3...</p>"
          }
        ]
      },
      documentOutline: {
        container: outlineRef.current
      },
      mergeFields: {
        definitions: [
          { id: "firstName", label: "First Name" },
          { id: "lastName", label: "Last Name" },
          { id: "email", label: "Email" },
          { id: "company", label: "Company" },
          { id: "date", label: "Date" }
        ]
      },
      ckbox: {
        tokenUrl: TOKEN_URL
      },
      wordCount: {
        onUpdate: (stats) => {
          if (wordCountRef.current) {
            wordCountRef.current.textContent = `Words: ${stats.words} | Characters: ${stats.characters}`;
          }
        }
      }
    };

    if (COLLABORATION_ENABLED) {
      config.cloudServices = {
        tokenUrl: TOKEN_URL,
        webSocketUrl: WS_URL
      };
      config.collaboration = {
        channelId: `page-${page.id}`
      };
      config.presenceList = {
        container: presenceRef.current
      };
      config.sidebar = {
        container: sidebarRef.current
      };
      config.comments = {
        editorConfig: {
          extraPlugins: [Bold, Italic, Underline, List, Autoformat]
        }
      };
    }

    return config;
  }, [page.id]);

  return (
    <div className="editor-panel">
      {COLLABORATION_ENABLED && (
        <div className="presence-container" ref={presenceRef}></div>
      )}

      <input
        type="text"
        value={page.title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Page Title"
        className="page-title-input"
      />

      <input
        type="text"
        value={page.slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Page Slug"
        className="page-slug-input"
      />

      <div className="editor-with-sidebar">
        <div className="document-outline-container" ref={outlineRef}></div>

        <div className="editor-wrapper">
          {containersReady && (
            <CKEditor
              key={page.id}
              editor={ClassicEditor}
              data={page.content}
              config={buildConfig()}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          )}
        </div>

        {COLLABORATION_ENABLED && (
          <div className="sidebar-annotations" ref={sidebarRef}></div>
        )}
      </div>

      <div className="word-count-bar" ref={wordCountRef}>
        Words: 0 | Characters: 0
      </div>
    </div>
  );
}

export default EditorPanel;
