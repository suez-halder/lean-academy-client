import Banner from "../Banner/Banner";
import ClassSection from "../ClassSection/ClassSection";
import Faqs from "../Faqs/Faqs";
import InstructorSection from "../InstructorsSection/InstructorSection";
import Newsletter from "../Newsletter/Newsletter";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <ClassSection></ClassSection>
        <InstructorSection></InstructorSection>
        <Reviews></Reviews>
        <Faqs/>
        <Newsletter/>
        </>
    );
};

export default Home;