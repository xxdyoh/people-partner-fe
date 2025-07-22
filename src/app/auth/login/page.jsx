import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";

function LoginPage() {
    return (
        <fieldset data-transition-page data-animate="enter" className="px-8 w-full [&_input]:w-full fieldset fade-in-up fade-out-up">
            <legend className="text-2xl fieldset-legend">Login</legend>

            <label className="label">Username</label>
            <input type="text" className="input" placeholder="Username" />

            <label className="label">Password</label>
            <input type="text" className="input" placeholder="Name" />

            <TransitionLink href="/admin/dashboard" transitionPageQ="#authLayout" className="btn btn-neutral mt-4 w-full">Login</TransitionLink>
            <span>Didn't have an account yet? <TransitionLink href="/auth/sign-up" className="link link-secondary">Sign Up Here</TransitionLink></span>
        </fieldset>
    );
}

export default LoginPage;