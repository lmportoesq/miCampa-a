import Footer from '../../components/footer/Footer';
import GetHome from '../../components/GetHome';
import CreateUsers from '../../components/CreateUsers';

function CreateUserPage() {
    return (
        <div className='container mx-auto'>
            <GetHome />
            <CreateUsers />
            <Footer />
        </div>
    )    
}
export default CreateUserPage;
