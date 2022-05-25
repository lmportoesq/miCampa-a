function CreateCampaign() {
    return (
        <div className='container mx-auto w-3/4 mt-10'>
            <form className='shadow-lg shadow-blue-900 mt-5 border-red-300 w-[32rem] h-[30rem] mx-auto my-auto grid grid-col-1 gap-3 text-center p-5 rounded-lg'>
                <h1 className='shadow-md font-bold text-lg'>Datos de la campaña</h1>
                <input className='border rounded border-black p-1 h-12' type="text" placeholder="Nombre del candidato"/>
                <input className='border rounded border-black p-1 h-12' type="text" placeholder="Slogan de la campaña"/>
                <input className='border rounded border-black p-1 h-12' type="text" placeholder="Dirección del comando"/>
                <input className='border rounded border-black p-1 h-12' type="text" placeholder="Teléfono del comando"/>
                <label htmlFor="type">Tipo de campaña</label>
                <select name="type" className='border rounded border-black p-1'>
                    <option value="alcaldia">Alcaldía</option>
                    <option value="gobernacion">Gobernación</option>
                    <option value="camara">Cámara</option>
                    <option value="senado">Senado</option>
                </select>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default CreateCampaign;
