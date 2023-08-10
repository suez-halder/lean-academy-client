import Heading from "../../../components/Heading/Heading";

const Reviews = () => {
    return (
        <div>
            <Heading
                title={'Our Course Reviews'}
                subtitle="These are the list of our top 6 instructors based on the number of enrolled student in the class. Choose your instructor now to develop your physical health!"
                center={true}
            ></Heading>

            <div>

                <div className="w-3/4 mx-auto flex">
                    <img src="https://i.ibb.co/qkvPDd0/happy-Face.png" className="w-1/6 mx-auto rounded-full shadow-2xl" />

                    <div className="ml-8">
                        <p className="py-6 text-sm text-slate-500 md:text-lg">Toy Athlete is one of the most exclusive Sports Toy shop in the wold, where you can find all product for your baby that your want to buy for your baby. I recommend this shop all of you</p>
                        <h1 className="text-2xl font-bold">Alan Smith</h1>
                        <p><small className=" text-slate-500">- CEO, Momens Group</small></p>
                    </div>
                    <hr />
                </div>

            </div>
        </div>

    );
};

export default Reviews;