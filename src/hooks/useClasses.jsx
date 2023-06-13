import { useQuery } from '@tanstack/react-query'
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: Classes = [] } = useQuery({
        queryKey: ['Classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/Classes`)
            // console.log('res from axios', res);
            return res.data;
        },

    })

    return [Classes, refetch]
};

export default useClasses;