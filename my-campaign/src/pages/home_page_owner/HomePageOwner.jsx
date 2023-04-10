import Footer from '../../components/Footer';
import MenuOwner from '../../components/MenuOwner';
import logo from '../../images/logo_campaña.svg';

function HomePageOwner() {
    console.log('EStoy en la home de OWNER')
    return (
        <>
            <MenuOwner />
            <div className='container h-[24rem] mx-auto'>
                <div className='w-[32rem] mx-auto my-auto'>
                    <img src={logo} alt='logo' className='w-full h-[28rem] mt-10' />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default HomePageOwner;
