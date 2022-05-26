import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../images/Logo.jpg';

function LeadersPage({data}) {
    return (
        <div className='mx-2'>
            <div className='rounded shadow-lg p-2 grid grid-col-2 bg-blue-100'>
                <div>
                    <img src={logo} alt='logo' className='w-full'  />
                </div>
                <div>
                    <h1>{data.nombre}</h1>
                    <h2>Cédula: {data.cedula}</h2>
                    <h2>Direción: {data.direccion}</h2>
                    <h2>Teléfono: {data.telefono}</h2>
                    <h2>Tipo de líder: {data.tipo}</h2>
                </div>
            </div>
        </div>
    )
}
export default LeadersPage;
