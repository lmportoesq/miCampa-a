import './leader_page.css';
import lider from '../../images/lider.png';

function LeadersPage({ data }) {
    return (
        <div className='main--big'>
            <div className="card__leader">
                <img className='card__leader--image' src={lider} alt='lider' />
                <h3 className='h3'>{data.firstName} {data.lastName}</h3>
                <p className='label'>Tipo de líder: {data.tipo}</p>
            </div>
        </div>
    )
}
export default LeadersPage;
