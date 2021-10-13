import React, { useState } from "react";
import docRequest from "./DocumentRequest";

const Upload = ({handleSubmit}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(1);
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="App">
      <form onSubmit={(e)=>handleSubmit(e, number, name, file)}>
      <p>
      Choose the document number (in the requested list) eg 1, 2...
          <input
            type="text"
            placeholder="Choose the document number (in the requested list) eg 1, 2..."
            value={number}
            onChange={handleNumberChange}
            required
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </p>
        <p>
          <input
            type="file"
            accept="image/*,.pdf, .doc, .rtf, .docx"
            onChange={handleFileChange}
            required
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Upload;
