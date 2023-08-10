import Banner from "../Banner/Banner";
import ClassSection from "../ClassSection/ClassSection";
import Faqs from "../Faqs/Faqs";
import InstructorSection from "../InstructorsSection/InstructorSection";
import Newsletter from "../Newsletter/Newsletter";
import Reviews from "../Reviews/Reviews";
import Sponsors from "../Sponsors/Sponsors";


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <ClassSection></ClassSection>
        <InstructorSection></InstructorSection>
        <Reviews></Reviews>
        <Sponsors></Sponsors>
        <Faqs/>
        <Newsletter/>
        </>
    );
};

export default Home;