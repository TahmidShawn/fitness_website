import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/classes">Classes</NavLink>
            </li>
            <li>
                <NavLink to="/">Trainers</NavLink>
            </li>
            <li>
                <NavLink to="/">About</NavLink>
            </li>
        </>
    );
    const dashboardBtn = (
        <>
            <Link
                to="/dashboard"
                className="border px-6 w-[120px] py-1.5 text-center border-black"
            >
                Dashboard
            </Link>
        </>
    );

    return (
        <div className="sticky top-0 z-50 inset-x-0 py-3 bg-white/70 backdrop-blur-lg">
            <nav className="max-w-6xl mx-auto px-2">
                {/* for sm devices */}
                <div className="inline md:hidden">
                    <Sheet>
                        <div className="flex justify-between mx-3">
                            <SheetTrigger>
                                <AlignJustify />
                            </SheetTrigger>
                            <div className="flex items-center gap-4">
                                <ShoppingCart />
                                <User />
                            </div>
                        </div>
                        <SheetContent>
                            <SheetHeader>
                                <div>
                                    <ul className="list-none text-center space-y-5 mt-10 text-2xl font-semibold">
                                        {navLinks}
                                    </ul>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* for md and lg devices */}
                <div className="hidden md:flex justify-between items-center">
                    <div className="flex gap-28 items-center">
                        <h1 className="text-2xl font-semibold">ZenFIT</h1>
                    </div>
                    <div className="flex gap-10">
                        <ul className="flex gap-10 items-center ml-6">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-6">
                        <ShoppingCart />
                        <User />
                        {dashboardBtn}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
