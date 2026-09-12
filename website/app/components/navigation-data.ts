export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationGroup = {
  label: string;
  href: string;
  items?: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      {
        label: "Software & Web Development",
        href: "/solutions#software-web-development",
        description: "Websites and software experiences for practical business needs.",
      },
      {
        label: "AI & Automation",
        href: "/solutions#ai-automation",
        description: "Responsible automation for repetitive work and better workflows.",
      },
      {
        label: "Digital Marketing & Growth",
        href: "/solutions#digital-marketing-growth",
        description: "Digital presence, content, and growth systems.",
      },
      {
        label: "Technology Consulting",
        href: "/solutions#technology-consulting",
        description: "Clear guidance for technology decisions and implementation.",
      },
    ],
  },
  {
    label: "Academy",
    href: "/academy",
    items: [
      {
        label: "Courses",
        href: "/academy#courses",
        description: "Structured learning paths for practical digital skills.",
      },
      {
        label: "Training Programs",
        href: "/academy#training-programs",
        description: "Focused training for teams, founders, and learners.",
      },
      {
        label: "Workshops",
        href: "/academy#workshops",
        description: "Hands-on sessions for technology and digital growth.",
      },
      {
        label: "Learning Resources",
        href: "/academy#learning-resources",
        description: "Guides and material to support continuous learning.",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      {
        label: "Blog",
        href: "/resources#blog",
        description: "Practical thinking on technology and digital growth.",
      },
      {
        label: "Guides & Tutorials",
        href: "/resources#guides-tutorials",
        description: "Step-by-step learning for useful digital action.",
      },
      {
        label: "Downloads",
        href: "/resources#downloads",
        description: "Templates and useful material as the library grows.",
      },
      {
        label: "Insights",
        href: "/resources#insights",
        description: "Observations from software, AI, marketing, and education.",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
