import { useState } from "react";

function CreateCampaign() {
    const [data, setData] = useState({
        name:'',
        slogan:'',
        adress:'',
        phone:'',
        type:'',
    });
    console.log('Contenido de data',data)
    const handleValidate = () => {
        const { name, slogan, adress, phone} = data;
        const valido = !name.length || !slogan.length || !adress.length || !phone.length;
        console.log('Estado de valido es...',valido)
        return valido;
    };

    const handleInputChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='container mx-auto w-3/4 mt-10'>
            <form className='shadow-lg shadow-blue-900 mt-5 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg'>
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
