import { useState } from "react";
import Swal from "sweetalert2";
import clienteAxios from  '../config/axios';

function CreateCampaign() {
    const [data, setData] = useState({
        campaignType: '',
        candidateName: '',
        campaignSlogan: '',
        campaignAdress:'',
    });

    const handleValidate = () => {
        const { campaignType, candidateName, campaignSlogan, campaignAdress } = data;
        const valido = !campaignType.length || !candidateName.length || !campaignSlogan.length || !campaignAdress.length;
        return valido;
    };

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });    
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await clienteAxios.post('/api/campaigns', data)
            console.log('La respuesta es...',res)
            if (res.status === 201) {
                Swal.fire(
                    'Se agregaron los datos de la campaña corréctamente ',
                    res.data.mensaje,
                    'success',
                );
            }
        } catch (error) {
            saveRejected();
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                text: 'Error..',
            });
        }
    }

    return (
        <div className='container mx-auto mt-5'>
            <form className='shadow-lg shadow-blue-900 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg' onSubmit={handleSubmit}>
                <h1 className='shadow-md'>Datos de la campaña</h1>
                <input className='border rounded border-black p-1' type="text" name="candidateName" placeholder="Nombre del candidato" onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="campaignSlogan" placeholder="Slogan de la campaña" onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="campaignAdress" placeholder="Dirección del comando" onChange={handleInputChange} />
                <label htmlFor="type">Tipo de campaña</label>
                <select name="campaignType" className='border rounded border-black p-1' onChange={handleInputChange}>
                    <option value=""></option>
                    <option value="Alcaldía">Alcaldía</option>
                    <option value="Gobernación">Gobernación</option>
                    <option value="Cámara">Cámara</option>
                    <option value="Senado">Senado</option>
                </select>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </div>
    )
}
export default CreateCampaign;
