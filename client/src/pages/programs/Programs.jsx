import useDataFetch from "@/hooks/useDataFetch";
import ProgramClass from "./programClass/ProgramClass";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const Programs = () => {
    const [showFilter, setShowFilter] = useState(false);

    const endpoint = "/api/v1/class";
    const { data, isLoading } = useDataFetch(endpoint);
    console.log(data);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-10  pt-10 border-t">
                {/* Filter Option */}
                <div className="min-w-60 ">
                    <div className="flex items-center gap-1">
                        <p
                            onClick={() => {
                                setShowFilter(!showFilter);
                            }}
                            className="py-2 text-xl flex items-center gap-2 cursor-pointer"
                        >
                            FILTERS
                        </p>
                        <ChevronRight
                            className={`h-4 sm:hidden ${
                                showFilter ? "rotate-90" : ""
                            }`}
                        />
                    </div>
                    {/* Category Filter */}
                    <div
                        className={`border border-gray-300 pl-5 py-3 mt-6 ${
                            showFilter ? "" : "hidden "
                        }  sm:block`}
                    >
                        <p className="mb-3 font-medium text-sm">Categories</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            {/* first filter here  */}
                        </div>
                    </div>

                    {/* Sub Category Filter */}
                    <div
                        className={`border border-gray-300 pl-5 py-3 my-5 ${
                            showFilter ? "" : "hidden "
                        }  sm:block`}
                    >
                        <p className="mb-3 font-medium text-sm">Type</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            {/* second filter here  */}
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between text-base sm:text-2xl mb-4">
                        <select
                            name=""
                            id=""
                            className="border rounded-lg border-gray-600 text-sm px-2"
                        >
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">
                                Sort by: Low to High
                            </option>
                            <option value="high-low">
                                Sort by: High to Low
                            </option>
                        </select>
                    </div>
                    {/* All Products */}
                    <div className="mt-8">
                        {
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                                {data.map((program, index) => (
                                    <ProgramClass
                                        key={index}
                                        program={program}
                                    />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
