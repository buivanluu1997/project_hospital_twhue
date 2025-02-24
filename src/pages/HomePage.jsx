import {
    Header
} from "../component/Header";
import { Clinic } from '../component/sections/clinic';

export const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Clinic />
        </div>
    );
};
