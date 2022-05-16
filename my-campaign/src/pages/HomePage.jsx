import logo from '../images/Logo.jpg';

function HomePage() {
    return (
        <div className='container mx-auto w-3/4 bg-blue-400'>
            <div className='w-64 h-96 mx-auto mt-10'>
                <img src={logo} alt='logo'  />
            </div>
        </div>
    )
}
export default HomePage;
