import React from "react";
import { graphql } from 'gatsby';
import "../styles/styles.scss";

import DefaultLayout from "../layout";
import { About, Contact, MyWork, Services } from '../components';

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
    <main className="main-content">
      <MyWork />
      <Services />
      <About />
      <Contact />
    </main>
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
