import React from 'react';
    import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
    import { AnimatePresence, motion } from 'framer-motion';
    import { LanguageProvider } from '@/context/LanguageContext';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import AboutUsPage from '@/pages/AboutUsPage';
    import ServicesPage from '@/pages/ServicesPage';
    import ProjectsPage from '@/pages/ProjectsPage';
    import MediaPage from '@/pages/MediaPage';
    import DownloadsPage from '@/pages/DownloadsPage';
    import ContactUsPage from '@/pages/ContactUsPage';
    import { Toaster } from '@/components/ui/toaster';

    // Placeholder sub-pages for About Us
    const WhoWeAre = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Who We Are</h1><p>Content coming soon...</p></div>;
    const VisionMission = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Vision & Mission</h1><p>Content coming soon...</p></div>;
    const LeadershipTeam = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Leadership Team</h1><p>Content coming soon...</p></div>;
    const OurClients = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Our Clients</h1><p>Content coming soon...</p></div>;
    const Careers = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Careers</h1><p>Content coming soon...</p></div>;

    // Placeholder sub-pages for Services
    const EngineeringConstruction = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Engineering & Construction</h1><p>Content coming soon...</p></div>;
    const InteriorFitOut = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Interior & Fit-Out Solutions</h1><p>Content coming soon...</p></div>;
    const MEP = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">MEP & Electromechanical</h1><p>Content coming soon...</p></div>;
    const TechnologySecurity = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Technology & Security Systems</h1><p>Content coming soon...</p></div>;
    const PipingInfrastructure = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Piping & Infrastructure</h1><p>Content coming soon...</p></div>;

    // Placeholder sub-pages for Projects
    const OngoingProjects = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Ongoing Projects</h1><p>Content coming soon...</p></div>;
    const CompletedProjects = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Completed Projects</h1><p>Content coming soon...</p></div>;
    const CaseStudies = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Case Studies</h1><p>Content coming soon...</p></div>;
    const ProjectGallery = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Project Gallery</h1><p>Content coming soon...</p></div>;
    
    // Placeholder sub-pages for Media
    const NewsUpdates = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">News & Updates</h1><p>Content coming soon...</p></div>;
    const Blog = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Blog / Industry Insights</h1><p>Content coming soon...</p></div>;
    const Events = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Events</h1><p>Content coming soon...</p></div>;
    const PressReleases = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Press Releases</h1><p>Content coming soon...</p></div>;

    // Placeholder sub-pages for Downloads
    const CompanyProfile = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Company Profile</h1><p>Content coming soon...</p></div>;
    const Brochures = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Brochures & Catalogs</h1><p>Content coming soon...</p></div>;
    const TechSpecs = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Technical Specifications</h1><p>Content coming soon...</p></div>;
    const SafetyPolicies = () => <div className="container mx-auto py-12 px-4"><h1 className="text-3xl font-bold">Safety Policies</h1><p>Content coming soon...</p></div>;


    const pageVariants = {
      initial: { opacity: 0, y: 20 },
      in: { opacity: 1, y: 0 },
      out: { opacity: 0, y: -20 },
    };

    const pageTransition = {
      type: 'tween',
      ease: 'anticipate',
      duration: 0.5,
    };

    function AnimatedRoutes() {
      const location = useLocation();
      return (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><HomePage /></motion.div>} />
              <Route path="about" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><AboutUsPage /></motion.div>} />
              <Route path="about/who-we-are" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><WhoWeAre /></motion.div>} />
              <Route path="about/vision-mission" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><VisionMission /></motion.div>} />
              <Route path="about/leadership-team" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><LeadershipTeam /></motion.div>} />
              <Route path="about/our-clients" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><OurClients /></motion.div>} />
              <Route path="about/careers" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Careers /></motion.div>} />
              
              <Route path="services" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ServicesPage /></motion.div>} />
              <Route path="services/engineering-construction" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><EngineeringConstruction /></motion.div>} />
              <Route path="services/interior-fit-out" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><InteriorFitOut /></motion.div>} />
              <Route path="services/mep" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><MEP /></motion.div>} />
              <Route path="services/technology-security" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><TechnologySecurity /></motion.div>} />
              <Route path="services/piping-infrastructure" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><PipingInfrastructure /></motion.div>} />

              <Route path="projects" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ProjectsPage /></motion.div>} />
              <Route path="projects/ongoing" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><OngoingProjects /></motion.div>} />
              <Route path="projects/completed" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><CompletedProjects /></motion.div>} />
              <Route path="projects/case-studies" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><CaseStudies /></motion.div>} />
              <Route path="projects/gallery" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ProjectGallery /></motion.div>} />
              
              <Route path="media" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><MediaPage /></motion.div>} />
              <Route path="media/news-updates" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><NewsUpdates /></motion.div>} />
              <Route path="media/blog" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Blog /></motion.div>} />
              <Route path="media/events" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Events /></motion.div>} />
              <Route path="media/press-releases" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><PressReleases /></motion.div>} />

              <Route path="downloads" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><DownloadsPage /></motion.div>} />
              <Route path="downloads/company-profile" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><CompanyProfile /></motion.div>} />
              <Route path="downloads/brochures" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Brochures /></motion.div>} />
              <Route path="downloads/technical-specifications" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><TechSpecs /></motion.div>} />
              <Route path="downloads/safety-policies" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><SafetyPolicies /></motion.div>} />
              
              <Route path="contact" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><ContactUsPage /></motion.div>} />
            </Route>
          </Routes>
        </AnimatePresence>
      );
    }
    
    function App() {
      return (
        <LanguageProvider>
          <Router>
            <AnimatedRoutes />
            <Toaster />
          </Router>
        </LanguageProvider>
      );
    }

    export default App;