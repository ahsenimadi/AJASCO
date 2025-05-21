import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { CheckCircle, Zap, Users, ShieldCheck, ArrowRight } from 'lucide-react';
    import { useLanguage } from '@/context/LanguageContext';
    import { getTranslation, getArabicString } from '@/lib/translations/index';

    const HomePage = () => {
      const { language } = useLanguage();
      const t = getTranslation(language).home;

      const heroVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

      const features = [
        { icon: <ShieldCheck className="h-10 w-10 text-accent" />, title: t.featureReliability, description: t.featureReliabilityDesc },
        { icon: <Zap className="h-10 w-10 text-accent" />, title: t.featureTechExcellence, description: t.featureTechExcellenceDesc },
        { icon: <Users className="h-10 w-10 text-accent" />, title: t.featureCustomerService, description: t.featureCustomerServiceDesc },
        { icon: <CheckCircle className="h-10 w-10 text-accent" />, title: t.featureMultidisciplinary, description: t.featureMultidisciplinaryDesc },
      ];

      const ArrowIcon = () => language === 'ar' ? <ArrowRight className="transform scale-x-[-1] ms-2 h-5 w-5" /> : <ArrowRight className="ml-2 h-5 w-5" />;

      return (
        <div className="text-foreground">
          <motion.section 
            className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-secondary dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
                variants={itemVariants}
              >
                {t.heroTitle1} <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">{t.heroTitle2}</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10"
                variants={itemVariants}
              >
                {t.heroSubtitle}
                <span className="block mt-2 text-base" dir="rtl">{getArabicString('home.heroSubtitle')}</span>
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                variants={itemVariants}
              >
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link to="/services">{t.exploreServices} <ArrowIcon /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary dark:hover:text-gray-900 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link to="/contact">{t.getInTouch}</Link>
                </Button>
              </motion.div>
            </div>
            <div className="absolute -bottom-1/2 left-0 w-full h-1/2 bg-background dark:bg-gray-800 transform skew-y-[-3deg]"></div>
          </motion.section>

          <section className="py-16 md:py-24 bg-background dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.whyChoose}
                  <span className="block mt-1 text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500" dir="rtl">{getArabicString('home.whyChoose')}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.whyChooseSubtitle}</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800/50 dark:border-gray-700">
                      <CardHeader className="items-center">
                        <div className="p-4 bg-accent/10 dark:bg-accent/20 rounded-full mb-4 inline-block">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-primary dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.partnerTitle}</h2>
                  <p className="text-gray-300 mb-6 text-lg">{t.partnerDesc1}</p>
                  <ul className="space-y-3 mb-8">
                    {[t.partnerPoint1, t.partnerPoint2, t.partnerPoint3].map((point, i) => (
                      <li key={i} className="flex items-center text-gray-200">
                        <CheckCircle className="h-6 w-6 text-green-400 mr-3 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-transform duration-300">
                    <Link to="/about">{t.learnMore} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl"
                >
                  <img  alt="AJASCO Group team working on a project" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1671726805768-93b4c260766b" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-background dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {t.readyToStart}
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t.readyToStartDesc}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link to="/contact">{t.scheduleConsultation} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default HomePage;