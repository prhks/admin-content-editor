import React, { useRef, useEffect } from "react";
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
  Fullscreen
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

function EditorPanel({ page, setContent, setTitle, setSlug }) {
  const wordCountRef = useRef(null);

  useEffect(() => {
    return () => {
      if (wordCountRef.current) {
        wordCountRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="editor-panel">
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

      <CKEditor
        editor={ClassicEditor}
        data={page.content}
        config={{
          licenseKey: "GPL",
          plugins: [
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
            Fullscreen
          ],
          toolbar: {
            items: [
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
              "-",
              "alignment",
              "|",
              "bulletedList",
              "numberedList",
              "todoList",
              "|",
              "indent",
              "outdent",
              "-",
              "link",
              "insertTable",
              "mediaEmbed",
              "blockQuote",
              "codeBlock",
              "horizontalLine",
              "|",
              "emoji",
              "specialCharacters",
              "-",
              "highlight",
              "removeFormat",
              "|",
              "findAndReplace",
              "sourceEditing",
              "|",
              "undo",
              "redo",
              "|",
              "fullscreen"
            ],
            shouldNotGroupWhenFull: true
          },
          image: {
            toolbar: [
              "imageStyle:inline",
              "imageStyle:block",
              "imageStyle:side",
              "|",
              "toggleImageCaption",
              "imageTextAlternative"
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
          wordCount: {
            onUpdate: (stats) => {
              if (wordCountRef.current) {
                wordCountRef.current.textContent = `Words: ${stats.words} | Characters: ${stats.characters}`;
              }
            }
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />

      <div className="word-count-bar" ref={wordCountRef}>
        Words: 0 | Characters: 0
      </div>
    </div>
  );
}

export default EditorPanel;
