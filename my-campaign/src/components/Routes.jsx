import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageOwner from '../pages/HomePageOwner';
import HomePageAdmin from '../pages/HomePageAdmin';
import HomePageUser from '../pages/HomePageUser';
import CampaignPage from '../pages/CampaignPage';
import CreateUsers from '../pages/CreateUserPage';
import LoginPage from '../pages/LoginPage';
import Leaders from '../components/Leaders';
import FollowersPage from '../pages/FollowersPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/home-owner' element={<HomePageOwner />} />
                <Route path='/home-admin' element={<HomePageAdmin />} />
                <Route path='/home-user' element={<HomePageUser />} />
                <Route path='/create-campaign' element={<CampaignPage />} />
                <Route path='/create-leader' element={<CreateUsers />} />
                <Route path='/query-leader' element={<Leaders />} />
                <Route path='/query-followers' element={<FollowersPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
