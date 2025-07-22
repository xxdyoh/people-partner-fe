import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";

function SignUpPage() {
    return (
        <fieldset data-transition-page data-animate="enter" className="px-8 w-full [&_input]:w-full fieldset fade-in-up fade-out-up">
            <legend className="text-2xl fieldset-legend">Sign Up</legend>

            <label className="label">Username</label>
            <input type="text" className="input" placeholder="Username" />

            <label className="label">Password</label>
            <input type="text" className="input" placeholder="Name" />

            <Link href="" className="btn btn-neutral mt-4 w-full">Sign Up</Link>

            <span>Already have an account? <TransitionLink href="/auth/login" className="link link-secondary">Login Here</TransitionLink></span>
        </fieldset>
    );
}

export default SignUpPage;