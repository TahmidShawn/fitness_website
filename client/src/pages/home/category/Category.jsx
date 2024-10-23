import { CornerDownRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
    {
        name: "Pilates",
        description:
            "Improve flexibility and core strength with focused exercises.",
        image: "https://images.unsplash.com/photo-1717500251833-d807c5753ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBpbGF0ZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Yoga",
        description: "Find balance and peace with yoga practices.",
        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Indoor Cycling",
        description: "High-energy, fast-paced cycling to boost endurance.",
        image: "https://images.unsplash.com/photo-1562103017-bfb208116c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kb29yJTIwY3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Kickboxing",
        description: "Power-packed kickboxing sessions for full-body fitness.",
        image: "https://images.unsplash.com/photo-1516684991026-4c3032a2b4fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lja2JveGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Circuit Training",
        description:
            "A mix of cardio and strength in high-intensity intervals.",
        image: "https://plus.unsplash.com/premium_photo-1664299680539-a53bd5d597ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2lyY3VpdCUyMHRyYWluaW5nfGVufDB8fDB8fHww",
    },
    {
        name: "Strength Training",
        description:
            "Build muscle and strength through focused weight training.",
        image: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0cmVuZ3RoJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Cardio",
        description:
            "Increase endurance and burn calories with intense cardio.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcmRpbyUyMHRyYWluaW5nfGVufDB8fDB8fHww",
    },
    {
        name: "Open Gym",
        description: "Flexible, self-paced training in a fully-equipped gym.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9wZW4lMjBneW18ZW58MHx8MHx8fDA%3D",
    },
];

const Category = () => {
    return (
        <div className="max-w-6xl mx-auto px-2 py-12">
            <h2 className="text-4xl text-center font-semibold tracking-wide mb-2">
                Explore Our Fitness Categories
            </h2>
            <p className="text-center tracking-widest">
                Join now and start your journey to a stronger, fitter you!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                {categories.map((category, index) => (
                    <Link 
                    to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    key={index} className="bg-white pb-5">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="px-4 ml-1">
                            <h2 className="text-xl font-medium mt-4 mb-1">
                                {category.name}
                            </h2>
                            <p className="text-sm tracking-wide truncate">
                                {category.description}
                            </p>
                            <div className="flex justify-end mt-7">
                                <button className="flex justify-center items-center gap-2 font-semibold">
                                    <CornerDownRight className="bg-primaryColor w-8 h-8 p-1 rounded-md" />
                                    Start Now
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Category;
