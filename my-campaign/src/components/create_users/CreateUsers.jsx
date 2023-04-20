import Swal from 'sweetalert2';
import { useState } from 'react';
import clienteAxios from '../../config/axios';

function CreateUser() {
    const profile = JSON.parse(localStorage.getItem('profile'));

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        campaign: profile.campaign_id,
        docIdent: '',
        leaderType: '',
        phoneNumber: '',
        adress: '',
        photo: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,

        });
    };

    const handleValidate = () => {
        const { firstName, lastName, email, docIdent, leaderType, phoneNumber, adress } = data;
        const valido = !firstName.length || !lastName.length || !email.length || !docIdent.length || !leaderType.length || !phoneNumber.length || !adress.length;
        return valido;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await clienteAxios.post('/api/users', data)
            .then(res => {
                if (res.data.code === 11000) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un error',
                        text: 'Usuario ya fue registrado...',
                    });
                } else {
                    Swal.fire(
                        'Usuario agregado corréctamente, se ha enviado un correo para su activación.',
                        res.data.mensaje,
                        'success',
                    );
                }
            });
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className="title">Registro de líderes</h1>
                <hr />
                <p className="paragraph">
                    Por favor diligencia la información solicitada, los campos con asteriscos, indican que no deben quedar en blanco.
                </p>
                <div className="row">
                    <p className="label">*Cédula:</p>
                    <input className='input-text' type="number" name="docIdent" placeholder="Cédula No." onChange={handleChange} />
                </div>
                <div className="row">
                    <p className="label">*Nombre(s):</p>
                    <input className='input-text' name="firstName" type="text" placeholder="Ingrese nombre" onChange={handleChange} />
                </div>
                <div className="row">
                    <p className="label">*Apellidos:</p>
                    <input className='input-text' name="lastName" type="text" placeholder="Ingrese apellidos" onChange={handleChange} />
                </div>
                <div className="row">
                    <p className="label">*Dirección:</p>
                    <input className='input-text' type="text" name="adress" placeholder="Dirección" onChange={handleChange} />
                </div>
                <div className="row">
                    <p className="label">*Teléfono(s):</p>
                    <input className='input-text' type="tel" name="phoneNumber" placeholder="Teléfono" onChange={handleChange} />
                </div>
                <div className="row">
                    <p className="label">*Tipo de líder</p>
                    <select name="leaderType" className='input-text' onChange={handleChange}>
                        <option value=""></option>
                        <option value="Aspirante al concejo">Aspirante al concejo</option>
                        <option value="Comunitario">Comunitario</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="row">
                    <p className="label">*Email:</p>
                    <input className='input-text' name="email" type="email" placeholder="Email" onChange={handleChange} />
                </div>

                <button className="button" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>

        </>
    )
}
export default CreateUser;
