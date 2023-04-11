import Footer from '../../components/footer/Footer';
import GetHome from '../../components/get_home/GetHome';
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
