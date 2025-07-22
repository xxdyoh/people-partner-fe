'use client';

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function LinkInterceptor
() {
    const router = useRouter();
    useEffect(() => {
        function handleLinkClick(e) {
            const link = e.target.closest('a[data-transition-target]');
            if (!link) return;
            e.preventDefault();


            if ((link.href === '') || (link.pathname === window.location.pathname)) return;
            
            

            if ((link.dataset.transitionTarget != '')) {
                const transitionTarget = document.querySelector(link.dataset.transitionTarget);
                if (transitionTarget) {
                    transitionTarget.dataset.animate = 'exit';
                }
            }


            setTimeout(() => {
                router.push(link.href);
            }, link.dataset.delay);
        }

        window.addEventListener('click', handleLinkClick);

        return () => {
            window.removeEventListener('click', handleLinkClick);
        };
    }, []);
    return (null);
}

export default LinkInterceptor
;