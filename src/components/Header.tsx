import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { PersonalInfo, CVLabels } from '../types/cv';

interface HeaderProps {
  personalInfo: PersonalInfo;
  labels: CVLabels;
}

export const Header: React.FC<HeaderProps> = ({ personalInfo, labels }) => {
  const { name, roleTitle, avatarUrl, contact } = personalInfo;

  return (
    <div className="header-section">
      <div className="header-left">
        <h1 className="name-title">{name}</h1>
        <div className="role-title">{roleTitle}</div>

        <div className="contact-grid">
          {contact.phone && (
            <div className="contact-item">
              <span className="contact-label">
                <Phone size={13} className="contact-icon" />
                <span>{labels.phone}</span>
              </span>
              <span className="contact-value">{contact.phone}</span>
            </div>
          )}

          {contact.email && (
            <div className="contact-item">
              <span className="contact-label">
                <Mail size={13} className="contact-icon" />
                <span>{labels.email}</span>
              </span>
              <span className="contact-value">
                <a href={`mailto:${contact.email}`} className="cv-link">
                  {contact.email}
                </a>
              </span>
            </div>
          )}

          {contact.address && (
            <div className="contact-item">
              <span className="contact-label">
                <MapPin size={13} className="contact-icon" />
                <span>{labels.address}</span>
              </span>
              <span className="contact-value">{contact.address}</span>
            </div>
          )}

          {contact.linkedin && (
            <div className="contact-item">
              <span className="contact-label">
                <Linkedin size={13} className="contact-icon" />
                <span>{labels.linkedin}</span>
              </span>
              <span className="contact-value">
                <a
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-link"
                >
                  {contact.linkedin.label}
                </a>
              </span>
            </div>
          )}

          {contact.github && (
            <div className="contact-item">
              <span className="contact-label">
                <Github size={13} className="contact-icon" />
                <span>{labels.github}</span>
              </span>
              <span className="contact-value">
                <a
                  href={contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-link"
                >
                  {contact.github.label}
                </a>
              </span>
            </div>
          )}

          {contact.website && (
            <div className="contact-item">
              <span className="contact-label">
                <Globe size={13} className="contact-icon" />
                <span>Website:</span>
              </span>
              <span className="contact-value">
                <a
                  href={contact.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-link"
                >
                  {contact.website.label}
                </a>
              </span>
            </div>
          )}
        </div>
      </div>

      {avatarUrl && (
        <div className="header-right">
          <div className="avatar-box">
            <img src={avatarUrl} alt={name} />
          </div>
        </div>
      )}
    </div>
  );
};
