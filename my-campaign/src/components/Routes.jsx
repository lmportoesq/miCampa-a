import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CampaignPage from '../pages/CampaignPage';
import CreateUsers from '../pages/CreateUserPage';
import LoginPage from '../pages/LoginPage';
import Leaders from '../components/Leaders';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/create-campaign' element={<CampaignPage />} />
                <Route path='/create-leader' element={<CreateUsers />} />
                <Route path='/query-leader' element={<Leaders />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
