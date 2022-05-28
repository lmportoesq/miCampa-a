import { useState } from "react";

function CreateUser() {
    const [data, setData] = useState({
        name:'',
        lastname:'',
        email:'',
    });
   
    const handleValidate = () => {
        const { name, lastname, email } = data;
        const valido = !name.length || !lastname.length || !email.length;
        console.log('Estado de valido es...',valido)
        return valido;
    };

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log('Alguien escribe...', data);
    }
    
    return (
        <div className='container mx-auto w-3/4 mt-5'>
            <form className='shadow-lg shadow-blue-900 mt-5 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg'>
                <h1 className='shadow-md '>Registro de líderes</h1>
                <input className='border rounded border-black p-1' name="name" type="text" placeholder="Primer nombre" onChange={handleChange}/>
                <input className='border rounded border-black p-1' name="lastname" type="text" placeholder="Segundo nombre" onChange={handleChange}/>
                <input className='border rounded border-black p-1' name="email" type="email" placeholder="Email" onChange={handleChange}/>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </div>
    )
}
export default CreateUser;
