import React from 'react';
    import { Briefcase, Users, Wrench, FolderKanban, Download, MessageSquare, Building } from 'lucide-react';

    export const navItemsConfig = (t) => [
      { name: t.nav.home, path: '/', icon: <Building className="h-5 w-5" /> },
      { 
        name: t.nav.aboutUs.title, 
        path: '/about', 
        icon: <Users className="h-5 w-5" />,
        subItems: [
          { title: t.nav.aboutUs.whoWeAre, href: "/about/who-we-are", description: t.nav.aboutUs.whoWeAreDesc },
          { title: t.nav.aboutUs.visionMission, href: "/about/vision-mission", description: t.nav.aboutUs.visionMissionDesc },
          { title: t.nav.aboutUs.leadershipTeam, href: "/about/leadership-team", description: t.nav.aboutUs.leadershipTeamDesc },
          { title: t.nav.aboutUs.ourClients, href: "/about/our-clients", description: t.nav.aboutUs.ourClientsDesc },
          { title: t.nav.aboutUs.careers, href: "/about/careers", description: t.nav.aboutUs.careersDesc },
        ]
      },
      { 
        name: t.nav.services.title, 
        path: '/services', 
        icon: <Wrench className="h-5 w-5" />,
        subItems: [
          { title: t.nav.services.engineeringConstruction, href: "/services/engineering-construction", description: t.nav.services.engineeringConstructionDesc },
          { title: t.nav.services.interiorFitOut, href: "/services/interior-fit-out", description: t.nav.services.interiorFitOutDesc },
          { title: t.nav.services.mep, href: "/services/mep", description: t.nav.services.mepDesc },
          { title: t.nav.services.technologySecurity, href: "/services/technology-security", description: t.nav.services.technologySecurityDesc },
          { title: t.nav.services.pipingInfrastructure, href: "/services/piping-infrastructure", description: t.nav.services.pipingInfrastructureDesc },
        ]
      },
      { 
        name: t.nav.projects.title, 
        path: '/projects', 
        icon: <FolderKanban className="h-5 w-5" />,
        subItems: [
          { title: t.nav.projects.ongoing, href: "/projects/ongoing", description: t.nav.projects.ongoingDesc },
          { title: t.nav.projects.completed, href: "/projects/completed", description: t.nav.projects.completedDesc },
          { title: t.nav.projects.caseStudies, href: "/projects/case-studies", description: t.nav.projects.caseStudiesDesc },
          { title: t.nav.projects.gallery, href: "/projects/gallery", description: t.nav.projects.galleryDesc },
        ]
      },
      { 
        name: t.nav.media.title, 
        path: '/media', 
        icon: <Briefcase className="h-5 w-5" />,
        subItems: [
          { title: t.nav.media.newsUpdates, href: "/media/news-updates", description: t.nav.media.newsUpdatesDesc },
          { title: t.nav.media.blog, href: "/media/blog", description: t.nav.media.blogDesc },
          { title: t.nav.media.events, href: "/media/events", description: t.nav.media.eventsDesc },
          { title: t.nav.media.pressReleases, href: "/media/press-releases", description: t.nav.media.pressReleasesDesc },
        ]
      },
      { 
        name: t.nav.downloads.title, 
        path: '/downloads', 
        icon: <Download className="h-5 w-5" />,
        subItems: [
          { title: t.nav.downloads.companyProfile, href: "/downloads/company-profile", description: t.nav.downloads.companyProfileDesc },
          { title: t.nav.downloads.brochures, href: "/downloads/brochures", description: t.nav.downloads.brochuresDesc },
          { title: t.nav.downloads.techSpecs, href: "/downloads/technical-specifications", description: t.nav.downloads.techSpecsDesc },
          { title: t.nav.downloads.safetyPolicies, href: "/downloads/safety-policies", description: t.nav.downloads.safetyPoliciesDesc },
        ]
      },
      { name: t.nav.contactUs, path: '/contact', icon: <MessageSquare className="h-5 w-5" /> },
    ];