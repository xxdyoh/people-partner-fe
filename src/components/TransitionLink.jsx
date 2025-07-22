function TransitionLink({ children, href, className, transitionPageQ, delay = 300, ...props }) {
    return (
        <a href={href} className={className} data-transition-target={transitionPageQ ?? '[data-transition-page="true"]'} data-delay={delay} {...props}>{children}</a>
    );
}

export default TransitionLink;