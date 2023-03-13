import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../src/dest.css"

function MarkdownPreview() {
  const [markdownText, setMarkdownText] = useState("");

  const handleMarkdownChange = (event) => {
    setMarkdownText(event.target.value);
  };
  
  const aStyle = {
    fontSize: '50px',
    textAlign: 'center',
    bordeRadius: '5px',
    margin: '10px',

  };
  
  

  return (
    <div  style={aStyle} className="bd1">
      <h1>Markdown Previewer</h1>
      <textarea value={markdownText} onChange={handleMarkdownChange}className="bd2" /><br></br>
      <h2>Output:</h2>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
      <br></br><br></br>
    </div>
  );
}

export default MarkdownPreview;