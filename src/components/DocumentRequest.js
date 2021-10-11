const docRequest = ({documentRequest}) => {
  const {name, uploaded, created_at} = documentRequest
  return <tr>
    <td>{name}</td>
    <td>{uploaded ? 'Yes' : 'No'}</td>
    <td>{created_at}</td>
  </tr>
}

export default docRequest;