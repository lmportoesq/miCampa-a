import { useState } from "react";
import Swal from "sweetalert2";
import clienteAxios from '../config/axios';

function CreateLeader() {
    const formData = new FormData();
    const userID = localStorage.getItem('id');
    const [data, setData] = useState({
        docIdent: '',
        leaderType: '',
        phoneNumber: '',
        adress: '',
        photo:'',
        user: userID
    });

    const handleValidate = () => {
        const { docIdent, leaderType, phoneNumber, adress } = data;
        const valido = !docIdent.length || !leaderType.length || !phoneNumber.length || !adress.length;
        return valido;
    };

    const handleInputChange = async (e) => {
        if (!e.target.files) {
            const url = 'http://res.cloudinary.com/mycampaign/image/upload/v1654714217/pwo2fk04gtdhxgzia472.png'
            setData({
                ...data,
                [e.target.name]: e.target.value,
                photo: url,
            });
        } else {
            const image = e.target.files[0];
            formData.append('file', image);
         
            const result = await clienteAxios.post('/api/upload/image', formData);
            const { url } = result.data;

            setData({
                ...data,
                photo: url,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await clienteAxios.post('/api/leaders', data)
            .then(res => {
                if (res.status === 201) {
                    Swal.fire(
                        'Se agregaron los datos del líder corréctamente ',
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
            <form className='shadow-lg shadow-blue-900 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg' onChange={handleInputChange} onSubmit={handleSubmit}>
                <h1 className='shadow-md'>Datos del líder</h1>
                <input className='border rounded border-black p-1' type="number" name="docIdent" placeholder="Cédula No." />
                <input className='border rounded border-black p-1' type="text" name="adress" placeholder="Dirección"  />
                <input className='border rounded border-black p-1' type="tel" name="phoneNumber" placeholder="Teléfono"  />
                <label htmlFor="type">Tipo de líder</label>
                <select name="leaderType" className='border rounded border-black p-1' >
                    <option value=""></option>
                    <option value="Aspirante al concejo">Aspirante al concejo</option>
                    <option value="Comunitario">Comunitario</option>
                    <option value="Otro">Otro</option>
                </select>
                <label htmlFor="image">
                    Agregar mi foto
                    <input type="file" name="image" placeholder="Foto" accept="image/*" />
                </label>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </div>
    )
}
export default CreateLeader;
