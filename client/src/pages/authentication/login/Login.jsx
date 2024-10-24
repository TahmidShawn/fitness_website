import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-full lg:grid min-h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center py-12">
                <Link
                    to={"/"}
                    className="absolute top-5 left-5 flex justify-center text-2xl items-center gap-2 font-medium"
                >
                    <ArrowLeft className="bg-gray-800  text-white w-8 h-8 p-1 rounded-md" />
                </Link>

                <div className="mx-auto grid w-[360px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance font-light text-muted-foreground mb-4">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
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
                        <div className="grid gap-2 mt-1">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    to="/forgot-password"
                                    className="ml-auto inline-block text-sm hover:underline text-blue-500"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input
                                className="bg-white"
                                id="password"
                                type="password"
                                required
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
                        Don&apos;t have an account?{" "}
                        <Link to="/auth/register" className="underline">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    src="https://images.unsplash.com/photo-1560215978-9054e9c7b983?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                    className="h-screen w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Login;
