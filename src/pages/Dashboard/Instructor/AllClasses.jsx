import useAuth from "../../../hooks/useAuth";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { LuEdit } from 'react-icons/lu'
import { VscFeedback } from 'react-icons/vsc'
import { Link } from "react-router-dom";

const AllClasses = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            //   console.log('res from axios', res.data);
            return res.data
        }
    })

    // console.log(classes);



    const { data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selected/paid/${user?.email}`)
            //   console.log('res from axios', res.data);
            return res.data
        }
    })
    // console.log(selected);

    const countEnrollments = (className) => {
        return selected.filter(item => item.className === className).length;
    }


    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Status</th>
                        <th>Enrolled Students</th>
                        <th>Feedback</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        classes.map((singleClass, index) => <tr
                            key={singleClass._id}
                        >
                            <th>{index + 1}</th>
                            <td>{singleClass.className}</td>
                            <td >
                                <button
                                    className={`btn btn-xs capitalize ${singleClass.status === 'approved' ? 'btn-success' : singleClass.status === 'denied' ? 'btn-error' : 'btn-warning'}`}>
                                    {singleClass.status}
                                </button>
                            </td>
                            <td>{countEnrollments(singleClass.className)}</td>
                            <td >
                                <button className="text-3xl"><VscFeedback></VscFeedback></button>
                            </td>
                            <td>
                                <Link to={`/dashboard/all-classes/edit/${singleClass._id}`}><button className="text-2xl"><LuEdit></LuEdit></button></Link>
                            </td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllClasses;

/*
Low-intensity Cardio Program
High-intensity Interval Training
Strength Training Program
Circuit Training Program
Yoga and Pilates
 */