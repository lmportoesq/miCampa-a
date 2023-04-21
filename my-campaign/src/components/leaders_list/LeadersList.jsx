import LeadersPage from '../../pages/leaders_page/LeadersPage';
import clienteAxios from '../../config/axios';
import { useEffect, useState } from 'react';
import GetHome from '../../components/get_home/GetHome';
import Footer from '../../components/footer/Footer';

function Leaders() {
    const [data, setData] = useState([]);
    const profile=JSON.parse(localStorage.getItem('profile'));
    const id=profile.campaign_id; 

    const consultarAPI = async () => {
        const consultaClientes = await clienteAxios.get(`/api/users?role=leader&campaign=${id}`)
        const data = consultaClientes.data;
        setData(data);
    }
    
    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <>
            <GetHome />
            <div className='main-list'>
                <h1 className="title">Listado de líderes</h1>
                <hr />
                <div className="main-list__container">
                    {data.map(item=>(
                    <LeadersPage key={item._id} data={item} />
                    ))};
                </div>
                <h2 className='main-list__footer'>Total líderes: {data.length}</h2>
            </div>
            <Footer />
        </>
    )
}
export default Leaders;
