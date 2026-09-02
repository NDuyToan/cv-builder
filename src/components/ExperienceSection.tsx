import React from 'react';
import { ExperienceEntry, CVLabels } from '../types/cv';

interface ExperienceSectionProps {
  title: string;
  experiences: ExperienceEntry[];
  labels: CVLabels;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title,
  experiences,
  labels,
}) => {
  if (!experiences || experiences.length === 0) return null;

  return (
    <>
      <div className="section-header">
        <div className="section-badge">{title}</div>
        <div className="section-line"></div>
      </div>
      <div className="section-content">
        {experiences.map((exp, expIdx) => (
          <div className="exp-entry" key={expIdx}>
            <div className="exp-top-row">
              <div className="exp-company-role">
                <span className="company">{exp.company}</span>
                {exp.role && (
                  <>
                    {' '}— <span className="role">{exp.role}</span>
                  </>
                )}
              </div>
              <div className="exp-date">{exp.period}</div>
            </div>

            {/* If the experience has standalone description and bullets (e.g. Personal Projects) */}
            {(exp.description || (exp.bullets && exp.bullets.length > 0)) && (
              <div className="proj-item">
                {exp.description && <p className="proj-desc">{exp.description}</p>}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="bullet-list">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* If the experience has project entries */}
            {exp.projects &&
              exp.projects.map((proj, projIdx) => (
                <React.Fragment key={projIdx}>
                  <div className="proj-item">
                    <div className="proj-header">
                      <div className="proj-name">
                        {labels.project} {proj.name}
                      </div>
                      {(proj.teamSize || proj.link) && (
                        <div className="proj-meta">
                          {proj.teamSize && (
                            <span>
                              {labels.teamSize} {proj.teamSize}
                            </span>
                          )}
                          {proj.teamSize && proj.link && <span> &nbsp;|&nbsp; </span>}
                          {proj.link && (
                            <a
                              href={proj.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {proj.link.label}
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {proj.description && (
                      <p className="proj-desc">
                        <strong>{labels.description}</strong> {proj.description}
                      </p>
                    )}

                    {proj.responsibilities && proj.responsibilities.length > 0 && (
                      <>
                        <div className="proj-resp-title">{labels.responsibilities}</div>
                        <ul className="bullet-list">
                          {proj.responsibilities.map((resp, respIdx) => (
                            <li key={respIdx}>{resp}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {proj.technologies && proj.technologies.length > 0 && (
                      <div className="tech-stack-row">
                        <strong>{labels.technologies}</strong>{' '}
                        {proj.technologies.join(', ')}
                        {proj.productUrl && (
                          <>
                            {' '}
                            | <strong>{labels.product}</strong>{' '}
                            <a
                              href={proj.productUrl.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {proj.productUrl.label}
                            </a>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Sub divider between projects inside the same company */}
                  {exp.projects && projIdx < exp.projects.length - 1 && (
                    <hr className="proj-sub-divider" />
                  )}
                </React.Fragment>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};
