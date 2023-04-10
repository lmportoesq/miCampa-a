import Footer from '../../components/footer/Footer';
import GetHome from '../../components/GetHome';
import CreateCampaign from '../../components/CreateCampaign';

function CampaignPage() {
    return (
        <div className='container mx-auto'>
            <GetHome />
            <CreateCampaign />
            <Footer />
        </div>
    )    
}
export default CampaignPage;
