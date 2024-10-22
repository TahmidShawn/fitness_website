import { CornerDownRight } from "lucide-react";

const Banner = () => {
    return (
        <div>
            <div className="px-4">
                <p className="text-center tracking-wide pt-12 text-sm">
                    Thank you for joining<mark> ZenFIT</mark> ! You&apos;ve
                    already taken a great step toward{" "}
                    <br className="hidden md:inline-block" />
                    your fitness<mark> goals</mark> , but why stop here? Keep
                    pushing forward, and <mark>unlock</mark> your full
                    potential!
                </p>
                <h1 className="text-center text-4xl mt-4 tracking-wide">
                    Transform your fitness routine with{" "}
                    <br className="hidden md:inline-block" /> ZenFIT and unlock
                    your best self
                </h1>
            </div>
            <img
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXAlMjBmaXRuZXNzfGVufDB8fDB8fHwy"
                alt=""
                className="max-w-screen-md w-full mx-auto h-[380px] mt-10 object-cover"
            />
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-8">
                <button className="bg-primaryColor py-3 px-8 text-black font-medium flex justify-center items-center gap-2 rounded-md">
                    <CornerDownRight />
                    Start your transformation today !
                </button>
                <button className="flex justify-center items-center gap-2 font-medium">
                    <CornerDownRight className="bg-white w-8 h-8 p-1 rounded-md" />
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Banner;
