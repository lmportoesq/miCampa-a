import GetHome from '../../components/get_home/GetHome';
import Footer from '../../components/footer/Footer';
import clienteAxios from '../../config/axios';
import { useEffect, useState } from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css'

function RejectedPage() {
    const [data, setData] = useState([]);
    const idLeader = localStorage.getItem('id');
    const consultarAPI = async () => {
        const consultaRechazados = await clienteAxios.get(`/api/rejecteds?leader=${idLeader}`)
        const data = consultaRechazados.data;
        setData(data);
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <div className='text-center mx-2'>
            <GetHome />
            <h1 className='shadow-md'>Listado de rechazados</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.docIdent}</td>
                            <td>{item.firstName} {item.lastName}</td>
                        </tr>
                    ))};
                </tbody>
            </table>
            <h2 className='text-right'>Total rechazados: {data.length}</h2>
            <Footer />
        </div>
    )
}
export default RejectedPage;
