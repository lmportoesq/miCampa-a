import logo from '../images/Logo.jpg';
import opcion1 from '../images/candidato3.png';
import opcion2 from '../images/Lideres.png';
import opcion3 from '../images/poblaciones.jpg';
import opcion4 from '../images/reportes.png';
import opcion5 from '../images/configuracion.jpg';
import opcion6 from '../images/salir.jpg';

function HomePage() {
    return (
        <div className='container mx-auto w-3/4'>
            <div className='w-64 h-96 mx-auto mt-10'>
                <img src={logo} alt='logo'  />
            </div>
            <div className='w-3/4 h-26 mx-auto flex flex-auto p-2 border-2 border-rose-600 rounded'>
                <img src={opcion1} alt='opcion1' className='w-24 h-24 m-3 rounded-full'/>
                <img src={opcion2} alt='opcion2' className='w-24 h-24 m-3 rounded-full'/>
                <img src={opcion3} alt='opcion2' className='w-24 h-24 m-3 rounded-full'/>
                <img src={opcion4} alt='opcion2' className='w-24 h-24 m-3 rounded-full'/>
                <img src={opcion5} alt='opcion2' className='w-24 h-24 m-3 rounded-full'/>
                <img src={opcion6} alt='opcion2' className='w-24 h-24 m-3 rounded-full'/>
            </div>
        </div>
    )
}
export default HomePage;
