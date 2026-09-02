import { useState, useEffect } from 'react';
import { cvVietnamese, cvEnglish, cvProfiles } from './data';
import { CVData } from './types/cv';
import { Toolbar } from './components/Toolbar';
import { CVDocument } from './components/CVDocument';
import './styles/index.css';
import './styles/print.css';

export function App() {
  const [currentLang, setCurrentLang] = useState<'vi' | 'en'>('vi');
  const [selectedProfileId, setSelectedProfileId] = useState<string>('cv-vi');

  // Determine active CV data
  const activeCV: CVData = (() => {
    const found = cvProfiles.find((p) => p.id === selectedProfileId);
    if (found && found.language === currentLang) return found;
    return currentLang === 'vi' ? cvVietnamese : cvEnglish;
  })();

  // Handle language switch
  const handleLanguageChange = (lang: 'vi' | 'en') => {
    setCurrentLang(lang);
    setSelectedProfileId(lang === 'vi' ? 'cv-vi' : 'cv-en');
  };

  // Handle profile switch
  const handleProfileChange = (profileId: string) => {
    setSelectedProfileId(profileId);
    const profile = cvProfiles.find((p) => p.id === profileId);
    if (profile) {
      setCurrentLang(profile.language);
    }
  };

  // Update document title for clean PDF export filename
  useEffect(() => {
    const langSuffix = currentLang.toUpperCase();
    document.title = `CV_Nguyen_Duy_Toan_Frontend_Developer_${langSuffix}`;
  }, [currentLang]);

  return (
    <div className="app-container">
      {/* Floating Toolbar (hidden in print mode) */}
      <Toolbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        profiles={cvProfiles}
        selectedProfileId={selectedProfileId}
        onProfileChange={handleProfileChange}
      />

      {/* CV Document (A4 Container) */}
      <CVDocument data={activeCV} />
    </div>
  );
}

export default App;
