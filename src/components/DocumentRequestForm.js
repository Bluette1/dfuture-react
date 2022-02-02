import React, { useState } from "react";

const RequestDocument = ({handleSubmit}) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={(e)=> handleSubmit(e, name)}>
        <p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};
export default RequestDocument;
