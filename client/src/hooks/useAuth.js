import { useContext, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { toast } from "sonner";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {
        setAuthState,
        authState: { isAuthenticated, user },
    } = useContext(AuthContext);

    // register user
    const registerUser = async (userData, reset) => {
        setLoading(true);
        try {
            const response = await axiosPublic?.post(
                "/api/v1/auth/register",
                userData
            );
            setAuthState({
                isAuthenticated: true,
                user: response.data.user,
            });
            toast.success(response?.data?.message || "Operation successful");
            reset();
        } catch (error) {
            toast.error(error.response?.data?.message || "Operation error");
        } finally {
            setLoading(false);
        }
    };

    // login user
    const loginUser = async (userData, reset) => {
        setLoading(true);
        try {
            const response = await axiosPublic?.post(
                "/api/v1/auth/login",
                userData
            );
            setAuthState({
                isAuthenticated: true,
                user: response.data.user,
            });
            toast.success(response?.data?.message || "Operation successful");
            reset();
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data?.message || "Operation error");
        } finally {
            setLoading(false);
        }
    };

    // logout user
    const logoutUser = async () => {
        setLoading(true);
        try {
            const response = await axiosPublic.get("/api/v1/auth/logout");
            setAuthState({
                isAuthenticated: false,
                user: null,
            });
            toast.success(response?.data?.message || "Operation successful");
        } catch (error) {
            toast.error(error.response?.data?.message || "Operation error");
        } finally {
            setLoading(false);
        }
    };

    // forgot password
    const forgotPassword = async (email) => {
        setLoading(true);
        try {
            const response = await axiosPublic.post("/api/v1/password/forgot", {
                email,
            });
            toast.success(response?.data?.message || "Email sent successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Operation error");
        } finally {
            setLoading(false);
        }
    };

    // reset password
    const resetPassword = async (token, data) => {
        setLoading(true);
        try {
            const response = await axiosPublic.put(
                `/api/v1/password/reset/${token}`,
                data
            );
            setAuthState({
                isAuthenticated: true,
                user: response.data.user,
            });
            toast.success(
                response?.data?.message || "Password reset successful"
            );
            return true;
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Error resetting password"
            );
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        isAuthenticated,
        user,
        loading,
        registerUser,
        loginUser,
        logoutUser,
        forgotPassword,
        resetPassword,
    };
};

export default useAuth;
