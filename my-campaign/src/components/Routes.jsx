import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CreateCampaign from './CreateCampaign';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/create-campaign' element={<CreateCampaign />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
