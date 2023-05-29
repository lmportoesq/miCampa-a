function FollowersPage ({ data }) {
  function handleClick () {
    alert('Diste clic en eliminar...')
  }

  return (
        <>
            <div className="row-list">
                <p className='text-list__bold'>{data.docIdent}</p>
                <p className='text-list__bold'>{data.firstName} {data.lastName}</p>
                <p className='text-list'>{data.adress}</p>
                <p className='text-list'>{data.phoneNumber}</p>
                <p className='text-list'>{data.votingTable}</p>
                <div className='row-list__actions'>
                    <ion-icon name="trash-outline" onClick={handleClick}></ion-icon>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </div>
        </>
  )
}
export default FollowersPage
