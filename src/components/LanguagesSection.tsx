import React from 'react';
import { LanguageEntry } from '../types/cv';

interface LanguagesSectionProps {
  title: string;
  languages: LanguageEntry[];
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ title, languages }) => {
  const visibleLanguages = (languages || []).filter((lang) => !lang.hidden);
  if (!visibleLanguages || visibleLanguages.length === 0) return null;

  return (
    <>
      <div className="section-header">
        <div className="section-badge">{title}</div>
        <div className="section-line"></div>
      </div>
      <div className="section-content">
        {visibleLanguages.map((item, index) => (
          <div
            className={`lang-entry ${item.pageBreakBefore ? 'page-break-before' : ''}`}
            key={index}
          >
            {item.pageBreakBefore && (
              <div className="page-break-indicator no-print">
                <span>✂ Ngắt trang tại đây (Page Break)</span>
              </div>
            )}
            <div className="lang-top-row">
              <span className="lang-name">{item.language}</span>
              {item.level && (
                <>
                  <span className="lang-divider"> — </span>
                  <span className="lang-level">{item.level}</span>
                </>
              )}
            </div>
            {item.details && item.details.length > 0 && (
              <ul className="bullet-list">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
