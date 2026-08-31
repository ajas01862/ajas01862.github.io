import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiMonitor,
  FiServer,
  FiTool,
  FiZap,
} from 'react-icons/fi';
import './Skills.css';
import ScrollAnimation from '../scrollAnimation/scrollAnimation';

const technologies = [
  {
    number: '01',
    title: 'Backend',
    description: 'APIs, server-side logic and application services.',
    icon: FiServer,
    items: ['Node.js', 'Express', 'REST APIs'],
    featured: true,
  },
  {
    number: '02',
    title: 'Databases',
    description: 'Working with application data and persistence.',
    icon: FiDatabase,
    items: ['MongoDB', 'Firebase', 'Firestore'],
    featured: true,
  },
  {
    number: '03',
    title: 'Frontend',
    description: 'Building interfaces when the product needs them.',
    icon: FiMonitor,
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    number: '04',
    title: 'Automation',
    description: 'Connecting services and automating repetitive workflows.',
    icon: FiZap,
    items: ['APIs', 'Bots', 'WebSockets', 'Scheduling'],
  },
  {
    number: '05',
    title: 'Development',
    description: 'The tools and practices I use to build and maintain projects.',
    icon: FiCode,
    items: ['Git', 'VS Code', 'Postman', 'Electron'],
  },
  {
    number: '06',
    title: 'Currently learning',
    description: 'Technologies and areas I am actively exploring.',
    icon: FiLayers,
    items: ['TypeScript', 'Docker', 'System Design'],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading skills-heading">
          <ScrollAnimation className="section-subtitle">
            Technologies
          </ScrollAnimation>

          <div className="skills-heading-row">
            <ScrollAnimation className="section-title">
              Tools I build with.
            </ScrollAnimation>

            <ScrollAnimation className="skills-intro">
              I work across the stack, with most of my interest around backend
              development, databases and automation. The frontend comes in
              when the product needs it.
            </ScrollAnimation>
          </div>
        </div>

        <div className="skills-system">
          <ScrollAnimation className="skills-primary">
            {technologies.slice(0, 2).map((technology) => {
              const Icon = technology.icon;

              return (
                <article className="skill-item skill-item-featured" key={technology.title}>
                  <div className="skill-item-top">
                    <span>{technology.number}</span>
                    <Icon />
                  </div>

                  <div className="skill-item-content">
                    <h3>{technology.title}</h3>
                    <p>{technology.description}</p>
                  </div>

                  <div className="skill-tags">
                    {technology.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </ScrollAnimation>

          <ScrollAnimation className="skills-secondary">
            {technologies.slice(2).map((technology) => {
              const Icon = technology.icon;

              return (
                <article className="skill-item" key={technology.title}>
                  <div className="skill-item-top">
                    <span>{technology.number}</span>
                    <Icon />
                  </div>

                  <div className="skill-item-content">
                    <h3>{technology.title}</h3>
                    <p>{technology.description}</p>
                  </div>

                  <div className="skill-tags">
                    {technology.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </ScrollAnimation>
        </div>

        <ScrollAnimation className="skills-bottom">
          <div className="skills-bottom-icon">
            <FiGitBranch />
          </div>

          <div>
            <strong>Always learning, always building.</strong>
            <p>
              I prefer learning technologies through real projects rather
              than collecting a long list of tools.
            </p>
          </div>

          <FiTool className="skills-bottom-tool" />
        </ScrollAnimation>
      </div>
    </section>
  );
}