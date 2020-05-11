import React, { FC, useEffect } from 'react';

import { ScrollLink } from '../components';
import { navLinks } from '../helpers';

interface NavItemProps {
  href: string;
}

const MobileNavbarItem: FC<NavItemProps> = ({ href, children }) => (
  <div className="navbar-item">
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

const Header = () => {
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("main-nav").style.background = "rgba(255,255,255,0.5)";
    } else {
      document.getElementById("main-nav").style.background = "white";
    }
  }
  useEffect(() => {
    window.onscroll = function() {scrollFunction()};

  }, []);
  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-large">
        <nav className="navbar is-transparent is-hidden-desktop">
          <div className="navbar-brand">
            <div className="navbar-burger burger" data-target="mobile-nav">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="mobile-nav" className="navbar-menu">
            <div className="navbar-end">
              {navLinks.map(link => (<MobileNavbarItem href={link.href}>{link.title}</MobileNavbarItem>))}
            </div>
          </div>
        </nav>
        <div id="main-nav" className="hero-nav">
          <div className="hero-nav--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  {navLinks.map(link => (<NavbarItem href={link.href}>{link.title}</NavbarItem>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="subtitle">Hey there, I'm</h1>
            <h2 className="title">Logan</h2>
            <h1 className="subtitle profession">
              A Full Stack Software <br /> and Cloud Engineer
            </h1>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Header;