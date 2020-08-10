import React, { FC, useEffect, useState } from 'react';

import { ScrollLink } from '../components';
import { navLinks } from '../helpers';
import { useBreakpoints } from 'hooks';

interface NavItemProps {
  href: string;
  onClick?: () => void;
}

const MobileNavbarItem: FC<NavItemProps> = ({ href, children, onClick }) => (
  <div className="navbar-item" onClick={onClick}>
    <a className="navbar-item" href={href}>
      {children}
    </a>
  </div>
)

const NavbarItem: FC<NavItemProps> = ({ href, children }) => (
  <li>
    <ScrollLink href={href}>{children}</ScrollLink>
  </li>
)

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation: FC<NavigationProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { screen }: any = useBreakpoints();

  useEffect(() => {
    if (screen !== 'xs') {
      setMobileMenuOpen(false);
    }
  }, [screen])

  return (
    <>
      <nav className="navbar is-transparent is-hidden-desktop">
        <div className="navbar-brand">
          <div className={`navbar-burger burger ${mobileMenuOpen ? 'is-active' : ''}`} data-target="mobile-nav" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="mobile-nav" className={`navbar-menu ${mobileMenuOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {navLinks.map((link, i) => (<MobileNavbarItem key={`mobile-link-${i}`} href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.title}</MobileNavbarItem>))}
          </div>
        </div>
      </nav>
      <div id="main-nav" className={`hero-nav ${scrolled ? 'opacity' : ''} white`}>
        <div className="hero-nav--wrapper">
          <div className="columns">
            <div className="column is-12 hero-menu-desktop has-text-centered">
              <ul>
                {navLinks.map((link, i) => (<NavbarItem key={`link-${i}`} href={link.href}>{link.title}</NavbarItem>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};