import useAuth from "../../../hooks/useAuth";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import {LuEdit} from 'react-icons/lu'
import {VscFeedback} from 'react-icons/vsc'

const AllClasses = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            //   console.log('res from axios', res.data);
            return res.data
        }
    })

    // console.log(classes);





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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        classes.map((singleClass,index) => <tr
                        key={singleClass._id}
                        >
                            <th>{index+1}</th>
                            <td>{singleClass.className}</td>
                            <td className="capitalize">{singleClass.status}</td>
                            <td>0</td>
                            <td >
                                <button className="text-3xl"><VscFeedback></VscFeedback></button>
                            </td>
                            <td>
                                <button className="text-2xl"><LuEdit></LuEdit></button>
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