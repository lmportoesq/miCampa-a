import GetHome from '../../components/get_home/GetHome';
import Footer from '../../components/footer/Footer';
import clienteAxios from '../../config/axios';
import { useEffect, useState } from 'react';

function FollowersPage() {
    const [data, setData] = useState([]);
    const idLeader = localStorage.getItem('id');
    const consultarAPI = async () => {
        const consultaSeguidores = await clienteAxios.get(`/api/followers?leader=${idLeader}`)
        const data = consultaSeguidores.data;
        setData(data);
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <div className='text-center mx-2'>
            <GetHome />
            <h1 className='shadow-md'>Listado de seguidores</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Mesa</th>
                        <th>|  Opciones  |</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.docIdent}</td>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.adress}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.votingTable}</td>
                            <td>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-1 m-1" type="submit">Editar</button>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-1 m-1" type="submit">Eliminar</button>
                            </td>
                        </tr>
                    ))};
                </tbody>
            </table>
            <h2 className='text-right'>Total seguidores: {data.length}</h2>
            <Footer />
        </div>
    )
}
export default FollowersPage;
