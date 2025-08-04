"use client";
import axios from "axios";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import TransitionLink from "@/components/TransitionLink";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function LoginPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, form);

            // toast.success("Login sukses!");

            localStorage.setItem("user", JSON.stringify(res.data.user));
            // Cookies.set('user', JSON.stringify(res.data.user), { expires: 1 }); // expired 1 hari
            router.push("/main-menu");
        } catch (err) {
            toast.error(err.response?.data?.message || "Terjadi kesalahan saat login.");
        }
    };

    return (
        <div className="relative rounded overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1350&q=80"
                    alt="Keyboard background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative p-6 md:p-8 z-10">
                <h2 className="text-white text-2xl mb-6 font-bold">Log In</h2>

                {/* Username */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Username"
                        className="bg-white bg-opacity-80 border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5 focus:border-blue-500 focus:outline-none"
                        required
                    />
                </div>

                {/* Password */}
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-600" />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="bg-white bg-opacity-80 border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5 pr-10 focus:border-blue-500 focus:outline-none"
                        required
                    />
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? (
                            <Eye className="h-5 w-5 text-gray-600" />
                        ) : (
                            <EyeOff className="h-5 w-5 text-gray-600" />
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-neutral mt-4 w-full"
                >
                    Log In
                </button>

                <div className="text-center mt-4">
                    <a href="#" className="text-sm font-bold text-white hover:text-blue-400">
                        Forgot password?
                    </a>
                </div>

                <div className="text-left text-sm font-bold mt-6">
                    <span className="text-white">Don't have an account? </span>
                    <TransitionLink href="/auth/sign-up" className="link link-secondary">
                        Sign up
                    </TransitionLink>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;