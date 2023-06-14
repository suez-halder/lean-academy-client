import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useClasses from "../../hooks/useClasses";
import toast from "react-hot-toast";

const Classes = () => {
    const { user } = useAuth()
    // console.log(user);
    const navigate = useNavigate()
    const [classes, refetch] = useClasses()
    // console.log(classes);
    const approvedClasses = classes.filter(c => c.status === 'approved')
    console.log(approvedClasses);


    const handleSelect = async (id) => {
        const selected = approvedClasses.find(c => c._id === id);
        console.log(selected);
        const { className, email, price, image, name } = selected;

        const selectedClass = {
            className,
            image,
            email,
            studentEmail: user.email,
            price,
            name
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/selected`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            });

            const data = await response.json();

            // console.log(data);

            if (data.insertedId) {
                toast.success("Class Selected Successfully");

                fetch(`${import.meta.env.VITE_API_URL}/classes/seats/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        refetch();
                        navigate('/dashboard/selected-classes');
                    })
                    .catch(error => console.error('Error:', error));


            }
        } catch (error) {
            console.error('Error:', error);
        }
    }



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        approvedClasses.map((singleClass, index) => <tr
                            key={singleClass._id}
                            className={singleClass.seats === 0 ? "bg-red-500" : ""}
                        >
                            <td>{index + 1}</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>


                            </td>
                            <td>
                                {singleClass.className}

                            </td>
                            <td>{singleClass.name}</td>
                            <td>{singleClass.seats}</td>
                            <td>${singleClass.price}</td>
                            <td>
                                {singleClass.seats > 0 ? (
                                    <button onClick={() => handleSelect(singleClass._id)} className="btn btn-info btn-xs">
                                        Select
                                    </button>
                                ) : (
                                    <button disabled className="btn btn-info btn-xs">
                                        Select
                                    </button>
                                )}
                            </td>




                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default Classes;