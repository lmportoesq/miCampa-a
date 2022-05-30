function Menu() {
    function handleClickPersonal(){
        window.location.href = '/create-campaign';
    }
    function handleClickRegPlan(){
        window.location.href = '/create-leader'
    }
    function handleClickListPlan(){
        window.location.href = '/query-leader'
    }
   
    return (
        <div className="bg-gray-200 text-right mx-auto">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickPersonal} >Datos personales</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickRegPlan}>Ingresar planillas</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Listar rechazados</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickListPlan}>Listar planillas</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Salir</button>
        </div>
    )
}
export default Menu;
