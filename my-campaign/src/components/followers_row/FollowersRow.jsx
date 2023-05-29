/* eslint-disable react/prop-types */
function FollowersRow ({ data, confirmDelete, editUser }) {
  return (
    <>
      <tr className='row-list'>
        <td className='text-list__bold'>{ data.docIdent }</td>
        <td className='text-list__bold'>
          { data.firstName } { data.lastName }
        </td>
        <td className='text-list'>{ data.adress }</td>
        <td className='text-list'>{ data.phoneNumber }</td>
        <td className='text-list'>{ data.votingTable }</td>
        <td className='row-list__actions'>
          <ion-icon className='icon-delete'
            name='trash-outline'
            onClick={() => confirmDelete(data._id)}
          ></ion-icon>
          <ion-icon className= 'icon-edit'
            name='create-outline'
            onClick={() => editUser(data)}
          ></ion-icon>
        </td>
      </tr>
    </>
  )
}
export default FollowersRow
