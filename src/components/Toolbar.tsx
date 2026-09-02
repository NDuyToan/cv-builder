import React from 'react';
import { Printer, Globe, FileText, Palette } from 'lucide-react';
import { CVData } from '../types/cv';

export type ColorTheme = 'ocean' | 'emerald' | 'indigo' | 'charcoal';

interface ToolbarProps {
  currentLang: 'vi' | 'en';
  onLanguageChange: (lang: 'vi' | 'en') => void;
  profiles: CVData[];
  selectedProfileId: string;
  onProfileChange: (profileId: string) => void;
  currentTheme: ColorTheme;
  onThemeChange: (theme: ColorTheme) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  currentLang,
  onLanguageChange,
  profiles,
  selectedProfileId,
  onProfileChange,
  currentTheme,
  onThemeChange,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const themes: { id: ColorTheme; label: string; color: string }[] = [
    { id: 'ocean', label: 'Ocean Navy', color: '#1e3a5f' },
    { id: 'emerald', label: 'Emerald', color: '#064e3b' },
    { id: 'indigo', label: 'Indigo', color: '#312e81' },
    { id: 'charcoal', label: 'Charcoal', color: '#1f2937' },
  ];

  return (
    <div className="toolbar-container no-print">
      {/* Language Toggle */}
      <div className="toolbar-group">
        <Globe size={15} color="#64748b" />
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

      {/* Color Theme Selector */}
      <div className="toolbar-group">
        <Palette size={15} color="#64748b" />
        <div className="theme-switcher">
          {themes.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`theme-dot-btn ${currentTheme === t.id ? 'active' : ''}`}
              onClick={() => onThemeChange(t.id)}
              title={`Màu chủ đạo: ${t.label}`}
            >
              <span className="theme-dot" style={{ backgroundColor: t.color }} />
              <span className="theme-label">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="toolbar-divider" />

      {/* Profile / Company Preset Selector (if there are multiple profiles) */}
      {profiles.length > 2 && (
        <>
          <div className="toolbar-group">
            <FileText size={15} color="#64748b" />
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
        <Printer size={15} />
        <span>{currentLang === 'vi' ? 'In CV / Xuất PDF' : 'Print CV / Export PDF'}</span>
      </button>
    </div>
  );
};
