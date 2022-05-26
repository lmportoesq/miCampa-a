import Footer from '../components/Footer';
import Menu from '../components/Menu';
import logo from '../images/Logo.jpg';

function HomePage() {
    return (
        <>
            <Menu />
            <div className='container w-3/4 h-[24rem] mx-auto'>
                <div className='w-[32rem] h-[24rem] mx-auto my-auto'>
                    <img src={logo} alt='logo' className='w-full h-[24rem] mt-10' />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default HomePage;
