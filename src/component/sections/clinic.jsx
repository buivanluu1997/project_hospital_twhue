import backgroundTW from '../../assets/images/bg-tw-01.jpg';
import { CardClinic } from './card-clinic';
import { TitleHeader } from './title-header';
import { SearchBar } from '../SearchBar';
import { PragraphClinic } from './pragraph-clinic';
import { CustomerAmenities } from './CustomerAmenities';
import { MedicalFacilities } from './MedicalFacilies';
import { Specialties } from './Specialties';
import { Facilities } from './Facilities';
import { News } from './News';
import { FeedbackForm } from './FeedbackForm';
import { Footer } from '../Footer';

export const Clinic = () => {
    return (
        <div className="relative w-full bg-image-banner-tw">
            {/* Background Image */}
            <div className="w-full h-screen max-h-[480px] relative overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={backgroundTW}
                    alt="Background"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[rgba(0,53,83,0.3)] bg-opacity-30"></div>

                {/* Content Wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6 px-4">
                    <TitleHeader />
                    <SearchBar />
                    <PragraphClinic />
                </div>
            </div>

            {/* Card Clinic Section */}
            <div className="relative w-full -mt-16 z-10">
                <CardClinic />
            </div>
            <MedicalFacilities />
            <CustomerAmenities />
            <Specialties />
            <Facilities />
            <News />
            <FeedbackForm />
            <Footer />
        </div>
    );
};
