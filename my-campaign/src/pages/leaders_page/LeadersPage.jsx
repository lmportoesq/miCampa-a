import clienteAxios from '../../config/axios';
import Swal from "sweetalert2";

function LeadersPage({ data }) {

    const confirmDelete = () => {
        Swal.fire({
            title: 'Eliminar',
            text: "¿Esta seguro de eliminar el usuario?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                handlerDelete();
            }
        })
    }

    const handlerDelete = async () => {
        const id = data._id;
        try {
            const res = await clienteAxios.delete(`/api/users/${id}`);
            if (res.status === 200) {
                window.location.reload();
                //Swal.fire({ text: "Cliente se ha eliminado corréctamente...", icon: "success", timer: "3000" })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="row-list">
                <p className='text-list__bold'>{data.docIdent}</p>
                <p className='text-list__bold'>{data.firstName} {data.lastName}</p>
                <p className='text-list'>{data.leaderType}</p>
                <p className='text-list'>{data.adress}</p>
                <p className='text-list'>{data.phoneNumber}</p>
                <p className='text-list'>{data.email}</p>
                <div className='row-list__actions'>
                    <ion-icon name="trash-outline" onClick={confirmDelete}></ion-icon>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </div>
        </>
    )
}
export default LeadersPage;
