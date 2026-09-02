import React from 'react';
import { SkillCategory } from '../types/cv';

interface SkillsSectionProps {
  title: string;
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <>
      <div className="section-header">
        <div className="section-badge">{title}</div>
        <div className="section-line"></div>
      </div>
      <div className="section-content">
        <table className="skills-table">
          <tbody>
            {skills.map((skillGroup, index) => (
              <tr key={index}>
                <td className="skill-cat">{skillGroup.category}</td>
                <td className="skill-items">{skillGroup.items.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
