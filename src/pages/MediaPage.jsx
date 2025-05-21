import React from 'react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Newspaper, BookOpen, CalendarDays, MonitorSpeaker as Announce, ArrowRight } from 'lucide-react';

    const mediaSections = [
      { title: "News & Updates", description: "Stay informed with the latest happenings and announcements from AJASCO Group.", icon: <Newspaper className="h-8 w-8 text-accent" />, link: "/media/news-updates", delay: 0.1 },
      { title: "Blog / Industry Insights", description: "Read expert articles, industry trends, and thought leadership pieces from our team.", icon: <BookOpen className="h-8 w-8 text-accent" />, link: "/media/blog", delay: 0.2 },
      { title: "Events", description: "Find out about upcoming industry events, webinars, and conferences we're participating in.", icon: <CalendarDays className="h-8 w-8 text-accent" />, link: "/media/events", delay: 0.3 },
      { title: "Press Releases", description: "Access official statements, media kits, and communications from AJASCO Group.", icon: <Announce className="h-8 w-8 text-accent" />, link: "/media/press-releases", delay: 0.4 },
    ];

    const MediaPage = () => {
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
                Media & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the latest news, insightful articles, event updates, and press releases from AJASCO Group. Stay connected with our journey and industry perspectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {mediaSections.map((section) => (
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
                          Discover More <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500">Stay Updated</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Follow us on our social media channels and subscribe to our newsletter to get the latest updates directly in your inbox. AJASCO Group is committed to sharing valuable insights and company news with our community.
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Follow on LinkedIn</Button>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">Subscribe Newsletter</Button>
              </div>
            </motion.section>

          </div>
        </div>
      );
    };

    export default MediaPage;