// import useAuth from "../../hooks/useAuth";
import useClasses from "../../hooks/useClasses";

const Classes = () => {
    // const {user} = useAuth()
    // console.log(user);
    const [classes] = useClasses()
    // console.log(classes);
    const approvedClasses = classes.filter(c => c.status === 'approved')
    console.log(approvedClasses);


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
                                <button className="btn btn-info btn-xs">Select</button>
                            </td>
                            
                           

                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default Classes;