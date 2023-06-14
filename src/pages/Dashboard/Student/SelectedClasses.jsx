import useSelected from "../../../hooks/useSelected";
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import { GrCreditCard } from 'react-icons/gr'
import { Link } from "react-router-dom";

const SelectedClasses = () => {

    const [selected] = useSelected()
    console.log(selected);


    return (
        <div>
            <Link to='/classes'><button className="btn btn-xs btn-success"><FaPlus></FaPlus> Add More Class</button></Link>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selected.map((singleClass, index) => <tr
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
                                <td >${singleClass.price}</td>
                                <td >
                                    <button className="btn btn-sm btn-error text-lg"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <button className="btn btn-sm  btn-info text-2xl"><GrCreditCard></GrCreditCard></button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;