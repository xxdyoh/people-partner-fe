"use client";
import axios from "axios";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import TransitionLink from "@/components/TransitionLink";
import toast from "react-hot-toast";

function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ username: "", password: "" });

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password.length < 8) {
            toast.error("Password minimal 8 karakter.");
            return;
        }

        try {
            const res = await axios.post("https://people-partner-be-production.up.railway.app/api/auth/register", form);
            // setMessage(res.data.message);
            // Redirect ke login
            window.location.href = "/auth/login";
        } catch (err) {
            toast.error(err.response?.data?.message || "Terjadi kesalahan.");
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
                <h2 className="text-white text-2xl mb-6 font-bold">Sign up</h2>

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
                        placeholder="Password (min 8 karakter)"
                        className="bg-white bg-opacity-80 border border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5 pr-10 focus:border-blue-500 focus:outline-none"
                        minLength={8}
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
                    Sign Up
                </button>

                <div className="text-left text-sm font-bold mt-6">
                    <span className="text-white">Already have an account? </span>
                    <TransitionLink href="/auth/login" className="link link-secondary">
                        Log In
                    </TransitionLink>
                </div>
            </form>
        </div>
    );
}

export default SignUpPage;