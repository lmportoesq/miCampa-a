import '../home_page_admin/home_page_admin.css';
import { useState, useEffect } from "react"
import clienteAxios from '../../config/axios';
import Footer from '../../components/footer/Footer';
import MenuAdmin from '../../components/menu_admin/MenuAdmin';
import logo from '../../images/logo_campaña.svg';

function HomePageAdmin() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    const id = profile.campaign_id;
    const [data, setData] = useState({});

    const consultarAPI = async () => {
        const response = await clienteAxios.get(`/api/campaigns/${id}`);
        setData(response.data);
        console.log('Estoy en consultarAPI...')
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <>
            <MenuAdmin />
            <div className="container">
                <div className="container__text">
                    <h1 className='title'>{data.candidateName}</h1>
                    <h2 className='subtitle'>{data.campaignType}</h2>
                    <h3 className='h3'>Período: 2023-2027</h3>
                    <p className='paragraph'>{data.campaignSlogan}</p>
                </div>
                <div className="container__image">
                    <img src={logo} alt='logo' className='w-full h-[28rem] mt-10' />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default HomePageAdmin;
