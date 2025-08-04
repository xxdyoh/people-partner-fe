import { LogoLight } from "@/components/Logo";
import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";

function IndexPage() {
    return (
        <div id="loginPage" className="bg-white flex flex-col justify-center items-center w-screen h-screen fade-in fade-out">
            <div data-animate="enter" className="flex fade-in-pop-out">
                <LogoLight className="size-52" />
                <div className="flex flex-col justify-center text-8xl font-bold">
                    <div className="text-primary">People</div>
                    <div className="text-secondary">Partner</div>
                </div>
            </div>
            <div data-animate="enter" className="grid grid-cols-2 gap-2 mt-2 w-96 fade-in-up" style={{animationDelay: '0.5s'}}>
                <TransitionLink selector="#loginPage" href="auth/login" className="btn btn-sm btn-outline btn-primary">Login</TransitionLink>
                <TransitionLink selector="#loginPage" href="auth/sign-up" className="btn btn-sm btn-outline btn-secondary">Sign up</TransitionLink>
            </div>
        </div>
    );
}

export default IndexPage;