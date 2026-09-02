import React from 'react';

interface ObjectiveSectionProps {
  title: string;
  description: string;
}

export const ObjectiveSection: React.FC<ObjectiveSectionProps> = ({ title, description }) => {
  if (!description) return null;

  return (
    <>
      <div className="section-header">
        <div className="section-badge">{title}</div>
        <div className="section-line"></div>
      </div>
      <div className="section-content">
        <p className="objective-desc">{description}</p>
      </div>
    </>
  );
};
