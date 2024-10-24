import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
            <div className="hidden bg-muted lg:block">
                <img
                    src="https://images.unsplash.com/photo-1517398747128-cd2271140a0b?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className="flex items-center justify-center py-12">
                <Link
                    to="/"
                    className="absolute top-5 left-5 flex justify-center text-2xl items-center gap-2 font-medium"
                >
                    <ArrowLeft className="bg-gray-200 w-8 h-8 p-1 rounded-md" />
                </Link>
                <div className="mx-auto grid w-[360px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Register</h1>
                        <p className="text-balance font-light text-muted-foreground mb-4">
                            Enter your email below to register to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="text">Name</Label>
                            <Input
                                id="text"
                                type="text"
                                placeholder="name"
                                required
                                className="bg-white"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                className="bg-white"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                placeholder="password"
                                type="password"
                                required
                                className="bg-white"
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center">
                        Already&apos;t have an account?{" "}
                        <Link
                            to="/auth/login"
                            className="underline font-medium"
                        >
                            login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
