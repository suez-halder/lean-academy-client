import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isStudent, isLoading: isStudentLoading } = useQuery(['isStudent', user?.email], async () => {
        if (user) { // Ensure user is defined
            const res = await axiosSecure.get(`/users/role/${user.email}`);
            // console.log('is Student response', res);
            return res.data.isStudent;
        }
    }, { enabled: !!user }) // Disable query when there's no user

    return [isStudent, isStudentLoading];
};


export default useStudent;