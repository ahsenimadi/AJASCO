import React from 'react';
    import { Link } from 'react-router-dom';
    import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useLanguage } from '@/context/LanguageContext';
    import { getTranslation } from '@/lib/translations/index';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      const { language } = useLanguage();
      const t = getTranslation(language);

      return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <p className="text-xl font-semibold text-white mb-4">{t.footer.companyName}</p>
                <p className="text-sm mb-4">
                  {t.footer.description}
                </p>
                <img  alt={t.footer.logoAlt} className="h-12 w-auto opacity-80" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/2578204a-f8bb-4677-9dc2-53ee4fd76b6e/7d161f59245e7164c544c4ee8d8c7255.jpg" />
              </div>

              <div>
                <p className="text-lg font-semibold text-white mb-4">{t.footer.quickLinks}</p>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="hover:text-accent transition-colors">{t.footer.aboutUs}</Link></li>
                  <li><Link to="/services" className="hover:text-accent transition-colors">{t.footer.services}</Link></li>
                  <li><Link to="/projects" className="hover:text-accent transition-colors">{t.footer.projects}</Link></li>
                  <li><Link to="/contact" className="hover:text-accent transition-colors">{t.footer.contactUs}</Link></li>
                  <li><Link to="/downloads/company-profile" className="hover:text-accent transition-colors">{t.footer.companyProfile}</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-white mb-4">{t.footer.contactInfo}</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Mail className={`w-5 h-5 mt-1 text-accent flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                    <div>
                      <p>{t.footer.emailInfo}</p>
                      <p>{t.footer.emailSupport}</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className={`w-5 h-5 text-accent flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                    <div>
                      <p>{t.footer.phonePrimary}</p>
                      <p>{t.footer.phoneSecondary}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className={`w-5 h-5 mt-1 text-accent flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} />
                    <span>{t.footer.address}</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-white mb-4">{t.footer.stayConnected}</p>
                <div className={`flex space-x-4 mb-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={24} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={24} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={24} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><Youtube size={24} /></a>
                </div>
                <p className="text-sm mb-2">{t.footer.subscribeNewsletter}</p>
                <form className="flex">
                  <input type="email" placeholder={t.footer.yourEmail} className={`bg-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm w-full ${language === 'ar' ? 'rounded-r-md' : 'rounded-l-md'}`} />
                  <Button type="submit" variant="default" className={`bg-accent hover:bg-accent/90 text-accent-foreground px-4 text-sm ${language === 'ar' ? 'rounded-l-md' : 'rounded-r-md'}`}>
                    {t.footer.subscribe}
                  </Button>
                </form>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p>&copy; {currentYear} {t.footer.copyright}</p>
              <p>{t.footer.website} <a href="http://www.ajascogroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">www.ajascogroup.com</a></p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;