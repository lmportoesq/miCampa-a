import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
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
                <Route path='/home' element={<HomePage />} />
                <Route path='/create-campaign' element={<CampaignPage />} />
                <Route path='/create-leader' element={<CreateUsers />} />
                <Route path='/query-leader' element={<Leaders />} />
                <Route path='/query-followers' element={<FollowersPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
