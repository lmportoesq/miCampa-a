function MenuUsers() {
    function handleClickPersonal(){
        window.location.href = '/create-leader';
    }
    function handleClickFollower(){
        window.location.href = '/create-follower'
    }
    function handleClickListFollowers(){
        window.location.href = '/query-followers'
    }
    function handleClickLogout(){
        localStorage.removeItem('token');
        window.location.href = '/';
    }
   
    return (
        <div className="bg-gray-200 text-right mx-auto">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickPersonal} >Datos personales</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickFollower}>Ingresar seguidores</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickListFollowers}>Listar seguidores</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Listar rechazados</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickLogout}>Salir</button>
        </div>
    )
}
export default MenuUsers;
