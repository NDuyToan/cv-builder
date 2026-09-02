import React from 'react';
import { Printer, Globe, FileText } from 'lucide-react';
import { CVData } from '../types/cv';

interface ToolbarProps {
  currentLang: 'vi' | 'en';
  onLanguageChange: (lang: 'vi' | 'en') => void;
  profiles: CVData[];
  selectedProfileId: string;
  onProfileChange: (profileId: string) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  currentLang,
  onLanguageChange,
  profiles,
  selectedProfileId,
  onProfileChange,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="toolbar-container no-print">
      {/* Language Toggle */}
      <div className="toolbar-group">
        <Globe size={16} color="#64748b" />
        <button
          type="button"
          className={`toolbar-btn ${currentLang === 'vi' ? 'active' : ''}`}
          onClick={() => onLanguageChange('vi')}
          title="Chuyển sang Tiếng Việt"
        >
          🇻🇳 Tiếng Việt
        </button>
        <button
          type="button"
          className={`toolbar-btn ${currentLang === 'en' ? 'active' : ''}`}
          onClick={() => onLanguageChange('en')}
          title="Switch to English"
        >
          🇬🇧 English
        </button>
      </div>

      <div className="toolbar-divider" />

      {/* Profile / Company Preset Selector (if there are multiple profiles) */}
      {profiles.length > 2 && (
        <>
          <div className="toolbar-group">
            <FileText size={16} color="#64748b" />
            <select
              className="profile-select"
              value={selectedProfileId}
              onChange={(e) => onProfileChange(e.target.value)}
              title="Chọn bản CV tùy biến theo công ty"
            >
              {profiles.map((p) => (
                <option key={p.id || p.language} value={p.id || p.language}>
                  {p.title || (p.language === 'vi' ? 'Tiếng Việt' : 'English')}
                </option>
              ))}
            </select>
          </div>
          <div className="toolbar-divider" />
        </>
      )}

      {/* Print Button */}
      <button
        type="button"
        className="toolbar-btn toolbar-btn-print"
        onClick={handlePrint}
        title="In CV hoặc Lưu thành file PDF (Ctrl + P)"
      >
        <Printer size={16} />
        <span>{currentLang === 'vi' ? 'In CV / Xuất PDF' : 'Print CV / Export PDF'}</span>
      </button>
    </div>
  );
};
