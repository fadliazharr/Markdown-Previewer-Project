document.addEventListener("DOMContentLoaded", function () {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");

  const updatePreview = () => {
    const markdownText = editor.value;
    const htmlText = marked(markdownText, { breaks: true }); // <-- breaks enabled here!
    preview.innerHTML = htmlText;
  };

  editor.addEventListener("input", updatePreview);

  const defaultMarkdown = `
# Heading 1
## Heading 2

[Visit GitHub](https://github.com)

Inline code: \`console.log('Hello, World!');\`

\`\`\`
// Code block
function greet(name) {
  return 'Hello, ' + name + '!';
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**Bolded text**

This is a line  
This is another line after a break
`;

  editor.value = defaultMarkdown;
  updatePreview();
});
