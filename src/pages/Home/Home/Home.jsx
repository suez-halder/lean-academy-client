import Banner from "../Banner/Banner";
import ClassSection from "../ClassSection/ClassSection";
import ExtraSection from "../ExrtaSection/ExtraSection";
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
        <ExtraSection></ExtraSection>
        <Newsletter/>
        </>
    );
};

export default Home;