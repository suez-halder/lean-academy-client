import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/role/${user?.email}`);
            // console.log('is Student response', res);
            return res.data.isStudent;
        }
    })
    return [isStudent, isStudentLoading];
};

export default useStudent;