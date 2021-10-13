import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import axios from "axios";
import Upload  from "./Upload";
import DocumentRequest  from "./DocumentRequest";


const ClientDashBoard = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [documentRequests, setDocumentRequests] = useState([]);
  useEffect(() => {
    let url = "http://localhost:8000/api/document_requests/";
    axios
      .get(url, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setDocumentRequests(res.data);
      })
      .catch((err) => console.log(err));
  }, [documentRequests]);

  const handleClick = (e) => {
    e.preventDefault();
    setShowUploadForm(true);
  };

  const handleSubmit = (e, name, file) => {
    e.preventDefault();
    setShowUploadForm(false);
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
        const id = documentRequests[0].id
        let url = `http://localhost:8000/api/document_requests/${id}`;
        axios
          .delete(url, {
            headers: {
              "content-type": "application/json",
            },
          })  
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {" "}
      <article>Client Dashboard</article>
      <table>
        <thead>
          <tr>
            <td>Name: </td>
            <td>Uploaded: </td>
            <td>Requested on: </td>
          </tr>
        </thead>
        <tbody>
          {documentRequests.length > 0 &&
            documentRequests.map((documentRequest) => (
              <DocumentRequest
                key={`doc-request-${uuid()}`}
                documentRequest={documentRequest}
              />
            ))}
        </tbody>
      </table>
      <div>
        <button type="submit" onClick={handleClick}>
          Upload a requested document
        </button>
      </div>
      {showUploadForm && <Upload handleSubmit={handleSubmit} />}
    </div>
  );
};

export default ClientDashBoard;
