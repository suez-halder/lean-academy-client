
const AddClass = () => {
    return (
        <div>
            <div className="container mx-auto my-4 px-4 lg:px-20 ">

                <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold uppercase text-5xl">Add a Class</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="First Name*" />
                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Last Name*" />
                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email*" />
                        <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" placeholder="Phone*" />
                    </div>
                    <div className="my-4">
                        <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button className="uppercase text-sm font-bold tracking-wide bg-green-900 text-gray-100 p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default AddClass;