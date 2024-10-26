import useDataFetch from "@/hooks/useDataFetch";
import ProgramClass from "./programClass/ProgramClass";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const Programs = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [category, setCategory] = useState([]);

    const endpoint = "/api/v1/class";
    const { data, isLoading } = useDataFetch(endpoint);

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) =>
                prev.filter((item) => item !== e.target.value)
            );
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 pt-10 border-t max-w-6xl mx-auto px-2">
                {/* Filter Option */}
                <div className="min-w-60 lg:block">
                    <div className="flex items-center gap-1 lg:hidden">
                        <p
                            onClick={() => {
                                setShowFilter(!showFilter);
                            }}
                            className="py-2 text-xl flex items-center gap-2 cursor-pointer"
                        >
                            FILTERS
                        </p>
                        <ChevronRight
                            className={`h-4 ${showFilter ? "rotate-90" : ""}`}
                        />
                    </div>

                    {/* Category Filter */}
                    <div
                        className={`border border-gray-300 pl-5 py-3 ${
                            showFilter ? "" : "hidden"
                        } lg:block`}
                    >
                        <p className="mb-3 font-medium text-sm">Categories</p>
                        <select
                            name=""
                            id=""
                            className="border rounded-lg border-gray-600 text-sm py-2 px-2"
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

                    {/* Sub Category Filter */}
                    <div
                        className={`border border-gray-300 pl-5 py-3 my-5 ${
                            showFilter ? "" : "hidden"
                        } lg:block`}
                    >
                        <p className="mb-3 font-medium text-sm">Type</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            <p className="flex gap-2">
                                <input
                                    onChange={toggleCategory}
                                    type="checkbox"
                                    name=""
                                    id=""
                                    value={"Cardio"}
                                    className="w-3"
                                />{" "}
                                Cardio
                            </p>
                            <p className="flex gap-2">
                                <input
                                    onChange={toggleCategory}
                                    type="checkbox"
                                    name=""
                                    id=""
                                    value={"Yoga"}
                                    className="w-3"
                                />{" "}
                                Yoga
                            </p>
                            <p className="flex gap-2">
                                <input
                                    onChange={toggleCategory}
                                    type="checkbox"
                                    name=""
                                    id=""
                                    value={"Gym"}
                                    className="w-3"
                                />{" "}
                                Gym
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    {/* All Products */}
                    <div className="mt-0">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
                            {data?.map((program, index) => (
                                <ProgramClass key={index} program={program} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;
