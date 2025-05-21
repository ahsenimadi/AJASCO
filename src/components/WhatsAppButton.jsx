import React from 'react';
    import { motion } from 'framer-motion';
    import { MessageCircle } from 'lucide-react'; 
    import { useLanguage } from '@/context/LanguageContext';

    const WhatsAppButton = ({ phoneNumber }) => {
      const { language } = useLanguage();
      const whatsappUrl = `https://wa.me/${phoneNumber}`;

      return (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </motion.a>
      );
    };

    export default WhatsAppButton;