import './Projects.css';
import ScrollAnimation from '../scrollAnimation/scrollAnimation';

const projects = [
    {
        title: 'Chat App',
        category: 'Real-time application',
        status: 'Public',
        description:
            'A one-to-one messaging application with Firebase authentication, real-time Firestore messaging, presence, typing indicators, read receipts and emoji support.',
        tech: ['React', 'Firebase', 'Firestore', 'Cloudinary'],
        github: 'https://github.com/ajas01862/chat-app',
        accent: 'cyan',
        type: 'chat',
    },
    {
        title: 'POS System',
        category: 'Business software',
        status: 'Private',
        description:
            'A point-of-sale system built for practical retail workflows, with product, sales, inventory and day-to-day business operations.',
        tech: ['React', 'Node.js', 'Database', 'POS'],
        github: null,
        accent: 'violet',
        type: 'pos',
    },
];

function ChatPreview() {
    return (
        <div className="project-preview project-preview-chat">
            <div className="preview-sidebar">
                <span className="preview-user active" />
                <span className="preview-user" />
                <span className="preview-user" />
                <span className="preview-user" />
            </div>

            <div className="preview-chat">
                <div className="preview-chat-header">
                    <span className="preview-avatar" />
                    <div>
                        <b />
                        <small />
                    </div>
                </div>

                <div className="preview-messages">
                    <span className="message left" />
                    <span className="message right" />
                    <span className="message left short" />
                </div>

                <div className="preview-input">
                    <span />
                    <i />
                </div>
            </div>
        </div>
    );
}

function PosPreview() {
    return (
        <div className="project-preview project-preview-pos">
            <div className="preview-pos-nav">
                <span className="pos-brand" />
                <span />
                <span />
                <span />
                <span />
            </div>

            <div className="preview-pos-main">
                <div className="preview-pos-top">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="preview-pos-content">
                    <div className="preview-pos-table">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="preview-pos-side">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectVisual({ project }) {
    return (
        <div className={`project-visual project-visual-${project.accent}`}>
            <div className="project-visual-grid" />

            <div className="project-visual-label">
                <span>{project.status}</span>
                <span>0{project.type === 'chat' ? 1 : 2}</span>
            </div>

            <div className="project-window">
                <div className="project-window-bar">
                    <div>
                        <i />
                        <i />
                        <i />
                    </div>
                    <span>{project.type === 'chat' ? 'chat.app' : 'pos.system'}</span>
                    <em>↗</em>
                </div>

                {project.type === 'chat' ? <ChatPreview /> : <PosPreview />}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <div className="section-heading projects-heading">
                    <ScrollAnimation className="section-subtitle">Selected work</ScrollAnimation>

                    <div className="projects-heading-row">
                        <ScrollAnimation className="section-title">
                            Things I&apos;ve built.
                        </ScrollAnimation>

                        <ScrollAnimation className="projects-intro">
                            A small selection of work I&apos;m comfortable putting forward.
                            Some projects are public, while others are kept private.
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ScrollAnimation
                            className={`project-card card project-card-${project.accent}`}
                            key={project.title}
                        >
                            <ProjectVisual project={project} />

                            <div className="project-content">
                                <div className="project-meta">
                                    <span>{project.category}</span>
                                    <span className={project.status === 'Private' ? 'private' : 'public'}>
                                        {project.status}
                                    </span>
                                </div>

                                <h2 className="project-title">{project.title}</h2>

                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tech.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-action">
                                    {project.github ? (
                                        <a
                                            className="primary-btn"
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on GitHub
                                            <span>↗</span>
                                        </a>
                                    ) : (
                                        <span className="private-label">
                                            Private repository
                                        </span>
                                    )}
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation className="projects-bottom">
                    <span>Only selected work is shown here.</span>

                    <a
                        href="https://github.com/ajas01862"
                        target="_blank"
                        rel="noreferrer"
                    >
                        More on GitHub ↗
                    </a>
                </ScrollAnimation>
            </div>
        </section>
    );
}
