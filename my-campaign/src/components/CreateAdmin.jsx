function CreateAdmin() {
    return (
        <div className='container mx-auto w-3/4 mt-5'>
            <form className='shadow-lg shadow-blue-900 mt-5 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg'>
                <h1 className='shadow-md '>Registro de administradores</h1>
                <input className='border rounded border-black p-1' type="text" placeholder="Primer nombre"/>
                <input className='border rounded border-black p-1' type="text" placeholder="Segundo nombre"/>
                <input className='border rounded border-black p-1' type="email" placeholder="Email"/>

                <label htmlFor="type">Campaña</label>
                <select name="type" className='border rounded border-black p-1'>
                    <option value="alcaldia">Campaña 1</option>
                    <option value="gobernacion">Campaña 2</option>
                    <option value="camara">Campaña 3</option>
                    <option value="senado">Campaña 4</option>
                </select>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default CreateAdmin;