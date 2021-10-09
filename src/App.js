import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [clientName, setClientName] = useState("");
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
    form_data.append("client_name", clientName);
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
            type="text"
            placeholder="Your Name"
            value={clientName}
            onChange={handleClientNameChange}
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
  // }
};
export default App;
