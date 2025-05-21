import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X, ChevronDown } from 'lucide-react';
    import { navItemsConfig } from '@/config/navConfig';
    import { getTranslation } from '@/lib/translations/index';
    import { cn } from '@/lib/utils';

    const MobileDropdownNavItem = ({ item, setIsOpen, language }) => {
      const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
      const t = getTranslation(language);
    
      return (
        <div>
          <button
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent/10 hover:text-accent-foreground dark:hover:bg-accent/20"
          >
            <span className="flex items-center space-x-3">
              {item.icon}
              <span>{item.name}</span>
            </span>
            <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''} ${language === 'ar' ? 'ms-auto' : 'me-auto'}`} />
          </button>
          <AnimatePresence>
            {isSubMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={cn("mt-1 space-y-1", language === 'ar' ? "pr-6" : "pl-6")}
              >
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.href}
                    onClick={() => { setIsOpen(false); setIsSubMenuOpen(false); }}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent/5 hover:text-accent-foreground dark:hover:bg-accent/10"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    };

    const MobileNav = ({ isOpen, setIsOpen, language }) => {
      const t = getTranslation(language);
      const navItems = navItemsConfig(t);

      return (
        <>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-accent-foreground hover:bg-accent/10 dark:hover:bg-accent/20"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-20 left-0 right-0 md:hidden bg-background dark:bg-gray-800 shadow-lg pb-3"
                style={{ zIndex: 40 }} 
              >
                <div className="px-2 pt-2 space-y-1 sm:px-3">
                  {navItems.map((item) => (
                    item.subItems ? (
                      <MobileDropdownNavItem key={item.name} item={item} setIsOpen={setIsOpen} language={language} />
                    ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent/10 hover:text-accent-foreground dark:hover:bg-accent/20"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                    )
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      );
    };

    export default MobileNav;