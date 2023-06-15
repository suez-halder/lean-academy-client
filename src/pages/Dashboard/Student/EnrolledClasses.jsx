import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSelected from "../../../hooks/useSelected";

const EnrolledClasses = () => {
    const [selected] = useSelected()
    // console.log(selected);
    const enrolledClasses = selected.filter((item) => item.transactionId);
    // console.log(enrolledClasses);
    return (
        <>
           
            {
                enrolledClasses && Array.isArray(enrolledClasses) && enrolledClasses.length > 0 ?
                    <div className="overflow-x-auto w-full px-4">
                         <Link to='/dashboard/selected-classes'><button className="btn btn-xs btn-success"><FaPlus></FaPlus> Select More Classes</button></Link>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Class Image</th>
                                    <th>Class Name</th>
                                    <th>Instructor Name</th>
                                    <th>Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    enrolledClasses.map((singleClass, index) => <tr
                                        key={singleClass._id}
                                    >
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>


                                        </td>
                                        <td>{singleClass.className}</td>
                                        <td>{singleClass.name}</td>
                                        <td>${singleClass.price}</td>


                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                    :
                    <>

                        <Link to='/dashboard/selected-classes'><button className="btn btn-info">Enroll Into Your First Class</button></Link>
                    </>
            }
        </>
    );
};

export default EnrolledClasses;