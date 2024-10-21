import shape from "../../../assets/aa.png";

const Banner = () => {
    return (
        <div className="relative overflow-hidden">
            <img
                src={shape}
                alt=""
                className="w-full min-h-[300px] object-cover"
            />
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-xl mx-auto text-center px-4">
                <h1 className="text-3xl md:text-5xl font-medium mb-6">
                    Elevate Your <span className="">Fitness Journey</span>
                </h1>
                <p className="max-w-screen-sm tracking-wider">
                    Join our community of fitness enthusiasts and take your
                    workouts to the next level. Whether you prefer Pilates,
                    Yoga, Kickboxing, or Strength Training, we offer a variety
                    of classes designed for all levels. Get personalized
                    guidance from expert trainers and achieve your fitness goals
                    today!
                </p>
                <button className="py-2.5 mt-8 px-12 bg-[#ffe924] font-medium tracking-wider text-gray-800 rounded">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default Banner;
