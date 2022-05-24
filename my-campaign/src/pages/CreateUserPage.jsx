import Footer from '../components/Footer';
import GetHome from '../components/GetHome';
import CreateUsers from '../components/CreateAdmin';

function CreateUserPage() {
    return (
        <div className='container mx-auto w-3/4 mt-5'>
            <GetHome />
            <CreateUsers />
            <Footer />
        </div>
    )    
}
export default CreateUserPage;
