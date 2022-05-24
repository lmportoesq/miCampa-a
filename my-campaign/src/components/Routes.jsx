import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CampaignPage from '../pages/CampaignPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/create-campaign' element={<CampaignPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
