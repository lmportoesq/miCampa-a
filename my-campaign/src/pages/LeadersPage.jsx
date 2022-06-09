import logo from '../images/Logo.jpg';
import lider from '../images/lider.png';

function LeadersPage({ data }) {
    return (
        <div className='border-black rounded shadow-blue-900 p-2 grid grid-cols-1 gap-2 h-[22rem] text-center'>
            <img className='w-[12rem] h-[12rem] mx-auto' src={lider} alt='lider' />
            <div className='text-center'>
                <h1 className='text-2xl text-bold'>{data.firstName} {data.lastName}</h1>
                <h2 className='text-xl'>Tipo de líder: {data.tipo}</h2>
            </div>
        </div>
    )
}
export default LeadersPage;
