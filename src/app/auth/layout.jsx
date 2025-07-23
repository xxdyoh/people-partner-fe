function AuthLayout({ children }) {
    return (
        <div id="authLayout" data-animate="enter" className="relative flex min-w-screen min-h-screen fade-out fade-in">
            <img src="/assets/img/pexels-jeshoots.jpg" loading="lazy" alt="login background cover" className="h-full w-full absolute object-cover object-top-right" />
            <div className="absolute w-full h-full bg-base-content/70"></div>
            <div className="z-10 flex justify-center items-center min-lg:ml-16 min-md:ml-8 w-96 min-h-full bg-base-100 shrink-0">
                <div className="w-16 h-full bg-primary bg-stripe-diagonal stripe-color-base-content/20"></div>
                <div className="w-full">
                    {children}
                </div>
            </div>
            <div data-animate="enter" className="z-10 flex justify-center items-center w-full min-h-full text-base-100 fade-in-left" style={{animationDelay: '0.3s'}}>
                <div className="mx-16 max-w-2xl text-start">
                    <span className="font-semibold text-5xl">PEOPLE PARTNER SYSTEM</span><br />
                    <span className="opacity-70 text-xl italic">
                        We believe that you as part of our family is the
                        most important people to be managed and taken
                        care of. Allow us to give you great people
                        experience.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;