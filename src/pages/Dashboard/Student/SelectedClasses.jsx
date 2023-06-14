import useSelected from "../../../hooks/useSelected";
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import { GrCreditCard } from 'react-icons/gr'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SelectedClasses = () => {

    const [selected, refetch] = useSelected()
    console.log(selected);

    const handleDelete = id => {
        fetch(`${import.meta.env.VITE_API_URL}/selected/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount>0) {
                    toast.success('Class Deleted Successfully');
                    refetch();
                    // fetch(`${import.meta.env.VITE_API_URL}/classes/increaseSeats/${id}`, {
                    //     method: 'PATCH',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    // })
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         console.log(data);
                    //         // refetch();

                    //     })
                    //     .catch(error => console.error('Error:', error));

                }

            })
            .catch(error => console.error('Error:', error));
    }






    return (
        <>
        {
            selected && Array.isArray(selected) && selected.length>0 ?
            <div className="w-full px-2">
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
                                    <button onClick={() => handleDelete(singleClass._id)} className="btn btn-sm  text-lg text-red-400"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <button className="btn btn-sm  text-2xl"><GrCreditCard></GrCreditCard></button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
        :
        <>
        
        <Link to='/classes'><button className="btn btn-info">Add Classes</button></Link>
        </>
        }
        </>
    );
};


export default SelectedClasses;