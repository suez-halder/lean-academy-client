import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/Classes/Yoga and Pilates.jpeg'
import img2 from '../../../assets/Classes/High-intensity Interval Training.jpeg'
import img3 from '../../../assets/Classes/Circuit Training Program.jpeg'
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="relative">
            
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-2xl md:text-5xl text-white bg-green-900 p-2 md:p-6 w-full md:w-2/3 mx-auto text-center rounded-xl">Welcome to Lean Academy</h2>
                <Link to='classes'><button className="btn btn-sm md:btn-lg  btn-success absolute top-2/3 md:bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-sm md:text-2xl mt-1 md:mt-2">See All Classes</button></Link>
            


            <Carousel
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={4000}
                transitionTime={600}
            >
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
