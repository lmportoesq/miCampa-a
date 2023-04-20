import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageOwner from '../pages/home_page_owner/HomePageOwner';
import HomePageAdmin from '../pages/home_page_admin/HomePageAdmin';
import HomePageUser from '../pages/home_page_user/HomePageUser';
import CampaignPage from '../pages/campaign_page/CampaignPage';
import CreateUsersPage from '../pages/create_users_page/CreateUserPage';
import CreateFollowerPage from '../pages/create_followers_page/CreateFollowersPage';
import LoginPage from '../pages/login_page/LoginPage';
import LeadersList from '../components/leaders_list/LeadersList';
import FollowersPage from '../pages/followers_page/FollowersPage';
import RejectedPage from  '../pages/rejected_page/RejectedPage';
import ActivePage from  '../pages/active_page/ActivePage';
import WelcomePage  from '../pages/welcome_page/WelcomePage';

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
                <Route path='/create-follower' element={<CreateFollowerPage />} />
                <Route path='/query-leader' element={<LeadersList />} />
                <Route path='/query-followers' element={<FollowersPage />} />
                <Route path='/query-rejected' element={<RejectedPage />} />
                <Route path='/active/:hash' element={<ActivePage />} />
                <Route path='/welcome-page' element={<WelcomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
