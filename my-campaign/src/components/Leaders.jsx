import GetHome from '../components/get_home/GetHome';
import Footer from '../components/footer/Footer';

import LeadersPage from '../pages/leaders_page/LeadersPage';
import clienteAxios from '../config/axios';
import { useEffect, useState } from 'react';

function Leaders() {
    const [data, setData] = useState([]);

    const consultarAPI = async ()=>{
        const consultaClientes = await clienteAxios.get('/api/users')
        const data = consultaClientes.data;
        setData(data);
    }
    
    useEffect(()=>{
        consultarAPI();
    },[]);

    return (
        <>
            <GetHome />
            <h1 className='shadow-md text-center'>Listado de líderes</h1>
            <div className='grid grid-cols-4 gap-2 border-black' >
                {data.map(item => (
                    <LeadersPage
                        key={item._id}
                        data={item}
                    />
                ))};
            </div>
            <h3 className='text-right mr-2'>Total líderes: {data.length}</h3>
            <Footer />
        </>
    )
}
export default Leaders;
