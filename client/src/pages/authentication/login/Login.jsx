import LoadingButton from "@/components/elements/LoadingButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useAuth from "@/hooks/useAuth";
import { ArrowLeft, Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

const Login = () => {
    const { loginUser, loading } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        await loginUser(data, reset);
    };
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
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid gap-4"
                    >
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                {...register("email")}
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
                                {...register("password")}
                                className="bg-white"
                                id="password"
                                type="password"
                                placeholder="password"
                                required
                            />
                        </div>
                        {loading ? (
                            <LoadingButton text="Logging in..." />
                        ) : (
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        )}
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </form>
                    <div className="mt-4 text-center">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/auth/register"
                            className="underline font-medium"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    src="https://images.unsplash.com/photo-1593476123561-9516f2097158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxmaXRuZXNzJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D"
                    alt="Image"
                    className="h-screen w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Login;
