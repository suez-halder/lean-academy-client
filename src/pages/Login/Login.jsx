import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { signIn, googleSignIn } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [show, setShow] = useState(false)


    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                reset()
                toast.success('Logged In Successfully');
                navigate(from, { replace: true })

            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'student', photo: loggedInUser.photoURL }

                // console.log('user profile info updated');
                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
                navigate(from, { replace: true })
            })
    }


    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(handleLogin)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500 my-2 text-xs">Email is required</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={show ? "text" : "password"} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                        <FaEye
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                            onClick={() => setShow(!show)}
                        >
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </FaEye>

                        {errors.password && <span className="text-red-500 my-2 text-xs">Please provide correct password</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-500">Login</button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:text-green-500 text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer '>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to='/register'
                        className='hover:underline hover:text-green-500 text-gray-600'
                    >
                        Register
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Login;