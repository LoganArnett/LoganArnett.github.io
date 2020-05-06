import * as React from "react";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";

import "./index.css";

const Header = () => (
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
            <div className="navbar-item">
              <a className="navbar-item" href="#home">
                Home
              </a>
            </div>
            <div className="navbar-item">
              <a className="navbar-item" href="#about-me">
                About Me
              </a>
            </div>
            <div className="navbar-item">
              <a className="navbar-item" href="#services">
                Services
              </a>
            </div>
            <div className="navbar-item">
              <a className="navbar-item" href="#skills">
                Skills
              </a>
            </div>
            <div className="navbar-item">
              <a className="navbar-item" href="#my-work">
                My Work
              </a>
            </div>
            <div className="navbar-item">
              <a className="navbar-item" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero-nav">
        <div className="hero-nav--wrapper">
          <div className="columns">
            <div className="column is-12 hero-menu-desktop has-text-centered">
              <ul>
                <li className="is-active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about-me">About Me</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#my-work">My Work</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
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
);

const DefaultLayout: React.FC = (props) => {
  return (
    <>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      />
      <Header />
      <section>{props.children}</section>
    </>
  );
};

export default DefaultLayout;
