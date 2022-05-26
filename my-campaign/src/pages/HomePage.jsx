import Footer from '../components/Footer';
import Menu from '../components/Menu';
import logo from '../images/Logo.jpg';

function HomePage() {
    return (
        <>
            <Menu />
            <div className='container h-[24rem] mx-auto'>
                <div className='w-[32rem] mx-auto my-auto'>
                    <img src={logo} alt='logo' className='w-full h-[28rem] mt-10' />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default HomePage;
