import React from 'react';
import { faAws, faNodeJs, faReact, faSketch } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';

import { ServiceIcon } from './ServiceIcon';

export const Services = () => (
  <section className="section-color dark services" id="services">
    <div className="container">
      <div className="columns is-multiline">
        <div
          className="column is-12 about-me"
          data-aos="fade-in"
          data-aos-easing="linear"
        >
          <h1 className="title has-text-centered section-title">
            Services
          </h1>

          <h2 className="subtitle">
            I build everything from Full Stack applications to single page websites to CMS solutions.
          </h2>
          <br />
        </div>
        <div className="columns is-12">
          <ServiceIcon icon={faReact} content="Experience with numerous Front End libraries and frameworks including React, Vue, Angular and Ember." />
          <ServiceIcon icon={faAws} content="Develop cloud infrastructure with AWS Lambda, Elastic Beanstalk, Cloudfront, DynamoDB and more." />
          <ServiceIcon icon={faSketch} content="Web Design and asset creation using tools like Sketch and Photoshop." />
        </div>
        <hr />
        <div className="columns is-12">
          <ServiceIcon icon={faNodeJs} content="Server side experience with Node.js, Ruby, and Go to build REST and GraphQL API's." />
          <ServiceIcon icon={faMobileAlt} content="Native application experience with React Native, Swift, and Kotlin as well as responsive Progressive Web Applications." />
          <ServiceIcon icon={faDatabase} content="SQL and NOSQL database design and implementation with MySQL, PostgreSQL, Microsoft SQL Server, MongoDB, DynamoDB, and more." />
        </div>
      </div>
    </div>
  </section>
)
