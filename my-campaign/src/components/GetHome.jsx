function GetHome() {
    function handleClick(){
        window.history.back();
    }
    return (
        <div className="bg-gray-200 text-right mx-auto">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClick} >Regresar</button>
        </div>
    )
}
export default GetHome;
