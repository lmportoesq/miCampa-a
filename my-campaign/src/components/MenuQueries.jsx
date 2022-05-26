function MenuQueries() {
    function handleClickLeaders(){
        window.location.href = '/query-leaders';
    }
    function handleClickFollowers(){
        window.location.href = '/query-followers'
    }
    function handleClickReturn(){
        window.location.href = '/'
    }
    return (
        <div className="bg-gray-200 text-right mx-auto">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickLeaders}>Líderes</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickFollowers}>Seguidores</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickReturn}>Regresar</button>
        </div>
    )
}
export default MenuQueries;
