import { useEffect } from "react";
import { useState } from "react";
import { popularClasses } from "../../../apis/classes";
import ClassCard from "../../../components/Card/ClassCard";
import Heading from "../../../components/Heading/Heading";
import { Zoom  } from "react-awesome-reveal";

const ClassSection = () => {
    const [topClassess, setTopClassess] = useState([])
    useEffect(() => {
        popularClasses().then(data => {
            setTopClassess(data)
        })
    }, []);

    // console.log(topClassess);


    return (
        <div>
            <Heading
                title='Our Popular Classes'
                subtitle='Welcome to our popular classes. Here you will find list of top 6 classes'
                center={true}
            ></Heading>


            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-8">
                {
                    topClassess.map((topClass, index) =>

                        <Zoom cascade duration={1000} key={index}>
                            <ClassCard
                                topClass={topClass}
                                
                            ></ClassCard>
                        </Zoom >
                    )
                }

            </div>



        </div>
    );
};

export default ClassSection;