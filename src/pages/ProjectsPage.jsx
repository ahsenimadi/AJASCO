import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { FolderKanban, ListChecks, FileText, Image, ArrowRight } from 'lucide-react';

    const projectSections = [
      { title: "Ongoing Projects", description: "Discover the projects currently under development by our expert teams.", icon: <ListChecks className="h-8 w-8 text-accent" />, link: "/projects/ongoing", delay: 0.1 },
      { title: "Completed Projects", description: "Explore our portfolio of successfully delivered projects across various sectors.", icon: <FolderKanban className="h-8 w-8 text-accent" />, link: "/projects/completed", delay: 0.2 },
      { title: "Case Studies", description: "In-depth analysis of key projects, highlighting challenges and innovative solutions.", icon: <FileText className="h-8 w-8 text-accent" />, link: "/projects/case-studies", delay: 0.3 },
      { title: "Project Gallery", description: "A visual showcase of our diverse range of completed works and capabilities.", icon: <Image className="h-8 w-8 text-accent" />, link: "/projects/gallery", delay: 0.4 },
    ];

    const ProjectsPage = () => {
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Projects</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Witness the scope and quality of AJASCO Group's work. From ongoing initiatives to landmark completions, our projects demonstrate our commitment to excellence and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {projectSections.map((section) => (
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
                          Explore <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Featured Project Showcase</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                While detailed project pages are under development, we invite you to imagine the scale and impact of our work. Our portfolio spans critical infrastructure, iconic buildings, and advanced technological integrations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <img  alt="Featured Project 1" className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1625990699662-35bbb7241a16" />
                </div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <img  alt="Featured Project 2" className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1605199675551-54b0ddc79f7e" />
                </div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <img  alt="Featured Project 3" className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1682663662767-d983c6cd82a8" />
                </div>
              </div>
              <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">
                  Discuss Your Project Idea
                </Link>
              </Button>
            </motion.section>

          </div>
        </div>
      );
    };

    export default ProjectsPage;