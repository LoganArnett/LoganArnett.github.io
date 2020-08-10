import React from "react";
import { Helmet } from "react-helmet";

import Header from './Header';

const DefaultLayout: React.FC = (props) => {
  return (
    <>
      <Helmet
        title="Logan Arnett | Software Engineer"
        meta={[
          { name: "description", content: "Software and Cloud Engineer who develops performant user interfaces and excellent user experiences. Utilizes microservices and serverless architecture for the API layer." },
          { name: "keywords", content: "react, reactjs, react.js, node, nodejs, node.js, software engineer, amazon web services, aws lambda, serverless, microservices, api, sql, nosql, dynamodb" },
        ]}
      />
      <Header />
      <section>{props.children}</section>
    </>
  );
};

export default DefaultLayout;
