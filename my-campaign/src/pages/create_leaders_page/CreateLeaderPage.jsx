import Footer from '../../components/footer/Footer';
import GetHome from '../../components/GetHome';
import CreateLeaderPage from '../../components/CreateLeaders';

function CreateLeader() {
    return (
        <div className='container mx-auto'>
            <GetHome />
            <CreateLeaderPage />
            <Footer />
        </div>
    )    
}
export default CreateLeader;
