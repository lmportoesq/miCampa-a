import logo from '../../../public/images/logo.jpg';

function Header() {
    return (
        <div>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <h1>Nombre del candidato</h1>
                <h2>Período: 2022-2026</h2>
                <p>Solgan de la campaña</p>
            </div>
        </div>
    )
};

export default Header;
