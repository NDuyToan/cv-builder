import React from 'react';
import { EducationEntry, CVLabels } from '../types/cv';

interface EducationSectionProps {
  title: string;
  education: EducationEntry[];
  labels: CVLabels;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  title,
  education,
  labels,
}) => {
  if (!education || education.length === 0) return null;

  return (
    <>
      <div className="section-header">
        <div className="section-badge">{title}</div>
        <div className="section-line"></div>
      </div>
      <div className="section-content">
        {education.map((edu, index) => (
          <div
            className={`edu-entry ${edu.pageBreakBefore ? 'page-break-before' : ''}`}
            key={index}
          >
            {edu.pageBreakBefore && (
              <div className="page-break-indicator no-print">
                <span>✂ Ngắt trang tại đây (Page Break)</span>
              </div>
            )}
            <div className="edu-top-row">
              <div className="edu-school">{edu.school}</div>
              <div className="edu-date">
                <span className="date-badge">{edu.period}</span>
              </div>
            </div>
            <div className="edu-detail">
              <strong className="edu-field">{labels.major}</strong> {edu.major} ({edu.degree})
              {edu.gpa && (
                <>
                  {' '}&nbsp;|&nbsp; <strong className="edu-field">{labels.gpa}</strong>{' '}
                  <span className="edu-highlight">{edu.gpa}</span>
                </>
              )}
              {edu.grade && (
                <>
                  {' '}&nbsp;|&nbsp; <strong className="edu-field">{labels.grade}</strong>{' '}
                  <span className="edu-highlight">{edu.grade}</span>
                </>
              )}
              {edu.details && <div>{edu.details}</div>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
