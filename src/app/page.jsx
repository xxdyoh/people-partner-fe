import { LogoLight } from "@/components/Logo";
import Link from "next/link";

function IndexPage() {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div data-animate="enter" className="flex fade-in-pop-out">
                <LogoLight className="size-52" />
                <div className="flex flex-col justify-center text-7xl font-bold">
                    <div className="text-primary">People</div>
                    <div className="text-secondary">Partner</div>
                </div>
            </div>
            <div data-animate="enter" className="grid grid-cols-2 gap-2 mt-2 w-96 fade-in-up" style={{animationDelay: '0.5s'}}>
                <Link href="auth/login" className="btn btn-sm btn-outline btn-primary">Login</Link>
                <Link href="auth/register" className="btn btn-sm btn-outline btn-secondary">Sign up</Link>
            </div>
        </div>
    );
}

export default IndexPage;