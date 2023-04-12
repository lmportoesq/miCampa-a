import Swal from 'sweetalert2';
import { useState } from 'react';
import clienteAxios from '../../config/axios';

function CreateUser() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const fetchCreateUser = async () => {
        try {
            const res = await clienteAxios.post('/api/users', data)
            if (res.code === 11000) {
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error',
                    text: 'Usuario ya fue registrado...!',
                });
            } else {
                Swal.fire(
                    'Registro exitoso ',
                    'Se ha enviado un email a su correo para la confirmación de su registro',
                    'success',
                );
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                text: 'Error..',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchCreateUser();
    };


    const handleValidate = () => {
        const { firstName, lastName, email } = data;
        const valido = !firstName.length || !lastName.length || !email.length;
        return valido;
    };

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='title'>Datos del líder</h1>
                <hr />
                <p className="paragraph">
                    Por favor dilegencia la información solicitada, los campos con asteriscos, indican que no deben quedar en blanco
                </p>
                <div className="row">
                    <p className="label">Nombre(s):</p>
                    <input className='input-text' name="firstName" type="text" placeholder="Primer nombre" onChange={handleChange} />
                </div>
                <div className="row">
                    <p className="label">Apellidos:</p>
                    <input className='input-text' name="lastName" type="text" placeholder="Segundo nombre" onChange={handleChange} />
                </div>
                <div className="row">
                    <p className="label">Email:</p>
                    <input className='input-text' name="email" type="email" placeholder="Email" onChange={handleChange} />
                </div>
                <button className="button" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>

        </>
    )
}
export default CreateUser;
