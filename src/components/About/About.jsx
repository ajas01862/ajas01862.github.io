import './About.css';
import ScrollAnimation from '../scrollAnimation/scrollAnimation';

const principles = [
    ['01', 'Build useful', 'I prefer practical software over projects made only to look impressive.'],
    ['02', 'Keep learning', 'I like understanding how things work and improving as I build.'],
    ['03', 'Solve problems', 'The interesting part is usually figuring out the problem first.'],
    ['04', 'Make it better', 'After something works, there is always room to make it cleaner.'],
];

export default function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-heading">
                    <ScrollAnimation className="section-subtitle">About</ScrollAnimation>

                    <ScrollAnimation className="section-title">
                        I like building things that are actually useful.
                    </ScrollAnimation>
                </div>

                <div className="about-grid">
                    <ScrollAnimation className="about-card card">
                        <span className="about-label">A little about me</span>

                        <p className="about-description">
                            I&apos;m a developer who enjoys turning ideas and everyday problems
                            into working software. I spend a lot of time with React and
                            JavaScript, and I&apos;m increasingly interested in backend systems,
                            databases, automation, and the parts of an application that make
                            everything work together.
                        </p>

                        <p className="about-description about-secondary">
                            I&apos;m still learning, experimenting, and figuring things out.
                            That&apos;s part of what I enjoy about development.
                        </p>
                    </ScrollAnimation>

                    <div className="about-principles">
                        {principles.map(([number, title, description]) => (
                            <ScrollAnimation className="about-principle card" key={number}>
                                <span>{number}</span>

                                <div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
