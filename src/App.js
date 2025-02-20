import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

function App() {
    return (
        <div className="min-h-screen bg-[#FFFFFF]">
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                />
            </Routes >
        </div >
    );
};

export default App;