import { useState } from "react";
import Swal from "sweetalert2";
import clienteAxios from '../config/axios';

function CreateLeader() {
    const userID = localStorage.getItem('id');
    const [data, setData] = useState({
        doctIdent: '',
        leaderType: '',
        phoneNumber: '',
        // user: userID
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
    }
    const API_URL = 'http://localhost:8080'
    const handleSubmit = async (e) => {
        console.log('Estoy en handlesubmit y Contenido de data es..', data)
        e.preventDefault();
       // fetch('http://localhost:8080/api/leaders')
       //     .then(response => response.json())
       //     .then(data => console.log('Contenido de data es....',data))
       //     .catch (error => console.log(error))
      try {
          const response = await fetch('http://localhost:8080/api/leaders', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });
        //  const { doctIdent, leaderType, phoneNumber } = await response.json();
          console.log('El contenido de data es..',data)
          //const { token, profile, id } = await response.json();
          console.log('El contenido de response es..',response)
          if (response.status === 500) {
              Swal.fire({
                  icon: 'error',
                  title: 'Algo salió mal',
                  text: 'Usuario o contraseña no válida...',
              });
              return;
          }

          if (response.status === 200) {
              Swal.fire(
                  'Login exitoso ',
                  'Usuario autenticado corréctamente...!',
                  'success',
              );
          }

      } catch (error) {
          console.log(error);
      } 

    /*  const response = await clienteAxios.post('/api/leaders',data)
      console.log('REsultado de axios es',response)
      .then (res=>{
          if (res.data.code === 11000 || res.data.code === 500) {
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
      .catch(error) */
}

return (
    <div className='container mx-auto mt-5'>
        <form className='shadow-lg shadow-blue-900 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg' onSubmit={handleSubmit}>
            <h1 className='shadow-md'>Datos del líder</h1>
            <input className='border rounded border-black p-1' type="number" name="doctIdent" placeholder="Cédula No." onChange={handleInputChange} />
            <input className='border rounded border-black p-1' type="tel" name="phoneNumber" placeholder="Teléfono" onChange={handleInputChange} />
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
export default CreateLeader;
