import React from 'react';
import { CVData } from '../types/cv';
import { Header } from './Header';
import { ObjectiveSection } from './ObjectiveSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { EducationSection } from './EducationSection';

interface CVDocumentProps {
  data: CVData;
}

export const CVDocument: React.FC<CVDocumentProps> = ({ data }) => {
  return (
    <div className="cv-page-wrapper">
      <div className="cv-container">
        {/* Header Section */}
        <Header personalInfo={data.personalInfo} labels={data.labels} />

        {/* Career Objective */}
        <ObjectiveSection
          title={data.labels.objective}
          description={data.objective}
        />

        {/* Technical Skills */}
        <SkillsSection
          title={data.labels.skills}
          skills={data.skills}
        />

        {/* Work Experience */}
        <ExperienceSection
          title={data.labels.experience}
          experiences={data.experiences}
          labels={data.labels}
        />

        {/* Education */}
        <EducationSection
          title={data.labels.education}
          education={data.education}
          labels={data.labels}
        />
      </div>
    </div>
  );
};
