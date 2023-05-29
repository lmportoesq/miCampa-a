import React from 'react'
function MenuUsers () {
  function handleClickPersonal () {
    window.location.href = '/create-leader'
  }
  function handleClickFollower () {
    window.location.href = '/create-follower'
  }
  function handleClickListFollowers () {
    window.location.href = '/query-followers'
  }

  function handleClickListRejected () {
    window.location.href = '/query-rejected'
  }

  function handleClickLogout () {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
        <div className="main-nav">
            <div className="main-nav__list">
                <button className="button-nav" type="submit" onClick={handleClickPersonal} >Datos personales</button>
                <button className="button-nav" type="submit" onClick={handleClickFollower}>Ingresar seguidores</button>
                <button className="button-nav" type="submit" onClick={handleClickListFollowers}>Listar seguidores</button>
                <button className="button-nav" type="submit" onClick={handleClickListRejected}>Listar rechazados</button>
                <button className="button-nav" type="submit" onClick={handleClickLogout}>Salir</button>
            </div>
        </div>
  )
}
export default MenuUsers
