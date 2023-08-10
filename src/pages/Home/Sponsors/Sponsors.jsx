import Heading from "../../../components/Heading/Heading";
import sponsor from "../../../assets/Sponsor/sponsors.png";


const Sponsors = () => {
    return (
        <div>
            <Heading
                title={'Lean Academy Sponsors'}
                subtitle="Meet the Esteemed Partners Supporting Lean Academy's Vision."
                center={true}
            >
            </Heading>

            <img src={sponsor} alt="sponsors" className="w-full md:w-2/3 mx-auto opacity-90 rounded-lg mt-8" />

        </div>
    );
};

export default Sponsors;