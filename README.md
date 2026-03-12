# CKEditor Admin Content Editor

A **React**-based admin content management tool powered by **CKEditor 5** (unified package).
Create, edit, preview, and manage rich content pages with a full-featured editing experience.

---

## Features

### Editor
- Full-featured **CKEditor 5** toolbar with 50+ plugins
- **Text formatting**: bold, italic, strikethrough, underline, subscript, superscript
- **Font controls**: size, family, color, background color
- **Block elements**: headings, blockquotes, code blocks, horizontal lines
- **Lists**: bulleted, numbered, multi-level, and to-do lists with indentation
- **Images**: upload, insert via URL, resize, caption, inline/block/side styles
- **Media**: table insertion, YouTube/Vimeo embeds, CKBox file manager & image editor
- **HTML embed**: insert raw HTML snippets with live preview
- **Templates**: predefined content templates (blog post, product page, FAQ)
- **Document tools**: document outline, table of contents, merge fields
- **Export/Import**: PDF export, Word export, Word import
- **Utilities**: alignment, highlight, find & replace, source editing, remove format, emoji, special characters, fullscreen
- **Premium**: slash commands, format painter, case change
- **Live word & character count**

### Real-Time Collaboration (optional)
- **Collaborative editing** with presence list
- **Comments & track changes**
- **Revision history**
- Requires `REACT_APP_CKEDITOR_TOKEN_URL` and `REACT_APP_CKEDITOR_WS_URL` environment variables

### Content Management
- Sidebar with page list and **create new page** button
- Edit **page title** and **slug**
- **Draft / Published** status toggle per page
- **Delete pages** with confirmation
- **Toast notifications** for save, status change, and delete actions
- **Last modified** timestamp displayed on save
- **localStorage persistence** across sessions

### Preview
- **Live preview** of rendered HTML with styled tables, code blocks, images, blockquotes, and media embeds

---

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Tip:** Clear localStorage to load the rich sample pages with demo content.

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `REACT_APP_CKEDITOR_LICENSE_KEY` | Yes | CKEditor premium features license key (defaults to `GPL`) |
| `REACT_APP_CKEDITOR_TOKEN_URL` | No | CKBox & collaboration token endpoint |
| `REACT_APP_CKEDITOR_WS_URL` | No | WebSocket URL for real-time collaboration |

---

## Tech Stack

- **React 19**
- **CKEditor 5** (`ckeditor5` unified package)
- **CKEditor 5 Premium Features** (`ckeditor5-premium-features`)
- **@ckeditor/ckeditor5-react**
