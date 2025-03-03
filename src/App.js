import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import BookingPage from "./pages/BookingPage";
import ConfirmPage from "./pages/ConfirmPage";
import ExaminationService from "./component/examinationService/ExaminationService";
import ServicePage from "./pages/ServicePage";

function App() {
    return (
        <div className="min-h-screen bg-[#FFFFFF]">
            <Routes>
                <Route
                    path="/"
                    element={<HomePage/>}
                />
                <Route
                    path="/booking"
                    element={<BookingPage/>}
                />
                <Route
                    path="/confirm"
                    element={<ConfirmPage/>}
                />
                <Route
                    path="/service"
                    element={<ServicePage/>}
                />
            </Routes>
        </div>
    );
}

export default App;