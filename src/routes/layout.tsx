import { component$, Slot } from "@builder.io/qwik";
import { Navigation } from "~/components/navigation/Navigation";
import { ScrollToTop } from "~/components/scroll-to-top/ScrollToTop";

export default component$(() => {
  return (
    <>
      <Navigation />
      <main>
        <Slot />
      </main>
      <ScrollToTop />
    </>
  );
});
