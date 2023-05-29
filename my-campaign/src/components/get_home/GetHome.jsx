
function GetHome () {
  function handleClick () {
    window.history.back()
  }
  return (
        <div className="main-nav">
            <button className="button-nav" type="submit" onClick={handleClick} >Regresar</button>
        </div>
  )
}
export default GetHome
