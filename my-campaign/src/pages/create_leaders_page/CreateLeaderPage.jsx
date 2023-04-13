import Footer from '../../components/footer/Footer';
import GetHome from '../../components/get_home/GetHome';

import CreateLeaders from '../../components/create_leaders/CreateLeaders';

function CreateLeader() {
    return (
        <div className='main'>
            <GetHome />
            <CreateLeaders />
            <Footer />
        </div>
    )    
}
export default CreateLeader;
