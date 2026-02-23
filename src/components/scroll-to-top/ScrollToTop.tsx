import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";

export const ScrollToTop = component$(() => {
  const show = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    const onScroll = () => {
      show.value = window.scrollY > 400;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanup(() => window.removeEventListener("scroll", onScroll));
  });

  const scrollToTop = $(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <button
      onClick$={scrollToTop}
      aria-label="Scroll to top"
      class={[
        "fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300",
        "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/20",
        "shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20",
        show.value
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      ]}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        class="rotate-180"
      >
        <path
          d="M7.29 15.71a1 1 0 001.42 0l5.66-5.66a1 1 0 00-1.42-1.42L8 13.59 3.05 8.64a1 1 0 00-1.42 1.42l5.66 5.65zM7 0v15h2V0H7z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
});
