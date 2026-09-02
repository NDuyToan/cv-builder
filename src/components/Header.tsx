import React from 'react';
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
            <>
              <span className="label">{labels.phone}</span>
              <span>{contact.phone}</span>
            </>
          )}

          {contact.email && (
            <>
              <span className="label">{labels.email}</span>
              <span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </span>
            </>
          )}

          {contact.address && (
            <>
              <span className="label">{labels.address}</span>
              <span>{contact.address}</span>
            </>
          )}

          {contact.linkedin && (
            <>
              <span className="label">{labels.linkedin}</span>
              <span>
                <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer">
                  {contact.linkedin.label}
                </a>
              </span>
            </>
          )}

          {contact.github && (
            <>
              <span className="label">{labels.github}</span>
              <span>
                <a href={contact.github.url} target="_blank" rel="noopener noreferrer">
                  {contact.github.label}
                </a>
              </span>
            </>
          )}

          {contact.website && (
            <>
              <span className="label">Website:</span>
              <span>
                <a href={contact.website.url} target="_blank" rel="noopener noreferrer">
                  {contact.website.label}
                </a>
              </span>
            </>
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
