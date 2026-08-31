import './Hero.css';
import ScrollAnimation from '../scrollAnimation/scrollAnimation';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-noise" />

            <div className="container hero-container">
                <div className="hero-left">
                    <ScrollAnimation className="hero-kicker">
                        <span className="hero-kicker-dot" />
                        Developer · Builder · Learner
                    </ScrollAnimation>

                    <ScrollAnimation className="hero-title">
                        Frontend
                        <br />
                        Developer<span>.</span>
                    </ScrollAnimation>

                    <ScrollAnimation className="hero-text">
                        I build modern, responsive, and interactive web applications with
                        React and JavaScript, while exploring backend systems, automation,
                        and everything that makes software useful.
                    </ScrollAnimation>

                    <ScrollAnimation className="hero-buttons">
                        <a className="primary-btn" href="#projects">
                            View Projects
                            <span>↗</span>
                        </a>

                        <a
                            href="/resume.pdf"
                            download="Muhammed-Ajas-P-N-Resume.pdf"
                            className="secondary-btn neon-hover"
                        >
                            Download Resume
                        </a>
                    </ScrollAnimation>

                    <ScrollAnimation className="hero-stats">
                        <div>
                            <strong>02</strong>
                            <span>Selected projects</span>
                        </div>

                        <div>
                            <strong>React</strong>
                            <span>Primary frontend</span>
                        </div>

                        <div>
                            <strong>Node</strong>
                            <span>Backend exploration</span>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="hero-right">
                    <div className="hero-glow" />

                    <ScrollAnimation className="code-card card">
                        <div className="code-header">
                            <div className="code-dots">
                                <span className="red" />
                                <span className="yellow" />
                                <span className="green" />
                            </div>

                            <span className="code-file">developer.js</span>
                            <span className="code-status">● live</span>
                        </div>

                        <div className="code-content">
                            <p>
                                <span className="line-number">01</span>
                                <span className="purple">const</span>{' '}
                                <span className="cyan">developer</span> = {'{'}
                            </p>

                            <p className="pl">
                                <span className="line-number">02</span>
                                name: <span className="orange">&apos;Ajas&apos;</span>,
                            </p>

                            <p className="pl">
                                <span className="line-number">03</span>
                                frontend: <span className="orange">&apos;React&apos;</span>,
                            </p>

                            <p className="pl">
                                <span className="line-number">04</span>
                                backend: <span className="orange">&apos;Node.js&apos;</span>,
                            </p>

                            <p className="pl">
                                <span className="line-number">05</span>
                                database: <span className="orange">&apos;SQL / NoSQL&apos;</span>,
                            </p>

                            <p className="pl">
                                <span className="line-number">06</span>
                                focus: <span className="green-text">&apos;Build & learn&apos;</span>
                            </p>

                            <p>
                                <span className="line-number">07</span>
                                {'}'};
                            </p>

                            <p className="code-comment">
                                <span className="line-number">08</span>
                                // always building something
                            </p>
                        </div>

                        <div className="code-footer">
                            <span>javascript</span>
                            <span>utf-8</span>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
