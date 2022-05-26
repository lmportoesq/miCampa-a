import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CampaignPage from '../pages/CampaignPage';
import CreateUsers from '../pages/CreateUserPage';
import LoginPage from '../pages/LoginPage';
import LeadersPage from '../pages/LeadersPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/create-campaign' element={<CampaignPage />} />
                <Route path='/create-leader' element={<CreateUsers />} />
                <Route path='/query-leader' element={<LeadersPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
