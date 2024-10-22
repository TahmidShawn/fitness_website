import { CornerDownRight } from "lucide-react";

const SecondaryBanner = () => {
    return (
        <div className="bg-black text-white mt-14">
            <div className="max-w-2xl mx-auto px-2 text-center py-16">
                <h2 className="text-3xl italic tracking-wide">
                    Are you also tired of endlessly struggling to reach your
                    fitness goals? It seems like no matter how hard you try, you
                    just can&apos;t make the progress you want.
                </h2>
                <button className="flex justify-center items-center gap-2 text-xl tracking-wider mx-auto mt-10">
                    <CornerDownRight className="bg-primaryColor text-black w-8 h-8 p-1 rounded-md" />
                    Start your transformation today!
                </button>
            </div>
        </div>
    );
};

export default SecondaryBanner;
