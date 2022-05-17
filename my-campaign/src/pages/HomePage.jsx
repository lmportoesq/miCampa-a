import Footer from '../components/Footer';
import Menu from '../components/Menu';
import logo from '../images/Logo.jpg';

function HomePage() {
    return (
        <div className='container mx-auto w-3/4 bg-blue-400 mt-10'>
            <Menu />
            <div className='w-[32rem] h-[30rem] mx-auto my-auto'>
                <img src={logo} alt='logo' className='w-full h-[28rem] mt-10'  />
            </div>
            <Footer />
        </div>
    )    
}
export default HomePage;
