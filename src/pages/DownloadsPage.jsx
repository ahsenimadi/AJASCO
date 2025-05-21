import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { FileText, Book, Shield, Settings2, DownloadCloud } from 'lucide-react';

    const downloadSections = [
      { title: "Company Profile (PDF)", description: "Get a comprehensive overview of AJASCO Group, our history, services, and values.", icon: <FileText className="h-8 w-8 text-accent" />, link: "/downloads/company-profile", delay: 0.1 },
      { title: "Brochures & Catalogs", description: "Explore detailed information about our specific services and product offerings.", icon: <Book className="h-8 w-8 text-accent" />, link: "/downloads/brochures", delay: 0.2 },
      { title: "Technical Specifications", description: "Access technical datasheets and specifications for our products and solutions.", icon: <Settings2 className="h-8 w-8 text-accent" />, link: "/downloads/technical-specifications", delay: 0.3 },
      { title: "Safety Policies", description: "Review our commitment to safety, including our policies and procedures.", icon: <Shield className="h-8 w-8 text-accent" />, link: "/downloads/safety-policies", delay: 0.4 },
    ];

    const DownloadsPage = () => {
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
                Resource <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Downloads</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Access valuable resources from AJASCO Group. Download company profiles, brochures, technical specifications, and safety policies to learn more about our operations and offerings.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {downloadSections.map((section) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: section.delay }}
                >
                  <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-accent">
                    <CardHeader className="items-center text-center bg-accent/5 dark:bg-accent/10 p-6">
                       <div className="p-4 bg-accent/20 dark:bg-accent/30 rounded-full mb-3">
                        {section.icon}
                      </div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow p-6 text-center">
                      <CardDescription className="mb-4 text-base">{section.description}</CardDescription>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Link to={section.link}>
                          Download <DownloadCloud className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-xl text-center"
            >
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Can't Find What You're Looking For?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                If you need specific information or documents not listed here, please don't hesitate to contact us. Our team will be happy to assist you.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">
                  Contact Support
                </Link>
              </Button>
            </motion.section>

          </div>
        </div>
      );
    };

    export default DownloadsPage;