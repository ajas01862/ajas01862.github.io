import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi';
import './Contact.css';
import ScrollAnimation from '../scrollAnimation/scrollAnimation';

const contacts = [
  {
    label: 'Email',
    value: 'ajas01862@gmail.com',
    href: 'mailto:ajas01862@gmail.com?subject=Portfolio%20Inquiry',
    icon: FiMail,
  },
  {
    label: 'WhatsApp',
    value: 'Start a conversation',
    href: 'https://wa.me/918848198984?text=Hi%20Ajas%21%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20talk',
    icon: FiMessageCircle,
  },
  {
    label: 'GitHub',
    value: 'ajas01862',
    href: 'https://github.com/ajas01862',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/muhammed-ajas-p-n',
    icon: FiLinkedin,
  },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <ScrollAnimation className="contact-box card">
          <div className="contact-header">
            <div className="contact-eyebrow">
              <span className="contact-status" />
              Contact
            </div>

            <span className="contact-index">05 / 05</span>
          </div>

          <div className="contact-main">
            <div className="contact-copy">
              <h2 className="contact-title">
                Let&apos;s make
                <br />
                something useful.
              </h2>

              <p className="contact-description">
                Have a project, an idea, or something you think could be
                built better? Send me a message. I&apos;m always interested
                in working on something worth building.
              </p>
            </div>

            <div className="contact-links">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    className="contact-link"
                    href={contact.href}
                    target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    key={contact.label}
                  >
                    <span className="contact-link-icon">
                      <Icon />
                    </span>

                    <span className="contact-link-info">
                      <small>{contact.label}</small>
                      <strong>{contact.value}</strong>
                    </span>

                    <span className="contact-link-arrow">
                      <FiArrowUpRight />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact-bottom">
            <span>Open to interesting conversations</span>

            <span className="contact-line">
              <i />
              Available
            </span>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}