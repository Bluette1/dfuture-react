import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import axios from "axios";
import DocumentRequestForm  from "./DocumentRequestForm";
import DocumentRequest  from "./DocumentRequest";


const RMDashBoard = () => {
  const [showDocRequestForm, setShowDocRequestForm] = useState(false);
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
    setShowDocRequestForm(true);
  };

  const handleSubmit = (e, name) => {
    e.preventDefault();
    setShowDocRequestForm(false);
    let form_data = new FormData();
    form_data.append("name", name);
    let url = "http://localhost:8000/api/document_requests/";
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
    <div>
      {" "}
      <article>Relationship Manager Dashboard</article>
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
          Request a document from client
        </button>
      </div>
      {showDocRequestForm && <DocumentRequestForm handleSubmit={handleSubmit} />}
    </div>
  );
};

export default RMDashBoard;
