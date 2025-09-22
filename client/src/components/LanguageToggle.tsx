import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

// Flag SVG components with proper numeric values
const GermanFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg" aria-label="Deutsch">
    <rect width="3" height="0.6667" y="0" fill="#000" />
    <rect width="3" height="0.6667" y="0.6667" fill="#DD0000" />
    <rect width="3" height="0.6666" y="1.3333" fill="#FFCE00" />
  </svg>
);

const EnglishFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-label="English">
    {/* Blue background */}
    <rect width="60" height="30" fill="#012169" />
    {/* White cross base */}
    <rect x="0" y="13" width="60" height="4" fill="#FFF" />
    <rect x="28" y="0" width="4" height="30" fill="#FFF" />
    {/* Diagonal white stripes */}
    <g fill="#FFF">
      <polygon points="0,0 0,6 54,30 60,30 60,24 6,0" />
      <polygon points="0,24 0,30 6,30 60,6 60,0 54,0" />
    </g>
    {/* Red cross */}
    <rect x="0" y="14" width="60" height="2" fill="#C8102E" />
    <rect x="29" y="0" width="2" height="30" fill="#C8102E" />
    {/* Red diagonals */}
    <g fill="#C8102E">
      <polygon points="0,0 0,3 57,30 60,30 60,27 3,0" />
      <polygon points="0,27 0,30 3,30 60,3 60,0 57,0" />
    </g>
  </svg>
);

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || i18n.language;
  const isGerman = currentLang.startsWith('de');

  const switchToGerman = () => {
    i18n.changeLanguage('de');
  };

  const switchToEnglish = () => {
    i18n.changeLanguage('en');
  };

  return (
    <div className="flex items-center gap-1 p-1 bg-background/80 backdrop-blur-sm rounded-lg border" data-testid="language-flags">
      <Button
        variant={isGerman ? "default" : "ghost"}
        size="sm"
        onClick={switchToGerman}
        className="flex items-center gap-2 px-2 py-1 h-8"
        data-testid="button-german-flag"
        aria-label="Switch to German"
      >
        <GermanFlag className="w-5 h-3" />
        <span className="text-xs font-medium">DE</span>
      </Button>
      <Button
        variant={!isGerman ? "default" : "ghost"}
        size="sm"
        onClick={switchToEnglish}
        className="flex items-center gap-2 px-2 py-1 h-8"
        data-testid="button-english-flag"
        aria-label="Switch to English"
      >
        <EnglishFlag className="w-5 h-3" />
        <span className="text-xs font-medium">EN</span>
      </Button>
    </div>
  );
}