import React from 'react';
import { ExternalLink } from 'lucide-react';
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
          <div
            className={`exp-entry ${exp.pageBreakBefore ? 'page-break-before' : ''}`}
            key={expIdx}
          >
            {exp.pageBreakBefore && (
              <div className="page-break-indicator no-print">
                <span>✂ Ngắt trang tại đây (Page Break)</span>
              </div>
            )}

            <div className="exp-top-row">
              <div className="exp-company-role">
                <span className="company">{exp.company}</span>
                {exp.role && (
                  <>
                    {' '}— <span className="role">{exp.role}</span>
                  </>
                )}
              </div>
              <div className="exp-date">
                <span className="date-badge">{exp.period}</span>
              </div>
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
                  <div
                    className={`proj-item ${
                      proj.pageBreakBefore ? 'page-break-before' : ''
                    }`}
                  >
                    {proj.pageBreakBefore && (
                      <div className="page-break-indicator no-print">
                        <span>✂ Ngắt trang tại đây (Page Break)</span>
                      </div>
                    )}

                    <div className="proj-header">
                      <div className="proj-name">
                        <span className="proj-label">{labels.project}</span>{' '}
                        <span className="proj-title">{proj.name}</span>
                      </div>
                      {(proj.teamSize || proj.link) && (
                        <div className="proj-meta">
                          {proj.teamSize && (
                            <span className="team-size-badge">
                              {labels.teamSize} {proj.teamSize}
                            </span>
                          )}
                          {proj.teamSize && proj.link && <span> &nbsp; </span>}
                          {proj.link && (
                            <a
                              href={proj.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cv-link inline-link"
                            >
                              <span>{proj.link.label}</span>
                              <ExternalLink size={9} className="link-icon" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {proj.description && (
                      <p className="proj-desc">
                        <strong className="desc-title">{labels.description}</strong> {proj.description}
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
                        <strong className="tech-title">{labels.technologies}</strong>{' '}
                        <span className="tech-list">{proj.technologies.join(', ')}</span>
                        {proj.productUrl && (
                          <>
                            {' '}
                            | <strong className="tech-title">{labels.product}</strong>{' '}
                            <a
                              href={proj.productUrl.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cv-link inline-link"
                            >
                              <span>{proj.productUrl.label}</span>
                              <ExternalLink size={9} className="link-icon" />
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
