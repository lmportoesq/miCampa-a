import './welcome_page.css'
import React from 'react'
import logo from '../../images/Logo.jpg'
import fondo from '../../images/fondo4.jpg'
import { useNavigate } from 'react-router-dom'

function WelcomePage () {
  const navigate = useNavigate()

  function handleClick () {
    navigate('/create-leader')
  }

  return (
        <>
            <main className='main'>
                <img src={fondo} alt='fondo' className="main__image" />
                <div className="card">
                    <div className="card__header">
                        <img src={logo} alt='logo' className="logo" />
                    </div>
                    <div className="card__body">
                        <h2 className='subtitle'>Bienvenido...!</h2>
                        <hr />
                        <form className="form-welcome" onSubmit={handleClick}>
                            <p className='paragraph'>
                                Su cuenta de usuario ha sido activada con éxito, sólo resta que ingreses tu información personal y asignes
                                una contraseña de ingreso.
                            </p>
                            <button className="button__send" type="submit">Continuar</button>
                        </form>
                    </div>
                    <div className='card__footer'>
                        <h3>Porto Soluciones</h3>
                    </div>
                </div>
            </main>
        </>
  )
}
export default WelcomePage
