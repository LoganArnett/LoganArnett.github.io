import React, { useEffect } from 'react';

import { Navigation } from './Navigation';
import { ScrollToTop } from './ScrollToTop';
import { useOnScroll } from 'hooks';


const Header = () => {
  const scrolled = useOnScroll(80);

  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-large">
        <Navigation scrolled={scrolled} />
        <div className="hero-body is-flex">
          <div className="container has-text-centered is-vcentered">
            <h1 className="subtitle">Hey there, I'm</h1>
            <h2 className="title">Logan</h2>
            <h1 className="subtitle profession">
              A Full Stack Software <br /> and Cloud Engineer
            </h1>
          </div>
        </div>
      </section>
      <ScrollToTop show={scrolled} />
    </div>
  )
};

export default Header;