import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDataFetch = (endpoint) => {
    const axiosPublic = useAxiosPublic();

    const { data, isLoading, refetch } = useQuery({
        queryKey: [endpoint],
        queryFn: async () => {
            if (!endpoint) return null;
            const res = await axiosPublic.get(endpoint);
            return res.data?.data;
        },
        enabled: !!endpoint,
    });

    return { data, isLoading, refetch };
};

export default useDataFetch;
