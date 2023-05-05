import './login.css'
import { useState } from "react";
import Swal from "sweetalert2";
import logo from '../../images/Logo.jpg';
import fondo from '../../images/fondo4.jpg';

function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleValidate = () => {
        const { email, password } = data;
        const valido = !email.length || !password.length;
        return valido;
    };

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    const API_URL = 'http://localhost:8080'
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/auth/local/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const { token, profile, id } = await response.json();
            if (response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salió mal',
                    text: 'Usuario o contraseña no válida...',
                });
                return;
            }

            if (response.status === 200) {
                localStorage.setItem('token', token);
                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('id',id);
                //localStorage.setItem('id', id);

                Swal.fire(
                    'Login exitoso ',
                    'Usuario autenticado corréctamente...!',
                    'success',
                );
                    
                if (profile.role === 'owner') {
                    window.location.href = '/home-owner';
                } else if (profile.role === 'admin') {
                    window.location.href = '/home-admin';
                } else {
                    window.location.href = '/home-user';
                }
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className='main'>
            <img src={fondo} alt='fondo' className="main__image" />
            <div className="card">
                <div className="card__header">
                    <img src={logo} alt='logo' className="logo" />
                </div>
                <div className="card__body">
                    <h2>Login</h2>
                    <hr />
                    <form className="form-login" onSubmit={handleSubmit}>
                        <input className='input__text' name="email" type="email" placeholder="Email" onChange={handleChange} />
                        <input className='input__text' name="password" type="password" placeholder="Password" onChange={handleChange} />
                        <button className="button__send" type="submit" disabled={handleValidate()}>Enviar</button>
                    </form>
                </div>
                <div className='card__footer'>
                    <h3>Porto Soluciones</h3>
                </div>
            </div>
        </main>
    )
}
export default Login;
