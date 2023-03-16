import { useState, useEffect } from 'react'
import { marked } from 'marked';
import './App.css'


function App() {
  const defaultContent = `
  # Heading 1
  ## Subheading
  [Link to Google](https://www.google.com)
  Inline code: \`console.log('Hello, world!');\`
  Code block:
  \`\`\`
  function add(a, b) {
    return a + b;
  }
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote
  ![Kitten](https://placekitten.com/200/300)
  **Bolded text**
  `;
  

  const [text, setText] = useState(defaultContent);
    // {id: '1', heading: 'React Markdown Previewer'},
    // {id: '2', subHeading: 'Here is a sub-heading'},
    // {id: '3', link: 'https://example.com'},
    // {id: '4', inlineCode: 'console.log("Hello World!");'},
    // {id: '5', codeBlock: 'a + b = c'},
    // {id: '6', listItem: 'Learn'},
    // {id: '7', blockquote: 'Practice makes perfect.'},
    // {id: '8', image: 'http://placekitten.com/200/300'},
    // {id: '9', boldText: ''}

  useEffect(() => {
    setText(defaultContent)
  }, []);

  const handleTextChange = event => {
    setText(event.target.value)
  };

  const markdown = ({ text }) => {
    const htmlText = marked(text, { breaks: true });
    return htmlText
  }

  return (
    <div className="App">
      <h1 id="title">Markdown Previewer</h1>
      <div id="EditboxWrap">
        <h3>Editor</h3>
        <textarea 
          id="editor"
          value={text}
          onChange={handleTextChange}
        />


      </div>
    
      <div id="PreviewWrap">
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: markdown({text}) }} id="preview">
        {/* <Markdown text={text} /> */}
        </div>
      </div>
    </div>
    )
  
  
}

export default App
