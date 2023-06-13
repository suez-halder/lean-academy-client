import { useQuery } from '@tanstack/react-query'
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/users`)
            // console.log('res from axios', res);
            return res.data;
        },

    })

    return [users, refetch]
};

export default useUsers;