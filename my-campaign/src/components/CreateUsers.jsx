import Swal from 'sweetalert2';
import { useState } from 'react';
//import clienteAxios from  '../config/axios';
import { createUser } from '../services/users';

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

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        await clienteAxios.post('/api/users',data)
        .then (res=>{
            if (res.data.code === 11000) {
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error',
                    text: 'Usuario ya fue registrado...',
                });
            }else {
                Swal.fire(
                    'Usuario agregado corréctamente ',
                    res.data.mensaje,
                    'success',
                );
            }
        })
        
    }; */

    const fetchCreateUser = async () => {
        const response = await createUser(data);
        if (response.code === 11000) {
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
        <div className='container mx-auto w-3/4 mt-5'>
            <form className='shadow-lg shadow-blue-900 mt-5 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg' onSubmit={handleSubmit}>
                <h1 className='shadow-md '>Registro de líderes</h1>
                <input className='border rounded border-black p-1' name="firstName" type="text" placeholder="Primer nombre" onChange={handleChange}/>
                <input className='border rounded border-black p-1' name="lastName" type="text" placeholder="Segundo nombre" onChange={handleChange}/>

                <input className='border rounded border-black p-1' name="email" type="email" placeholder="Email" onChange={handleChange}/>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </div>
    )
}
export default CreateUser;
