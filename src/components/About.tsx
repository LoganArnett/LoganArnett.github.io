import React from 'react';

import { getMedia } from 'helpers';
import { useBreakpoints } from 'hooks';

export const About = () => {
  const { screen }: any = useBreakpoints();

  return (
  <section className="section-light about-me" id="about">
    <div className="container">
      <div className="column is-12 about-me">
  <h1 className="title has-text-centered section-title">About Me</h1>
      </div>
      <div className="columns is-multiline">
        <div
          className="column is-6 has-vertically-aligned-content"
          data-aos="fade-right"
        >
          <p className="is-larger">
            &emsp;&emsp;
            <strong>
              Software Engineer with experience at every level of the technology stack and cloud infrastructure.
            </strong>
          </p>
          <br />
          <p>
            Worked across industries that include Retail, Events, Hospitality, Sports, and Entertainment. Projects have included restaurant websites to giant trivia games at the Super Bowl to interactive pop up events in Times Square.
          </p>
          <br />
          <div className="is-divider"></div>
          <div className="columns about-links">
            <div className="column">
              <p className="heading">
                <strong>Give me a ring</strong>
              </p>
              <p className="subheading"><a href="tel:5613025096">(561) 302-5096</a></p>
            </div>
            <div className="column">
              <p className="heading">
                <strong>Email Me</strong>
              </p>
              <p className="subheading"><a href="mailto:logan@loganarnett.com">logan@loganarnett.com</a></p>
            </div>
          </div>
        </div>
        <div className="column is-6 right-image" data-aos="fade-left">
          <h3>Past Clients Include:</h3>
          <div className="tile is-ancestor">
            <div className={`tile is-parent ${screen === 'sm' ? 'is-flex flex-logo' : 'is-vertical'}`}>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('netflix')} alt='Netflix' />
              </article>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('trolli')} alt='Trolli' />
              </article>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('nhl')} alt='NHL' className="nhl" />
              </article>
            </div>
            <div className={`tile is-parent ${screen === 'sm' ? 'is-flex flex-logo' : 'is-vertical'}`}>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('verizon')} alt='Verizon' />
              </article>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('facebook')} alt='Facebook' />
              </article>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('smirnoff')} alt='Smirnoff' />
              </article>
            </div>
            <div className={`tile is-parent ${screen === 'sm' ? 'is-flex flex-logo' : 'is-vertical'}`}>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('nike')} alt='Nike' />
              </article>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('directv')} alt='DirecTV' />
              </article>
              <article className="logo-wrapper tile is-child notification">
                <img src={getMedia('intuit')} alt='Intuit' />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}
