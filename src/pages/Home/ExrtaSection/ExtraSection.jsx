import Lottie from "lottie-react";
import animation from "../../../assets/animation.json";
import Heading from "../../../components/Heading/Heading";
import { Flip } from "react-awesome-reveal";



const ExtraSection = () => {
    return (
        <div>
            <Heading
                title={'Frequently Asked Questions'}
                subtitle='Clarify all your questions. Click on each question and get your answer. You are welcome to contact us directly.'
                center={true}
            >

            </Heading>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4 ">
                {/* animation section */}
                <div className="w-2/3 md:w-1/2 mx-auto text-center ">
                    <Lottie animationData={animation} />
                </div>

                {/* faq section */}
               
                    <div className="w-3/4 md:w-1/3 mx-auto">
                        <Flip cascade>
                            <div className="collapse bg-base-200 mb-4">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-green-500 text-white [input:checked~&]:bg-green-900 [input:checked~&]:text-white">
                                    What is the purpose of the Low-intensity Cardio Program?
                                </div>
                                <div className="collapse-content bg-green-500 text-white [input:checked~&]:bg-bg-green-500 [input:checked~&]:text-white">
                                    <p>The Low-intensity Cardio Program aims to provide a moderate level of aerobic exercise to improve cardiovascular health and endurance without placing excessive stress on the body.</p>
                                </div>
                            </div>
                            <div className="collapse bg-base-200 mb-4">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-green-500 text-white [input:checked~&]:bg-green-900 [input:checked~&]:text-white">
                                    What are the benefits of High-intensity Interval Training (HIIT)?
                                </div>
                                <div className="collapse-content bg-green-500 text-white [input:checked~&]:bg-bg-green-500 [input:checked~&]:text-white">
                                    <p>High-intensity Interval Training is a form of exercise that alternates short bursts of intense activity with periods of rest. It can help improve cardiovascular fitness, burn calories, and boost metabolism.</p>
                                </div>
                            </div>
                            <div className="collapse bg-base-200 mb-4">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-green-500 text-white [input:checked~&]:bg-green-900 [input:checked~&]:text-white">
                                    What is the focus of the Strength Training Program?
                                </div>
                                <div className="collapse-content bg-green-500 text-white [input:checked~&]:bg-bg-green-500 [input:checked~&]:text-white">
                                    <p>The Strength Training Program emphasizes exercises and techniques that target muscle strength and development. It aims to increase overall muscle mass, improve bone density, and enhance physical performance.</p>
                                </div>
                            </div>
                            <div className="collapse bg-base-200 mb-4">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-green-500 text-white [input:checked~&]:bg-green-900 [input:checked~&]:text-white">
                                    What is Circuit Training Program?
                                </div>
                                <div className="collapse-content bg-green-500 text-white [input:checked~&]:bg-bg-green-500 [input:checked~&]:text-white">
                                    <p>Circuit Training Program is a form of exercise that combines cardiovascular exercises with strength training. It involves moving through a series of exercises or stations with minimal rest, targeting different muscle groups for a full-body workout.</p>
                                </div>
                            </div>
                        </Flip>



                    </div>
              






            </div>
        </div>


    );
};

export default ExtraSection;