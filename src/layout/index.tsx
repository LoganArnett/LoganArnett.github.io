import React from "react";
import { Helmet } from "react-helmet";

import Header from './Header';

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
