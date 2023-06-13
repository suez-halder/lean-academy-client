import useAuth from "../../../hooks/useAuth";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FcApprove } from 'react-icons/fc'
import { RiFeedbackFill} from 'react-icons/ri'
import { RxCrossCircled} from 'react-icons/rx'

const ManageClasses = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes`)
            //   console.log('res from axios', res.data);
            return res.data
        }
    })
    console.log(classes);

    

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
                        <th> Email</th>
                        <th> Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        classes.map((singleClass, index) => <tr
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
                            <td>{singleClass.email}</td>
                            <td>{singleClass.seats}</td>
                            <td>{singleClass.price}</td>
                            <td>{singleClass.status}</td>
                            <td className="flex items-center justify-center mt-3 gap-3">
                                <button ><FcApprove className="text-3xl"></FcApprove></button>
                                <button ><RxCrossCircled className="text-3xl text-red-500"></RxCrossCircled></button>
                                <button ><RiFeedbackFill className="text-2xl text-sky-500"></RiFeedbackFill></button>
                            </td>

                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    )
};

export default ManageClasses;