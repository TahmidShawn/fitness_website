/* eslint-disable react/prop-types */
const ProgramClass = ({ program }) => {
    const {
        className,
        description,
        images,
        category,
        price,
        discountPercentage,
        isTrending,
        duration,
        classDates,
        maxStudents,
        students,
        averageRating,
        comments,
    } = program;

    return (
        <div className="">
            <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto">
                <div className="">
                    <img src={images[0]} className="w-full h-48 object-cover" />
                </div>

                <div className="p-6">
                    <h3 className="text-gray-800 text-xl font-bold truncate">
                        {className}
                    </h3>
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {description}
                    </p>
                    <button
                        type="button"
                        className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProgramClass;
