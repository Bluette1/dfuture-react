const docRequest = ({documentRequest, number}) => {
  const {name, created_at} = documentRequest
  return <tr>
    <td>{number}</td>
    <td>{name}</td>
    <td>{created_at}</td>
  </tr>
}

export default docRequest;