import React from 'react';
import logo from '../images/Logo.jpg';
//import parkingTitle from '../figures/parking_title.svg';
//import './Welcome.styles.scss';

function Welcome() {
    const handleClick = () => {
        window.location.href = '/create-leader';
    };

    return (
        <div>
            <div className='w-[32rem] mx-auto my-auto'>
                <img src={logo} alt='logo' className='w-full h-[28rem] mt-10' />
            </div>
            <div>
                <div>
                    <h1>
                        Bienvenido a My Campaign...!
                    </h1>
                    <p>
                        Su cuenta de usuario se ha creada con éxito, sólo resta completar el resto de su información personal y asignar
                        su contraseña de ingreso. Por favor de clic en el botón "Aceptar" para continuar.
                    </p>
                </div>
                <div>
                    <button type="button" onClick={handleClick}>Aceptar</button>
                </div>
            </div>
        </div >
    );
}
export default Welcome;
