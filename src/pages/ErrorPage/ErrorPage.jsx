
import { Link, useRouteError } from "react-router-dom";
import errorAnimation from './../../assets/error.json'
import Lottie from "lottie-react";



const ErrorPage = () => {

    const error = useRouteError();
    // console.error(error.status);


    return (
        <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <div className="text-5xl text-green-600 font-bold">{error.status || error.message}</div>
                    <p
                        className="text-2xl md:text-3xl font-light leading-normal"
                    >Sorry we could not find this page. </p>
                    <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                    <Link to='/'><button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-green bg-success active:bg-green-700 hover:bg-green-900 ">Back to homepage</button></Link>
                </div>
                <div className="w-1/3">
                    <Lottie animationData={errorAnimation} />
                </div>


            </div>
        </div>
    );
};

export default ErrorPage;