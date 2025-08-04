import { Mail, User } from 'lucide-react';
import { LogoDark } from "@/components/Logo";
import { Toaster } from 'react-hot-toast';

function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-black flex flex-col md:flex-row">
            <Toaster position="top-center" reverseOrder={false} /> {/* Tambahkan ini */}

            <div className="w-full md:w-1/2 bg-black p-6 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="mb-8 flex items-center">
                    <LogoDark className="size-20" />
                    <div>
                        <h1 className="text-white text-2xl font-bold">People</h1>
                        <h2 className="text-blue-500 text-2xl font-bold -mt-1">Partner</h2>
                    </div>
                </div>

                <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">PEOPLE PARTNER SYSTEM</h1>
                <p className="italic text-white text-lg md:text-xl mb-8 max-w-lg">
                    We believe that you as part of our family is the most important people to be managed and taken care of. Allow us to give you great people experience.
                </p>

                <div className="relative">
                    {children}
                </div>
            </div>

            <div className="hidden md:block md:w-1/2 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] opacity-30 bg-cover bg-center" />
                <div className="absolute inset-0">
                    <Mail className="absolute top-1/4 right-1/4 text-gray-400 h-8 w-8" />
                    <Mail className="absolute bottom-1/3 left-1/3 text-gray-400 h-8 w-8" />
                    <Mail className="absolute top-2/3 right-1/3 text-gray-400 h-8 w-8" />

                    <User className="absolute top-[20%] left-1/4 text-gray-500 h-16 w-16" />
                    <User className="absolute bottom-1/4 right-1/5 text-gray-500 h-16 w-16" />
                    <User className="absolute top-2/3 left-1/5 text-gray-500 h-16 w-16" />
                    <User className="absolute top-1/3 right-1/3 text-gray-500 h-16 w-16" />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;