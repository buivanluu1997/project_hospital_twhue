import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./component/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Route, Routes} from "react-router-dom";
import MedicalBooking from "./component/MedicalBooking";

function App() {
    return (
        <>
            <HeaderComponent/>
            <Routes>
                <Route path="/booking" element={<MedicalBooking/>}/>
            </Routes>
        </>
    );
}

export default App;
