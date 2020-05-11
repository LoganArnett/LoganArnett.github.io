import * as React from "react";
import smoothscroll from 'smoothscroll-polyfill';
import "../styles/styles.scss";

import DefaultLayout from "../layouts";

smoothscroll.polyfill();

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const App: React.FC<IndexPageProps> = (props) => (
  <DefaultLayout>
    <div className="main-content">
      <div className="section-dark my-work" id="my-work">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div className="column is-12">
              <h1 className="title has-text-centered section-title">My Work</h1>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{
                    backgroundImage: `url('https://picsum.photos/320/180?image=0')`,
                  }}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{
                    backgroundImage: `url('https://picsum.photos/320/180?image=10')`,
                  }}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{
                    backgroundImage: `url('https://picsum.photos/320/180?image=20')`,
                  }}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{
                    backgroundImage: `url('https://picsum.photos/320/180?image=30')`,
                  }}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{
                    backgroundImage: `url('https://picsum.photos/320/180?image=40')`,
                  }}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{
                    backgroundImage: `url('https://picsum.photos/320/180?image=50')`,
                  }}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{
                    backgroundImage: `url('https://picsum.photos/320/180?image=60')`,
                  }}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{
                    backgroundImage: `url('https://picsum.photos/320/180?image=70')`,
                  }}
                ></figure>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-color services" id="services">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
              <br />
            </div>
            <div className="columns is-12">
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fad fa-meteor fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-paint-brush fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-rocket fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
            </div>
            <hr />
            <div className="columns is-12">
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-upload fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-bus fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-code fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-light about-me" id="about-me">
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
                  Showcase is a modern, beautiful personal website template to
                  showcase who you are, as well as projects you've worked on in
                  the past.
                </strong>
              </p>
              <br />
              <p>
                Showcase was built from the ground up with Bulma to be fast and
                responsive out of the box with all source files well documented
                for easy to customization. The Showcase template gives you a
                personal space to share what you are all about as a creative
                designer, developer, photographer, and more!
              </p>
              <br />
              <div className="is-divider"></div>
              <div className="columns about-links">
                <div className="column">
                  <p className="heading">
                    <strong>Give me a ring</strong>
                  </p>
                  <p className="subheading">123-456-7890</p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p className="subheading">hello@example.com</p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>View my portfolio</strong>
                  </p>
                  <p className="subheading">example.com</p>
                </div>
              </div>
            </div>
            <div className="column is-6 right-image " data-aos="fade-left">
              <img
                className="is-rounded"
                src="https://picsum.photos/id/366/600/375"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-light contact" id="contact">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in-up"
            data-aos-easing="linear"
          >
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                Get in touch
              </h1>
            </div>
            <div className="column is-8 is-offset-2">
              <form
                action="https://formspree.io/email@example.com"
                method="POST"
              >
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Ex. Jane Smith"
                      name="Name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      placeholder="Ex. hello@arctheme.com"
                      name="Email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Textarea"
                      name="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control ">
                    <button className="button submit-button">
                      Submit&nbsp;&nbsp;
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default App;
