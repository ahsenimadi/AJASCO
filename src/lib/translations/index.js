import navTranslations from './navTranslations';
    import footerTranslations from './footerTranslations';
    import homePageTranslations from './homePageTranslations';
    import contactPageTranslations from './contactPageTranslations';

    const translations = {
      en: {
        nav: navTranslations.en,
        footer: footerTranslations.en,
        home: homePageTranslations.en,
        contactPage: contactPageTranslations.en,
      },
      ar: { 
        nav: { ...navTranslations.en, ...navTranslations.ar }, // Merge English base with Arabic specifics
        footer: { ...footerTranslations.en, ...footerTranslations.ar },
        home: { ...homePageTranslations.en, ...homePageTranslations.ar },
        contactPage: { ...contactPageTranslations.en, ...contactPageTranslations.ar },
      }
    };

    export const getTranslation = (language) => {
      // Default to English if the requested language or its keys are not fully available
      const langData = translations[language] || translations.en;
      
      // Ensure all top-level keys from 'en' are present, falling back to 'en' if a key is missing in 'ar'
      if (language === 'ar') {
        const enKeys = Object.keys(translations.en);
        const arLangData = { ...translations.en }; // Start with English as a base

        enKeys.forEach(key => {
          if (translations.ar[key]) {
            // If the key exists in 'ar', merge its sub-properties with 'en' sub-properties
            // This ensures that if 'ar' only defines a few sub-properties, the rest are taken from 'en'
            arLangData[key] = { ...translations.en[key], ...translations.ar[key] };
          } else {
            // If the key doesn't exist in 'ar' at all, use the 'en' version for that key
            arLangData[key] = translations.en[key];
          }
        });
        return arLangData;
      }
      
      return langData;
    };

    export const getArabicString = (key, fallbackKey) => {
        const keys = key.split('.');
        let currentAr = translations.ar;
        for (const k of keys) {
            if (currentAr && typeof currentAr === 'object' && k in currentAr) {
                currentAr = currentAr[k];
            } else {
                currentAr = null; // Path not found in Arabic
                break;
            }
        }

        if (typeof currentAr === 'string') {
            return currentAr;
        }

        // Fallback to English if Arabic string not found or not a string
        const enKeys = (fallbackKey || key).split('.');
        let currentEn = translations.en;
        for (const ek of enKeys) {
            if (currentEn && typeof currentEn === 'object' && ek in currentEn) {
                currentEn = currentEn[ek];
            } else {
                return fallbackKey || key; // Return the key itself if not found in English either
            }
        }
        return typeof currentEn === 'string' ? currentEn : (fallbackKey || key);
    };