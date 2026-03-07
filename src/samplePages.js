const samplePages = [
  {
    id: 1,
    title: "Home",
    slug: "home",
    status: "published",
    lastModified: "2025-01-15T10:30:00Z",
    content: `
<h2>Welcome to Our Website</h2>
<p>We build <strong>modern web applications</strong> with a focus on <i>performance</i> and <a href="https://example.com">user experience</a>.</p>
<h3>What We Offer</h3>
<ul>
  <li>Custom web development</li>
  <li>Content management solutions</li>
  <li>Cloud hosting &amp; deployment</li>
</ul>
<blockquote><p>Innovation distinguishes between a leader and a follower. &mdash; Steve Jobs</p></blockquote>
<h3>Our Process</h3>
<ol>
  <li>Discovery &amp; planning</li>
  <li>Design &amp; prototyping</li>
  <li>Development &amp; testing</li>
  <li>Launch &amp; support</li>
</ol>
<p>Ready to get started? <a href="https://example.com/contact">Contact us today</a>.</p>
`.trim()
  },
  {
    id: 2,
    title: "Feature Showcase",
    slug: "feature-showcase",
    status: "draft",
    lastModified: "2025-02-20T14:00:00Z",
    content: `
<h2>Feature Showcase</h2>
<p>This page demonstrates the rich editing capabilities of the CKEditor integration.</p>
<h3>Data Table</h3>
<figure class="table">
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Status</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rich text editing</td>
        <td>Active</td>
        <td>Full toolbar support</td>
      </tr>
      <tr>
        <td>Media embeds</td>
        <td>Active</td>
        <td>YouTube, Vimeo, etc.</td>
      </tr>
      <tr>
        <td>Code blocks</td>
        <td>Active</td>
        <td>Syntax highlighting</td>
      </tr>
    </tbody>
  </table>
</figure>
<h3>Embedded Video</h3>
<figure class="media"><oembed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></oembed></figure>
<h3>Code Example</h3>
<pre><code class="language-javascript">function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));</code></pre>
<h3>Nested Lists</h3>
<ul>
  <li>Frontend
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Angular</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
      <li>Ruby</li>
    </ul>
  </li>
</ul>
<hr>
<p>That concludes the feature showcase.</p>
`.trim()
  },
  {
    id: 3,
    title: "About",
    slug: "about",
    status: "published",
    lastModified: "2025-01-10T09:00:00Z",
    content: `
<h2>About Us</h2>
<figure class="image image-style-side">
  <img src="https://picsum.photos/seed/about/600/400" alt="Team photo">
  <figcaption>Our team at work</figcaption>
</figure>
<p>We are a team of passionate developers dedicated to building <mark>exceptional digital experiences</mark>.</p>
<h3>Our Values</h3>
<ol>
  <li><strong>Quality</strong> &mdash; We never compromise on code quality</li>
  <li><strong>Transparency</strong> &mdash; Open communication at every step</li>
  <li><strong>Innovation</strong> &mdash; Always exploring new technologies</li>
</ol>
<h3>Tech Stack</h3>
<p>We work with React, Node.js, PostgreSQL, and deploy on AWS and Vercel.</p>
<p>Want to learn more? Visit our <a href="https://example.com/blog">blog</a> for insights and tutorials.</p>
`.trim()
  }
];

export default samplePages;
