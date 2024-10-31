import CurrencyIcon from "@/components/elements/CurrencyIcon";
import { CornerDownRight } from "lucide-react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProgramClass = ({ program }) => {
    const { _id, className, description, images, price, newPrice } = program;

    return (
        <div className="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto">
            <img
                src={images[0]}
                className="w-full h-48 object-cover"
                alt={className}
            />

            <div className="p-6">
                <h3 className="text-gray-800 text-xl font-bold truncate">
                    {className}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {description}
                </p>
                {/* Prices */}
                <div className="mt-3 flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-gray-800">
                        <CurrencyIcon /> {newPrice}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                        <CurrencyIcon /> {price}
                    </span>
                </div>

                <Link
                    to={`/programs/${_id}`}
                    className="bg-primaryColor py-2.5 mt-6 w-full text-black font-medium flex justify-center items-center gap-2 rounded-md"
                >
                    <CornerDownRight />
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default ProgramClass;
