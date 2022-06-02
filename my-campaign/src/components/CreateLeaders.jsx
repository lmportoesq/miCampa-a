import { useState } from "react";
import Swal from "sweetalert2";
import clientAxios from  '../config/axios';

function CreateLeader() {
    const userID = localStorage.getItem('Id');
    const [data, setData] = useState({
        doctIdent: '',
        leaderType: '',
        phoneNumber: '',
        user: userID
    });
    
    const handleValidate = () => {
        const { doctIdent, leaderType, phoneNumber } = data;
        const valido = !doctIdent.length || !leaderType.length || !phoneNumber.length;
        return valido;
    };

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });    
        console.log('Contenido de data es..',data)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await clientAxios.post('/api/leaders',data)
        .then (res=>{
            if (res.data.code === 11000) {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salió mal',
                    text: 'Error del servidor...',
                });
            }else {
                Swal.fire(
                    'Se agregaron los datos de la campaña corréctamente ',
                    res.data.mensaje,
                    'success',
                );
            }
        })
    }

    return (
        <div className='container mx-auto mt-5'>
            <form className='shadow-lg shadow-blue-900 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg' onSubmit={handleSubmit}>
                <h1 className='shadow-md'>Datos personales del líder</h1>
                <input className='border rounded border-black p-1' type="text" name="doctIdent" placeholder="Cédula No." onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="phoneNumber" placeholder="Teléfono" onChange={handleInputChange} />
                <label htmlFor="type">Tipo de líder</label>
                <select name="leaderType" className='border rounded border-black p-1' onChange={handleInputChange}>
                    <option value=""></option>
                    <option value="Aspirante al concejo">Aspirante al concejo</option>
                    <option value="Comunitario">Comunitario</option>
                    <option value="Otro">Otro</option>
                </select>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </div>
    )
}
export default CreateCampaign;
