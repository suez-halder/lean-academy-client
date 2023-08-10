import Heading from "../../../components/Heading/Heading";

const Newsletter = () => {
    return (
        <div>
            <Heading
                title={'Subscribe to our Newsletter'}
                subtitle="Stay Updated: Get the Latest News and Insights Straight to Your Inbox!"
                center={true}
            ></Heading>
            <div className="w-1/3 mx-auto my-12">
                <div className="form-control">
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent">Subscribe</button> 
                </div>
            </div>
        </div>
    );
};

export default Newsletter;