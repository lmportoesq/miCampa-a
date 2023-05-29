import Footer from '../../components/footer/Footer'
import MenuUsers from '../../components/MenuUsers'
import logo from '../../images/Logo.jpg'

function HomePageUser () {
  return (
        <>
            <MenuUsers />
            <div className='container h-[24rem] mx-auto'>
                <div className='w-[32rem] mx-auto my-auto'>
                    <img src={logo} alt='logo' className='w-full h-[28rem] mt-10' />
                </div>
            </div>
            <Footer />
        </>
  )
}
export default HomePageUser
