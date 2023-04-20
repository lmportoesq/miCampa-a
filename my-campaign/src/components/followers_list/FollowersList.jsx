import FollowersPage from '../../pages/followers_page/FollowersPage';
import clienteAxios from '../../config/axios';
import { useEffect, useState } from 'react';
import GetHome from '../get_home/GetHome';
import Footer from '../footer/Footer';

function FollowerList() {
    const [data, setData] = useState([]);
    const idLeader = localStorage.getItem('id');
    const profile = JSON.parse(localStorage.getItem('profile'));
    let consultaSeguidores = {};

    const consultarAPI = async () => {
        if (profile.role === 'leader') {
            consultaSeguidores = await clienteAxios.get(`/api/followers?leader=${idLeader}`);
        } else {
            consultaSeguidores = await clienteAxios.get('/api/followers');
        }
        const data = consultaSeguidores.data;
        setData(data);
    }
    
    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <>
            <GetHome />
            <div className='main-list'>
                <h1 className="title">Listado de seguidores</h1>
                <hr />
                <div className="main-list__container">
                    {data.map(item => (
                        <FollowersPage key={item._id} data={item} />
                    ))};
                </div>
                <h2 className='subtitle'>Total seguidores: {data.length}</h2>
            </div>
            <Footer />
        </>
    )
}
export default FollowerList;
