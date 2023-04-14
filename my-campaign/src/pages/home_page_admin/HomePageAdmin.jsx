import Footer from '../../components/footer/Footer';
import MenuAdmin from '../../components/menu_admin/MenuAdmin';
import logo from '../../images/logo_campaña.svg';
import '../home_page_admin/home_page_admin.css';

function HomePageAdmin() {
   const profile=JSON.parse(localStorage.getItem('profile'));
    return (
        <>
            <MenuAdmin />
            <div className="container">
                <div className="container__text">
                    <h1 className='title'>{profile.candidateName}</h1>
                    <h2 className='subtitle'>{profile.campaignType}</h2>
                    <h3 className='h3'>Período: 2023-2027</h3>
                    <p className='paragraph'>{profile.campaignSlogan}</p>
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
