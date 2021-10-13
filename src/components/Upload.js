import React, { useState } from "react";

const Upload = ({handleSubmit}) => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="App">
      <form onSubmit={(e)=>handleSubmit(e, name, file)}>
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
