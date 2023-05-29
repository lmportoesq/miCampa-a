/* eslint-disable react/prop-types */
function LeadersRow ({ data, confirmDelete, editUser }) {
  return (
    <>
      <tr className='row-list'>
        <td className='text-list__bold'>{ data.docIdent }</td>
        <td className='text-list__bold'>
          { data.firstName } { data.lastName }
        </td>
        <td className='text-list'>{ data.leaderType }</td>
        <td className='text-list'>{ data.adress }</td>
        <td className='text-list'>{ data.phoneNumber }</td>
        <td className='text-list'>{ data.email }</td>
        <td className='row-list__actions'>
          <ion-icon
            name='trash-outline'
            onClick={() => confirmDelete(data._id)}
          ></ion-icon>
          <ion-icon
            name='create-outline'
            onClick={() => editUser(data)}
          ></ion-icon>
        </td>
      </tr>
    </>
  )
}

export default LeadersRow
