import Heading from "../../../components/Heading/Heading";

const Reviews = () => {
    return (
        <div>
            <Heading
                title={'Our Course Reviews'}
                subtitle="Hear directly from our students. Genuine feedback on how our courses have impacted their learning journeys, ambitions, and professional growth."
                center={true}
            ></Heading>

            <div className="mt-12">
                <div className="w-full md:w-3/4 mx-auto flex flex-col md:flex-row">
                    <img src="https://i.ibb.co/rfvGnck/ivana.png" className="w-1/4 h-1/4 md:w-1/6 mx-auto rounded-full shadow-2xl" />
                    <div className="ml-8">
                        <p className="py-6 text-sm text-slate-500 md:text-lg">"Before joining Lean Academy, I felt overwhelmed with the sheer amount of information out there. Their structured approach and top-notch instructors made all the difference in my learning journey. Not only did I gain practical knowledge, but I also developed a solid foundation that's serving me well in my professional life. Highly recommended for anyone looking to up their game!"</p>
                        <h1 className="text-2xl font-bold mb-2">Lecia Savitski</h1>
                        <p><small className=" text-slate-500 text-base">- Finance Advisor at J.P. Morgan</small></p>
                    </div>
                </div>
                <hr className="font-bold w-3/4 mx-auto my-8"/>
                <div className="w-full md:w-3/4 mx-auto flex flex-col md:flex-row">
                    <img src="https://i.ibb.co/xJPDsrj/user-1.png" className="w-1/3  md:w-1/6 mx-auto rounded-full shadow-2xl" />
                    <div className="ml-8">
                        <p className="py-6 text-sm text-slate-500 md:text-lg">"I recently completed a course at Lean Academy, and I must say, it exceeded my expectations. The curriculum was clear, comprehensive, and up-to-date. While there's always room for improvement, especially in the realm of hands-on projects, the insights I gained here are invaluable. Kudos to the team for such an enriching experience!"</p>
                        <h1 className="text-2xl font-bold mb-2">Erick Rojas</h1>
                        <p><small className=" text-slate-500 text-base">- IT Recruiter at EX2 Outcoding</small></p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Reviews;