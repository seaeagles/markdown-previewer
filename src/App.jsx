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

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div id="EditboxWrap">
        
        <textarea 
          id="editor"
          value={text}
          onChange={handleTextChange}
        />


      </div>
    
    <span className="gap"></span>
      <div id="PreviewWrap">
        <div id="preview">
          {text}
        </div>
      </div>
    </div>
    )
  
  
}

export default App
