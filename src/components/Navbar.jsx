import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Sun, Moon } from 'lucide-react';
    import DesktopNav from '@/components/DesktopNav';
    import MobileNav from '@/components/MobileNav';
    import { useLanguage } from '@/context/LanguageContext';
    import { getTranslation } from '@/lib/translations/index';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [darkMode, setDarkMode] = useState(false);
      const { language } = useLanguage(); 
      const t = getTranslation(language);

      const companyLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/2578204a-f8bb-4677-9dc2-53ee4fd76b6e/7d161f59245e7164c544c4ee8d8c7255.jpg";

      const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      return (
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="bg-gradient-to-r from-primary via-white to-secondary dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg sticky top-0 z-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-2">
                <img  alt={t.nav.logoAlt} className="h-12 w-auto" src={companyLogoUrl} />
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 hidden sm:inline">
                  {t.nav.companyName}
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                <DesktopNav language={language} />
                <Button onClick={toggleTheme} variant="ghost" size="icon" className="ml-4 text-foreground hover:text-accent-foreground hover:bg-accent/10 dark:hover:bg-accent/20">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </div>

              <div className="md:hidden flex items-center">
                <Button onClick={toggleTheme} variant="ghost" size="icon" className="mr-2 text-foreground hover:text-accent-foreground hover:bg-accent/10 dark:hover:bg-accent/20">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} language={language} />
              </div>
            </div>
          </div>
        </motion.nav>
      );
    };
    
    export default Navbar;