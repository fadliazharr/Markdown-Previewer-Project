# Markdown-Previewer-Project

![image](https://github.com/user-attachments/assets/2e3da39a-6f0a-4193-9dbf-2bf74e7ff0a7)
A simple, live markdown previewer built using vanilla JavaScript and the [Marked.js](https://github.com/markedjs/marked) library. This project allows you to write Markdown in a textarea and instantly see the rendered HTML preview.

## Features

- Live preview of Markdown content
- Supports GitHub-flavored Markdown
- Default Markdown template with common elements (headings, lists, links, images, etc.)
- Optional bonus: Converts carriage returns (`\n`) into `<br>` elements for line breaks

## Tools Used

- **HTML**: Structure of the page and layout
- **CSS**: Basic styling for the editor and preview elements
- **JavaScript**: Used for handling the dynamic updates between the editor and preview sections
- **Marked.js**: A Markdown parser to convert Markdown text into HTML in real time

## How It Works

1. **Editor**: Users type or paste Markdown into a `<textarea>` element.
2. **Live Preview**: As the user types, JavaScript listens for input events and updates the HTML preview of the Markdown in real-time using the `marked` library.
3. **Markdown Rendering**: The Markdown text is parsed and rendered as HTML, including headers, code blocks, links, lists, and images.
4. **Carriage Return Handling** (Bonus): The app also renders carriage returns (`\n`) as `<br>` (line break) elements.

## Getting Started

To run this project locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/markdown-previewer.git
