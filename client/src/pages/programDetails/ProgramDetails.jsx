import useDataFetch from "@/hooks/useDataFetch";
import { useParams } from "react-router-dom";

const ProgramDetails = () => {
    const params = useParams();
    console.log(params.id);
    const endpoint = `/api/v1/class/${params.id}`;
    const { data, isLoading } = useDataFetch(endpoint);
    console.log(data);
    return (
        <div>
            <p>ProgramDetails</p>
        </div>
    );
};

export default ProgramDetails;
