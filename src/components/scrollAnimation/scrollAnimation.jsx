import { useEffect, useRef } from 'react';
import './scrollAnimation.css';

export default function ScrollAnimation({
    children,
    className = '',
    threshold = 0.16,
}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                element.classList.toggle('is-visible', entry.isIntersecting);
            },
            { threshold, rootMargin: '0px 0px -6% 0px' },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div ref={ref} className={`scroll-anim ${className}`}>
            {children}
        </div>
    );
}
