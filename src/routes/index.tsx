import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/header/Header";
import { MyWork } from "~/components/work/MyWork";
import { Services } from "~/components/services/Services";
import { About } from "~/components/about/About";
import { Contact } from "~/components/contact/Contact";

export default component$(() => {
  return (
    <>
      <Header />
      <MyWork />
      <Services />
      <About />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: "Logan Arnett | Staff Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "Staff Software Engineer building performant user interfaces, scalable cloud infrastructure, and exceptional digital experiences. Experience with React, Node.js, AWS, and more.",
    },
    {
      name: "keywords",
      content:
        "staff software engineer, react, node.js, aws, cloud infrastructure, full stack, web development",
    },
  ],
};
