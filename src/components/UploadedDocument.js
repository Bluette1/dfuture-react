const Document = ({ document }) => {
  const { name, uploaded_at } = document;
  return (
    <tr>
      <td>{name}</td>
      <td>{new Date(uploaded_at).toDateString()}</td>
    </tr>
  );
};

export default Document;
