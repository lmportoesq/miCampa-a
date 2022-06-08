import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageOwner from '../pages/HomePageOwner';
import HomePageAdmin from '../pages/HomePageAdmin';
import HomePageUser from '../pages/HomePageUser';
import CampaignPage from '../pages/CampaignPage';
import CreateUsersPage from '../pages/CreateUserPage';
import CreateLeaderPage from '../pages/CreateLeaderPage';
import CreateFollowerPage from '../pages/CreateFollowersPage';
import LoginPage from '../pages/LoginPage';
import Leaders from '../components/Leaders';
import FollowersPage from '../pages/FollowersPage';
import RejectedPage from  '../pages/RejectedPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/home-owner' element={<HomePageOwner />} />
                <Route path='/home-admin' element={<HomePageAdmin />} />
                <Route path='/home-user' element={<HomePageUser />} />
                <Route path='/create-campaign' element={<CampaignPage />} />
                <Route path='/create-user' element={<CreateUsersPage />} />
                <Route path='/create-leader' element={<CreateLeaderPage />} />
                <Route path='/create-follower' element={<CreateFollowerPage />} />
                <Route path='/query-leader' element={<Leaders />} />
                <Route path='/query-followers' element={<FollowersPage />} />
                <Route path='/query-rejected' element={<RejectedPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
