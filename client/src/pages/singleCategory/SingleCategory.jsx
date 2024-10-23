import { useParams } from "react-router-dom";

const SingleCategory = () => {
    const { categoryName } = useParams();

    return (
        <div className="max-w-6xl mx-auto px-2">
            <p>{categoryName}</p>
            <p>SingleCategory</p>
        </div>
    );
};

export default SingleCategory;
