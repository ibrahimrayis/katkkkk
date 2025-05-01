
import { useState } from 'react';
import { ShoppingCart, User, Shirt } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    // Apply RTL direction for Arabic
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setCurrentLang(code);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shirt className="h-8 w-8 text-kidstore-blue" />
            <span className="text-2xl font-bold text-kidstore-pink animate-wiggle">Kiddie Carton Corner</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">{t('navbar.home')}</a>
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">{t('navbar.shop')}</a>
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">{t('navbar.newArrivals')}</a>
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">{t('navbar.about')}</a>
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">{t('navbar.contact')}</a>
          </div>

          {/* Icons & Language */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-2">
                  <span className="font-semibold">{currentLang.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white rounded-xl shadow-lg p-2">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => changeLanguage(lang.code)}
                    className={`hover:bg-kidstore-green/20 rounded-lg cursor-pointer ${currentLang === lang.code ? 'bg-kidstore-green/10' : ''}`}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5 text-gray-700" />
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-kidstore-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
