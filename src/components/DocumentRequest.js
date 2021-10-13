const docRequest = ({documentRequest, number}) => {
  const {name, created_at} = documentRequest
  return <tr>
    <td>{number}</td>
    <td>{name}</td>
    <td>{new Date(created_at).toDateString()}</td>
  </tr>
}

export default docRequest;