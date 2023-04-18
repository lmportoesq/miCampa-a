import { useState } from "react";
import Swal from "sweetalert2";
import clienteAxios from '../../config/axios';

function CreateLeader() {
    const formData = new FormData();

    const [data, setData] = useState({
        docIdent: '',
        leaderType: '',
        phoneNumber: '',
        adress: '',
        photo: '',
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
        <>
            <form className='form' onChange={handleInputChange} onSubmit={handleSubmit}>
                <h1 className='title'>Datos del líder</h1>
                <hr />
                <p className="paragraph">
                    Por favor dilegencia la información solicitada, los campos con asteriscos, indican que no deben quedar en blanco
                </p>
                <div className="row">
                    <p className="label">Cédula:</p>
                    <input className='input-text' type="number" name="docIdent" placeholder="Cédula No." />
                </div>
                <div className="row">
                    <p className="label">Dirección:</p>
                    <input className='input-text' type="text" name="adress" placeholder="Dirección" />
                </div>
                <div className="row">
                    <p className="label">Teléfono(s):</p>
                    <input className='input-text' type="tel" name="phoneNumber" placeholder="Teléfono" />
                </div>
                <div className="row">
                    <p className="label">Tipo de líder</p>
                    <select name="leaderType" className='input-text' >
                        <option value=""></option>
                        <option value="Aspirante al concejo">Aspirante al concejo</option>
                        <option value="Comunitario">Comunitario</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="row">
                    <p className="label">Agregar mi foto</p>
                    <input type="file" name="image" placeholder="Foto" accept="image/*" />
                </div>
                <button className="button" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>

        </>
    )
}
export default CreateLeader;
