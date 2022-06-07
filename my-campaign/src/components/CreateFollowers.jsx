import { useState } from "react";
import Swal from "sweetalert2";
import clienteAxios from '../config/axios';

function CreateFollower() {
    const leaderID = localStorage.getItem('id');
    const [data, setData] = useState({
        docIdent: '',
        firstName:'',
        lastName:'',
        adress: '',
        phoneNumber: '',
        votingTable:'',
        leader: leaderID
    });

    const handleValidate = () => {
        const { docIdent, firstName, lastName, phoneNumber, adress, votingTable } = data;
        const valido = !docIdent.length || !firstName.length || !lastName.length ||  !phoneNumber.length || !adress.length || !votingTable.length;
        return valido;
    };

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    const API_URL = 'http://localhost:8080'
    const handleSubmit = async (e) => {
        e.preventDefault();
        await clienteAxios.post('/api/followers', data)
            .then(res => {
                if (res.status === 201) {
                    Swal.fire(
                        'Se agregaron los datos de la campaña corréctamente ',
                        res.data.mensaje,
                        'success',
                    );
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Algo salió mal',
                        text: 'Documento ya fue registrado...',
                    });
                }
            })
    }

    return (
        <div className='container mx-auto mt-5'>
            <form className='shadow-lg shadow-blue-900 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg' onSubmit={handleSubmit}>
                <h1 className='shadow-md'>Datos del seguidor</h1>
                <input className='border rounded border-black p-1' type="number" name="docIdent" placeholder="Cédula No." onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="firstName" placeholder="Nombres" onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="lastName" placeholder="Apellidos" onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="adress" placeholder="Dirección" onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="tel" name="phoneNumber" placeholder="Teléfono" onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="number" name="votingTable" placeholder="Mesa No." onChange={handleInputChange} />

                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </div>
    )
}
export default CreateFollower;
