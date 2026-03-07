# CKEditor Admin Content Editor

A **React**-based admin content management tool powered by **CKEditor 5** (unified package).
Create, edit, preview, and manage rich content pages with a full-featured editing experience.

---

## Features

### Editor
- Full-featured **CKEditor 5** toolbar with 40+ plugins
- **Text formatting**: bold, italic, strikethrough, underline, subscript, superscript
- **Font controls**: size, family, color, background color
- **Block elements**: headings, blockquotes, code blocks, horizontal lines
- **Lists**: bulleted, numbered, and to-do lists with indentation
- **Media**: image upload, table insertion, YouTube/Vimeo embeds
- **Utilities**: alignment, highlight, find & replace, source editing, remove format
- **Live word & character count**

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

---

## Tech Stack

- **React 19**
- **CKEditor 5** (`ckeditor5` unified package)
- **@ckeditor/ckeditor5-react**
