import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
    const {user} = useAuth()
    console.log(user);

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleAddClass = data =>{
        console.log(data);
    }
    
    return (
        <div className="w-2/3">
            <form
                    onSubmit={handleSubmit(handleAddClass)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" {...register("className", { required: true })} name="className" placeholder="class name" className="input input-bordered" />
                        {errors.className && <span className="text-red-500 my-2 text-xs">Class name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("classImage", { required: true })} name="classImage" placeholder="class image" className="input input-bordered" />
                        {errors.classImage && <span className="text-red-500 my-2 text-xs">Class name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} {...register("instructorName", { required: true })} name="instructorName" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" defaultValue={user.email} {...register("instructorEmail", { required: true })} name="instructorEmail" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number"  {...register("seats", { required: true })} name="seats" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control mt-6 w-1/2 mx-auto">
                        <button className="btn bg-green-500">Add a Class</button>
                    </div>
                </form>
        </div>
    );
};

export default AddClass;