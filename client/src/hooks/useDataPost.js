import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDataPost = (endpoint) => {
    const axiosPublic = useAxiosPublic();

    const mutation = useMutation({
        mutationFn: async (data) => {
            if (!endpoint) return null;
            const res = await axiosPublic.post(endpoint, data);
            return res.data;
        },
        onError: (error) => {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                console.error(
                    "Backend error message:",
                    error.response.data.message
                );
            } else {
                console.error("Error posting data:", error.message);
            }
        },
        onSuccess: (data) => {
            if (data && data.message) {
                console.log("Backend success message:", data.message);
            } else {
                console.log("Data posted successfully:", data);
            }
        },
    });

    return mutation;
};

export default useDataPost;
