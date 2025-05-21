import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube, Send, CalendarCheck2, Building } from 'lucide-react';
    import { useLanguage } from '@/context/LanguageContext';
    import { getTranslation } from '@/lib/translations/index';

    const ContactUsPage = () => {
      const { toast } = useToast();
      const { language } = useLanguage();
      const t = getTranslation(language).contactPage;
      const commonT = getTranslation(language);

      const regionalOffices = [
        { name: t.riyadhName, services: t.riyadhServices, icon: <Building className="h-6 w-6 text-accent" /> },
        { name: t.dammamName, services: t.dammamServices, icon: <Building className="h-6 w-6 text-accent" /> },
        { name: t.jeddahName, services: t.jeddahServices, icon: <Building className="h-6 w-6 text-accent" /> },
        { name: t.alKhobarName, services: t.alKhobarServices, icon: <Building className="h-6 w-6 text-accent" /> },
      ];

      const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        if (!name || !email || !message) {
          toast({
            title: t.toastErrorTitle,
            description: t.toastErrorDescription,
            variant: "destructive",
          });
          return;
        }
        
        console.log({
          name,
          email,
          phone: e.target.phone.value,
          subject: e.target.subject.value,
          message,
        });

        toast({
          title: t.toastSuccessTitle,
          description: t.toastSuccessDescription,
        });
        e.target.reset();
      };

      const ArrowIcon = () => language === 'ar' ? <Send className="transform scale-x-[-1] ms-2 h-5 w-5" /> : <Send className="ml-2 h-5 w-5" />;


      return (
        <div className="py-12 md:py-20 bg-gradient-to-b from-primary to-background dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 md:mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                {language === 'ar' ? <>تواصل <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">معنا</span></> : <>Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Touch</span></>}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.subtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="shadow-xl dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-3xl">{t.formTitle}</CardTitle>
                    <CardDescription>{t.formSubtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">{t.nameLabel}</Label>
                          <Input id="name" name="name" placeholder={t.namePlaceholder} required />
                        </div>
                        <div>
                          <Label htmlFor="email">{t.emailLabel}</Label>
                          <Input id="email" name="email" type="email" placeholder={t.emailPlaceholder} required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">{t.phoneLabel}</Label>
                        <Input id="phone" name="phone" type="tel" placeholder={t.phonePlaceholder} />
                      </div>
                      <div>
                        <Label htmlFor="subject">{t.subjectLabel}</Label>
                        <Input id="subject" name="subject" placeholder={t.subjectPlaceholder} />
                      </div>
                      <div>
                        <Label htmlFor="message">{t.messageLabel}</Label>
                        <Textarea id="message" name="message" placeholder={t.messagePlaceholder} rows={5} required />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                        {t.sendButton} <ArrowIcon />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-8"
              >
                <Card className="shadow-lg dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center"><MapPin className={`${language === 'ar' ? 'ml-3' : 'mr-3'} h-7 w-7 text-accent`} /> {t.locationsTitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{t.locationsSubtitle}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {regionalOffices.map(office => (
                        <div key={office.name} className="p-4 bg-secondary dark:bg-gray-700/50 rounded-lg">
                          <h4 className="font-semibold text-lg text-foreground flex items-center">{office.icon} <span className={`${language === 'ar' ? 'mr-2' : 'ml-2'}`}>{office.name}</span></h4>
                          <p className="text-sm text-muted-foreground">{office.services}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center"><CalendarCheck2 className={`${language === 'ar' ? 'ml-3' : 'mr-3'} h-7 w-7 text-accent`} /> {t.consultationTitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">{t.consultationSubtitle}</p>
                    <ul className={`list-disc ${language === 'ar' ? 'list-inside-rtl' : 'list-inside'} text-muted-foreground space-y-1`}>
                      <li>{t.consultationPoint1}</li>
                      <li>{t.consultationPoint2}</li>
                      <li>{t.consultationPoint3}</li>
                    </ul>
                    <div className="flex items-center space-x-3 pt-2">
                        <Mail className={`w-5 h-5 text-accent ${language === 'ar' ? 'ml-2' : ''}`} />
                        <div className={`${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
                          <p className="text-sm font-medium text-foreground">{commonT.footer.emailInfo}</p>
                          <p className="text-sm font-medium text-foreground">{commonT.footer.emailSupport}</p>
                        </div>
                    </div>
                     <div className="flex items-center space-x-3">
                        <Phone className={`w-5 h-5 text-accent ${language === 'ar' ? 'ml-2' : ''}`} />
                        <div className={`${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
                          <p className="text-sm font-medium text-foreground">{commonT.footer.phonePrimary}</p>
                          <p className="text-sm font-medium text-foreground">{commonT.footer.phoneSecondary}</p>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-16"
            >
              <Card className="shadow-xl dark:bg-gray-800 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className={`${language === 'ar' ? 'ml-3' : 'mr-3'} h-7 w-7 text-accent`} /> {t.mapTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.3651814308137!2d50.21013009999999!3d26.3146721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e9186078b503%3A0x250beb82d8f5eba1!2sAjasco%20Group!5e0!3m2!1sen!2sin!4v1747689912864!5m2!1sen!2sin" 
                      width="100%" 
                      height="450" 
                      style={{ border:0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AJASCO Group Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center py-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground">{t.stayConnectedTitle}</h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                {t.stayConnectedSubtitle}
              </p>
              <div className={`flex justify-center space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={32} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Facebook size={32} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Instagram size={32} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Youtube size={32} /></a>
              </div>
            </motion.section>
          </div>
        </div>
      );
    };

    export default ContactUsPage;