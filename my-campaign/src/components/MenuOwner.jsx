function MenuOwner() {
    function handleClickCampañas(){
        window.location.href = '/create-campaign';
    }
    function handleClickRegAdmin(){
        window.location.href = '/create-leader'
    }
    
    return (
        <div className="bg-gray-200 text-right mx-auto">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickCampañas} >Datos de la campaña</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickRegAdmin}>Registrar administrador</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Listar campañas</button>
        </div>
    )
}
export default MenuOwner;
