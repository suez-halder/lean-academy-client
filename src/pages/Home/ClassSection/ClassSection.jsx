import { useEffect } from "react";
import { useState } from "react";
import { popularClasses } from "../../../apis/classes";
import Heading from "../../../components/Heading/Heading";

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

            <div>
                {
                    topClassess.map(topClass => <p key={topClass._id}>{topClass._id}</p>)
                }

            </div>

        </div>
    );
};

export default ClassSection;