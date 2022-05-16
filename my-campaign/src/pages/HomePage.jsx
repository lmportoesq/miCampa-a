import logo from '../images/Logo.jpg';
import opcion1 from '../images/candidato3.png';
import opcion2 from '../images/Lideres.png';

function HomePage() {
    return (
        <div className='container w=120px h=120px'>
            <div className='w=120px h=120px'>
                <img src={logo} alt='logo'  />
            </div>
            <div>
                <img src={opcion1} alt='opcion1' />
                <img src={opcion2} alt='opcion2' />
            </div>
        </div>
    )
}
export default HomePage;
