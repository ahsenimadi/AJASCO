import React, { useEffect } from 'react';
    import { Outlet } from 'react-router-dom';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';
    import WhatsAppButton from '@/components/WhatsAppButton';
    import { motion } from 'framer-motion';
    import { useLanguage } from '@/context/LanguageContext';

    const Layout = () => {
      const { language } = useLanguage();

      useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      }, [language]);

      return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary to-secondary dark:from-gray-900 dark:to-gray-800">
          <Navbar />
          <motion.main
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={language} 
          >
            <Outlet />
          </motion.main>
          <Footer />
          <WhatsAppButton phoneNumber="+966540700504" />
        </div>
      );
    };

    export default Layout;