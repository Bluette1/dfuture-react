import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import axios from "axios";
import DocumentRequestForm from "./DocumentRequestForm";
import DocumentRequest from "./DocumentRequest";
import Document from "./UploadedDocument";

const RMDashBoard = () => {
  const [showDocRequestForm, setShowDocRequestForm] = useState(false);
  const [documentRequests, setDocumentRequests] = useState([]);
  const [documents, setDocuments] = useState([]);

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

  useEffect(() => {
    let url = "http://localhost:8000/api/documents/";
    axios
      .get(url, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setDocuments(res.data);
      })
      .catch((err) => console.log(err));
  }, [documents]);

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
          Documents Uploaded
          <tr>
            <td>Name: </td>
            <td>Uploaded on: </td>
          </tr>
        </thead>
        <tbody>
          {documents.length > 0 &&
            documents.map((document, idx) => (
              <Document
                key={`doc-request-${uuid()}`}
                document={document}
                number={idx + 1}
              />
            ))}
        </tbody>
      </table>
      <table>
        <thead>
          Documents Requested(Not yet uploaded)
          <tr>
            <td>Number: </td>
            <td>Name: </td>
            <td>Requested on: </td>
          </tr>
        </thead>
        <tbody>
          {documentRequests.length > 0 &&
            documentRequests.map((documentRequest, idx) => (
              <DocumentRequest
                key={`doc-request-${uuid()}`}
                documentRequest={documentRequest}
                number={idx + 1}
              />
            ))}
        </tbody>
      </table>
      <div>
        <button type="submit" onClick={handleClick}>
          Request a document from client
        </button>
      </div>
      {showDocRequestForm && (
        <DocumentRequestForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default RMDashBoard;
