import { useState } from "react";
import Swal from "sweetalert2";

function CreateCampaign() {
    const [data, setData] = useState({
        name:'',
        slogan:'',
        adress:'',
        phone:'',
        type:'',
    });

    const handleValidate = () => {
        const { name, slogan, adress, phone, type} = data;
        const valido = !name.length || !slogan.length || !adress.length || !phone.length || !type.length;
        return valido;
    };

    const handleInputChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
    };
    //const API_URL=process.env.REACT_APP_URL;
    const API_URL='http://localhost:8080'
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${API_URL}/api/create-campaign`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        const { token, profile, id } = await response.json();
        console.log('El token es ...',token)
        console.log('El role es ...',profile.role)

        localStorage.setItem('token', token);
        //dispatch(saveAdminData({ profile, id }));
        if (response.status === 401) {
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                text: 'Usuario o contraseña no válida...',
            });
        } else {
            Swal.fire(
                'Login exitoso ',
                'Usuario autenticado corréctamente...!',
                'success',
            );
            window.location.href = '/home';
            //profile.role === 'admin' ? navigate('/AdminPage') : navigate('/Search');
        }
        // setShowForm(false);
    } catch (error) {
        console.log(error);
    }
};


    return (
        <div className='container mx-auto mt-5'>
            <form className='shadow-lg shadow-blue-900 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg' onSubmit={handleSubmit}>
                <h1 className='shadow-md'>Datos de la campaña</h1>
                <input className='border rounded border-black p-1' type="text" name="name" placeholder="Nombre del candidato"  onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="slogan" placeholder="Slogan de la campaña"  onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="adress" placeholder="Dirección del comando" onChange={handleInputChange} />
                <input className='border rounded border-black p-1' type="text" name="phone" placeholder="Teléfono del comando"  onChange={handleInputChange} />
                <label htmlFor="type">Tipo de campaña</label>
                <select name="type" className='border rounded border-black p-1'  onChange={handleInputChange}>
                    <option value="alcaldia">Alcaldía</option>
                    <option value="gobernacion">Gobernación</option>
                    <option value="camara">Cámara</option>
                    <option value="senado">Senado</option>
                </select>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </div>
    )
}
export default CreateCampaign;
