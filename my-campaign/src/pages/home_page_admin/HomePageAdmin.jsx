import Footer from '../../components/footer/Footer';
import MenuAdmin from '../../components/menu_admin/MenuAdmin';
import logo from '../../images/logo_campaña.svg';
import '../home_page_admin/home_page_admin.css';

function HomePageAdmin() {
    return (
        <>
            <MenuAdmin />
            <div className="container">
                <div className="container__text">
                    <h1 className='title'>Datos de la campaña</h1>
                    <h2 className='subtitle'>Período: 20223-2027</h2>
                    <p className='paragraph'>Juntos construiremos un mejor futuro para todos...!</p>
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
