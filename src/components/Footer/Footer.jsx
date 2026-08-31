import './Footer.css';

const links = [
    ['GitHub', 'https://github.com/ajas01862'],
    ['LinkedIn', 'https://www.linkedin.com/in/muhammed-ajas-p-n'],
    ['Instagram', 'https://www.instagram.com/ajas_1052'],
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div>
                        <a href="#" className="footer-logo">
                            Ajas<span>.</span>
                        </a>

                        <p className="footer-text">
                            Developer · Builder · Always learning.
                        </p>
                    </div>

                    <div className="footer-links">
                        {links.map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {label}
                                <span>↗</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Ajas</span>
                    <span>Built with React</span>
                </div>
            </div>
        </footer>
    );
}
