import Menu from '../components/Menu';
import logo from '../images/Logo.jpg';

function HomePage() {
    return (
        <div className='container mx-auto w-3/4 h-[38rem] bg-blue-400'>
            <Menu />
            <div className='w-64 h-96 mx-auto my-auto mt-10'>
                <img src={logo} alt='logo'  />
            </div>
        </div>
    )
}
export default HomePage;
