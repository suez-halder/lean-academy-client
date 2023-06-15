import Heading from "../../../components/Heading/Heading";
import useAllInstructors from "../../../hooks/useAllInstructors";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Card from "../../../components/Card/Card";



const InstructorSection = () => {

    const [allInstructors] = useAllInstructors()
    console.log(allInstructors)






    return (
        <div>
            <Heading
                title={'Our Popular Instructors'}
                subtitle="These are the list of our top 6 instructors based on the number of enrolled student in the class. Choose your instructor now to develop your physical health!"
                center={true}
            ></Heading>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper w-1/3"
                    
                >

                    <div >
                        {allInstructors?.map(instructor => <SwiperSlide key={instructor._id}><Card
                            key={instructor._id}
                            instructor={instructor}
                        ></Card></SwiperSlide>)}
                    </div>



                </Swiper>
            </>
        </div>
    );
};

export default InstructorSection;