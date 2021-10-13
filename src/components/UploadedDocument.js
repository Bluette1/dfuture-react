const Document = ({ document }) => {
  const { name, uploaded_at } = document;
  return (
    <tr>
      <td>{name}</td>
      <td>{uploaded_at}</td>
    </tr>
  );
};

export default Document;
