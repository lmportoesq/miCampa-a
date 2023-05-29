function MenuOwner () {
  function handleClickCampañas () {
    window.location.href = '/create-campaign'
  }
  function handleClickRegAdmin () {
    window.location.href = '/create-leader'
  }
  function handleClickLogout () {
    localStorage.removeItem('token')
    window.location.href = '/'
  }
  return (
        <div className="main-nav">
            <div className="main-nav__list">
                <button className="button-nav" type="submit" onClick={handleClickCampañas} >Datos de la campaña</button>
                <button className="button-nav" type="submit" onClick={handleClickRegAdmin}>Registrar administrador</button>
                <button className="button-nav" type="submit">Listar campañas</button>
                <button className="button-nav" type="submit" onClick={handleClickLogout}>Salir</button>
            </div>
        </div>
  )
}
export default MenuOwner
