import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const sections = links
            .map(({ href }) => document.querySelector(href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) setActive(`#${visible.target.id}`);
            },
            { rootMargin: '-35% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.classList.toggle('nav-open', open);

        return () => document.body.classList.remove('nav-open');
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <nav className={`navbar ${open ? 'navbar-open' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo" onClick={closeMenu} aria-label="Ajas home">
                    Ajas<span>.</span>
                </a>

                <div className="nav-links">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={active === link.href ? 'active' : ''}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a className="nav-btn neon-hover" href="#contact" onClick={closeMenu}>
                    Let&apos;s Talk
                    <span>↗</span>
                </a>

                <button
                    className="nav-toggle"
                    type="button"
                    aria-label={open ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                >
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
}
