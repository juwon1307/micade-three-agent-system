"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationGroups, type NavigationGroup } from "./navigation-data";

function pathFromHref(href: string) {
  return href.split("#")[0];
}

function isActiveGroup(pathname: string, group: NavigationGroup) {
  const groupPath = pathFromHref(group.href);

  if (groupPath === "/") {
    return pathname === "/";
  }

  return pathname === groupPath || pathname.startsWith(`${groupPath}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDesktopMenu(null);
    setActiveMobileMenu(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-locked", mobileOpen);
    return () => document.body.classList.remove("mobile-nav-locked");
  }, [mobileOpen]);

  return (
    <header className={scrolled ? "site-header site-header-scrolled" : "site-header"}>
      <a className="wordmark nav-wordmark" href="/" aria-label="Micade Techie home" onClick={closeMenus}>
        <span>Micade</span>
        <strong>Techie</strong>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigationGroups.map((group) => {
          const active = isActiveGroup(pathname, group);

          if (!group.items?.length) {
            return (
              <a className="nav-link" href={group.href} aria-current={active ? "page" : undefined} key={group.label}>
                {group.label}
              </a>
            );
          }

          const expanded = activeDesktopMenu === group.label;

          return (
            <div
              className="nav-dropdown"
              key={group.label}
              onMouseEnter={() => setActiveDesktopMenu(group.label)}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button
                className="nav-link nav-dropdown-trigger"
                type="button"
                aria-expanded={expanded}
                aria-controls={`desktop-menu-${group.label.toLowerCase()}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setActiveDesktopMenu(expanded ? null : group.label)}
              >
                {group.label}
                <span aria-hidden="true">v</span>
              </button>
              <div
                className="nav-dropdown-menu"
                id={`desktop-menu-${group.label.toLowerCase()}`}
                data-open={expanded ? "true" : "false"}
              >
                <a className="nav-dropdown-overview" href={group.href} onClick={closeMenus}>
                  <strong>{group.label} overview</strong>
                  <span>Explore the full {group.label.toLowerCase()} area.</span>
                </a>
                {group.items.map((item) => (
                  <a href={item.href} className="nav-dropdown-item" key={item.label} onClick={closeMenus}>
                    <strong>{item.label}</strong>
                    {item.description ? <span>{item.description}</span> : null}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      <a className="button nav-cta" href="/contact" onClick={closeMenus}>
        Let's Work Together
      </a>

      <button
        className="menu-toggle premium-menu-toggle"
        type="button"
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMobileOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div className="mobile-nav-panel" id="mobile-navigation" data-open={mobileOpen ? "true" : "false"}>
        <nav className="mobile-nav" aria-label="Mobile primary navigation">
          {navigationGroups.map((group) => {
            const active = isActiveGroup(pathname, group);
            const expanded = activeMobileMenu === group.label;

            if (!group.items?.length) {
              return (
                <a className="mobile-nav-link" href={group.href} aria-current={active ? "page" : undefined} key={group.label} onClick={closeMenus}>
                  {group.label}
                </a>
              );
            }

            return (
              <div className="mobile-nav-group" key={group.label}>
                <button
                  className="mobile-nav-link mobile-nav-trigger"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`mobile-menu-${group.label.toLowerCase()}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setActiveMobileMenu(expanded ? null : group.label)}
                >
                  {group.label}
                  <span aria-hidden="true">+</span>
                </button>
                <div className="mobile-submenu" id={`mobile-menu-${group.label.toLowerCase()}`} data-open={expanded ? "true" : "false"}>
                  <a href={group.href} onClick={closeMenus}>View {group.label}</a>
                  {group.items.map((item) => (
                    <a href={item.href} key={item.label} onClick={closeMenus}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
        <a className="button mobile-nav-cta" href="/contact" onClick={closeMenus}>
          Let's Work Together
        </a>
        <div className="mobile-nav-future" aria-label="Future Micade navigation areas">
          <span>Future-ready for Products, Community, Careers, Documentation, Client Portal, and Student Dashboard.</span>
        </div>
      </div>
    </header>
  );
}
