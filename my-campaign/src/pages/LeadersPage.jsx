import logo from '../images/Logo.jpg';

function LeadersPage({ data }) {
    return (
        <div className='rounded p-2 grid grid-cols-1 gap-2 w-[28rem] h-[28rem] text-center'>
            <img className='w-[12rem] h-[12rem] mx-auto' src={logo} alt='logo' />
            <div className='text-center'>
                <h1 className='text-2xl text-bold'>{data.nombre}</h1>
                <h2 className='text-xl'>Cédula: {data.cedula}</h2>
                <h2 className='text-xl'>Direción: {data.direccion}</h2>
                <h2 className='text-xl'>Teléfono: {data.telefono}</h2>
                <h2 className='text-xl'>Tipo de líder: {data.tipo}</h2>
            </div>
        </div>
    )
}
export default LeadersPage;
