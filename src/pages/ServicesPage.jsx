import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { HardHat, Home, Zap, ShieldCheck, Route, ArrowRight } from 'lucide-react';

    const services = [
      { 
        title: "Engineering & Construction", 
        description: "Comprehensive solutions including structural engineering, civil construction, project management, and steel fabrication.", 
        icon: <HardHat className="h-10 w-10 text-accent" />, 
        link: "/services/engineering-construction",
        details: ["Structural Engineering", "Civil Construction", "Project Management", "Steel Fabrication"],
        delay: 0.1 
      },
      { 
        title: "Interior & Fit-Out Solutions", 
        description: "Transforming spaces with interior design for residential & commercial, turnkey fit-out projects, and commercial renovation.", 
        icon: <Home className="h-10 w-10 text-accent" />, 
        link: "/services/interior-fit-out",
        details: ["Interior Designing (Residential & Commercial)", "Turnkey Fit-Out Projects", "Commercial Renovation"],
        delay: 0.2 
      },
      { 
        title: "MEP & Electromechanical", 
        description: "Expert MEP contracting, HVAC solutions, electrical & plumbing services, and BMS installation.", 
        icon: <Zap className="h-10 w-10 text-accent" />, 
        link: "/services/mep",
        details: ["MEP Contracting", "HVAC Solutions", "Electrical & Plumbing Services", "BMS Installation"],
        delay: 0.3 
      },
      { 
        title: "Technology & Security Systems", 
        description: "Advanced building automation, CCTV & surveillance, access control, structured cabling, PA systems, and security integration.", 
        icon: <ShieldCheck className="h-10 w-10 text-accent" />, 
        link: "/services/technology-security",
        details: ["Building Automation", "CCTV & Surveillance", "Access Control", "Structured Cabling", "Public Address Systems", "Security Integration"],
        delay: 0.4 
      },
      { 
        title: "Piping & Infrastructure", 
        description: "Specialized in HDPE, GRP, RTR, FRP piping, underground pipeline construction, overhead transmission lines, RMU installation, and pipeline solutions.", 
        icon: <Route className="h-10 w-10 text-accent" />, 
        link: "/services/piping-infrastructure",
        details: ["HDPE, GRP, RTR, FRP Piping", "Underground Pipeline Construction", "Overhead Transmission Lines", "RMU Installation", "Pipeline Solutions & Maintenance"],
        delay: 0.5 
      },
    ];

    const ServicesPage = () => {
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Comprehensive Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                AJASCO Group offers a diverse range of expert services, tailored to meet the complex demands of modern projects. Explore our capabilities and discover how we can support your vision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: service.delay }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-accent">
                    <CardHeader className="items-center text-center bg-accent/5 dark:bg-accent/10 p-6">
                      <div className="p-4 bg-accent/20 dark:bg-accent/30 rounded-full mb-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                      <CardDescription className="mb-4 text-base">{service.description}</CardDescription>
                      <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside mb-4">
                        {service.details.slice(0,3).map(detail => <li key={detail}>{detail}</li>)}
                        {service.details.length > 3 && <li>And more...</li>}
                      </ul>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Link to={service.link}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Looking for a Specific Solution?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Our team is ready to discuss your unique project requirements. Contact us for a personalized consultation.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </motion.div>

          </div>
        </div>
      );
    };

    export default ServicesPage;