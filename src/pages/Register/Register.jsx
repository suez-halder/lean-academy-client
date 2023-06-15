import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { googleSignIn, createUser, updateUserProfile, setLoading } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        // console.log(data)
        //---
        // Image Upload
        //---
        setLoading(true)

        const formData = new FormData()
        formData.append('image', data.photoURL[0]);
        // console.log(data.photoURL[0]);
        // console.log(formData);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        // console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                // console.log(imageData.data.display_url);
                const imageURL = imageData.data.display_url
                createUser(data.email, data.password)
                    .then(result => {
                        const loggedUser = result.user;
                        console.log(loggedUser)
                        updateUserProfile(data.name, imageURL)
                            .then(() => {
                                const saveUser = { name: data.name, email: data.email, role: 'student', photo: imageURL }
                                // console.log('user profile info updated');
                                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(saveUser)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data);
                                        if (data.insertedId) {
                                            reset();
                                            toast.success("User Created Successfully")
                                            navigate(from, { replace: true })
                                        }
                                    })
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })
            })




    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'student' }

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
                    <h1 className='my-3 text-4xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-400'>
                        Register to create your account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500 my-2 text-xs">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="file" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" referrerPolicy='no-referrer' />
                        {errors.photoURL && <span className="text-red-500 my-2 text-xs">Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500 my-2 text-xs">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}/

                        })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase, and one special character</p>}



                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green-500">Register</button>
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
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-green-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;