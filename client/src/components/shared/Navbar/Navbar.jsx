import { useState, useEffect, useRef } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
    const { isAuthenticated, logoutUser } = useAuth();
    const handleLogout = async () => {
        await logoutUser();
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/programs">Programs</NavLink>
            </li>
            <li>
                <NavLink to="/">Trainers</NavLink>
            </li>
            <li>
                <NavLink to="/">About</NavLink>
            </li>
        </>
    );

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isDropdownOpen]);

    const dropDownSection = (
        <>
            <div className="relative group" ref={dropdownRef}>
                <User className="cursor-pointer" onClick={toggleDropdown} />
                <div
                    className={`absolute right-0 mt-4 w-44 p-1 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 z-50 ${
                        isDropdownOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    } group-hover:opacity-100 group-hover:visible`}
                >
                    <button className="block w-full text-left px-4 py-2  text-gray-700 hover:bg-gray-100">
                        Profile
                    </button>
                    <Link
                        to={"/dashboard"}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        Dashboard
                    </Link>
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-1  text-gray-700 hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to={"/auth/login"}
                            className="block w-full text-left px-4 py-1  text-gray-700 hover:bg-gray-100"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </>
    );

    return (
        <div className="sticky top-0 z-50 inset-x-0 py-3 bg-white/70 backdrop-blur-lg">
            <nav className="max-w-6xl mx-auto px-2">
                {/* for small devices */}
                <div className="inline md:hidden">
                    <Sheet>
                        <div className="flex justify-between mx-3">
                            <SheetTrigger>
                                <AlignJustify />
                            </SheetTrigger>
                            <div className="flex items-center gap-5">
                                <ShoppingCart className="cursor-pointer" />
                                {/* Drop down section */}
                                {dropDownSection}
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

                {/* for medium and large devices */}
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
                        <ShoppingCart className="cursor-pointer" />
                        {/* Drop down section */}
                        {dropDownSection}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
