function Menu() {
    function handleClick(){
        window.location.href = '/create-campaign';
    }
    return (
        <div className="bg-gray-200 text-right mx-auto">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClick} >Datos de la campaña</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Ingresar líderes</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Poblaciones</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Informes</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Salir</button>
        </div>
    )
}
export default Menu;
