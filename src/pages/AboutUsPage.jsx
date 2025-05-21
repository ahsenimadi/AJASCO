import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Users, Target, Users2, Briefcase, Award, ArrowRight } from 'lucide-react';

    const aboutSections = [
      { title: "Who We Are", description: "Discover our journey, values, and commitment to excellence.", icon: <Users className="h-8 w-8 text-accent" />, link: "/about/who-we-are", delay: 0.1 },
      { title: "Vision & Mission", description: "Our strategic direction and the principles that guide us.", icon: <Target className="h-8 w-8 text-accent" />, link: "/about/vision-mission", delay: 0.2 },
      { title: "Leadership Team", description: "Meet the experienced professionals leading AJASCO Group.", icon: <Users2 className="h-8 w-8 text-accent" />, link: "/about/leadership-team", delay: 0.3 },
      { title: "Our Clients", description: "A showcase of the esteemed organizations we've partnered with.", icon: <Briefcase className="h-8 w-8 text-accent" />, link: "/about/our-clients", delay: 0.4 },
      { title: "Careers", description: "Explore exciting opportunities to grow with our dynamic team.", icon: <Award className="h-8 w-8 text-accent" />, link: "/about/careers", delay: 0.5 },
    ];

    const AboutUsPage = () => {
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
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">AJASCO Group</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn more about our company, our values, and the dedicated team that drives our success in delivering exceptional multidisciplinary services across Saudi Arabia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {aboutSections.map((section) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: section.delay }}
                >
                  <Card className="h-full flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
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
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Our Commitment to Excellence</h2>
                  <p className="text-muted-foreground mb-4">
                    At AJASCO Group, we are driven by a passion for excellence and a commitment to our clients. Our multidisciplinary approach allows us to offer comprehensive solutions tailored to the unique needs of each project. We believe in building long-lasting relationships based on trust, transparency, and mutual success.
                  </p>
                  <p className="text-muted-foreground">
                    Our team of experts brings together years of experience and innovative thinking to tackle complex challenges and deliver outstanding results. We are proud of our heritage and excited about the future as we continue to contribute to the growth and development of Saudi Arabia.
                  </p>
                </div>
                <div>
                  <img  
                    alt="AJASCO Group team meeting" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                   src="https://images.unsplash.com/photo-1690192079529-9fd57e5b24d0" />
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      );
    };

    export default AboutUsPage;