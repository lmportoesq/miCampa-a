import './leaders_page.css';

function LeadersPage({ data }) {
    function handleClick(){
        alert('Diste clic en eliminar...')
    }
    return (
        <>
            <div className="row-leaders">
                <p className='text-list__bold'>{data.docIdent}</p>
                <p className='text-list__bold'>{data.firstName} {data.lastName}</p>
                <p className='text-list'>{data.leaderType}</p>
                <p className='text-list'>{data.adress}</p>
                <p className='text-list'>{data.phoneNumber}</p>
                <p className='text-list'>{data.email}</p>
                <div className='row-leaders__actions'>
                    <ion-icon name="trash-outline" onClick={handleClick}></ion-icon>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </div>
        </>
    )
}
export default LeadersPage;
