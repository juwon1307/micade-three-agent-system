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
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
