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
          <div className="edu-entry" key={index}>
            <div className="edu-top-row">
              <div className="edu-school">{edu.school}</div>
              <div className="edu-date">{edu.period}</div>
            </div>
            <div className="edu-detail">
              <strong>{labels.major}</strong> {edu.major} ({edu.degree})
              {edu.gpa && (
                <>
                  {' '}&nbsp;|&nbsp; <strong>{labels.gpa}</strong> {edu.gpa}
                </>
              )}
              {edu.grade && (
                <>
                  {' '}&nbsp;|&nbsp; <strong>{labels.grade}</strong> {edu.grade}
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
