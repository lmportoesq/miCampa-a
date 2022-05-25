import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CampaignPage from '../pages/CampaignPage';
import CreateUsers from '../pages/CreateUserPage';
import LoginPage from '../pages/LoginPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/create-campaign' element={<CampaignPage />} />
                <Route path='/create-leader' element={<CreateUsers />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
