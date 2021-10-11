import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("file", file, file.name);
    form_data.append("name", name);
    let url = "http://localhost:8000/api/documents/";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
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
