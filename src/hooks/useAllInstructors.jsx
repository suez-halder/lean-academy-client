import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllInstructors = () => {
    const [axiosSecure] = useAxiosSecure()

    const {data: allInstructors, isLoading: isAllInstructorsLoading} = useQuery(['allInstructors'], async () => {
        const res = await axiosSecure.get(`/users/instructors`);
        return res.data;
    });

    return [allInstructors, isAllInstructorsLoading];
};

export default useAllInstructors;
