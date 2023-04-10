import Footer from '../../components/Footer';
import GetHome from '../../components/GetHome';
import CreateFollowerPage from '../../components/CreateFollowers';

function CreateFollower() {
    return (
        <div className='container mx-auto'>
            <GetHome />
            <CreateFollowerPage />
            <Footer />
        </div>
    )    
}
export default CreateFollower;
