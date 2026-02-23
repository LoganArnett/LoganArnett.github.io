import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { navLinks } from "~/helpers/navigation";

export const Navigation = component$(() => {
  const scrolled = useSignal(false);
  const mobileOpen = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    const onScroll = () => {
      scrolled.value = window.scrollY > 80;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanup(() => window.removeEventListener("scroll", onScroll));
  });

  const scrollTo = $((href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    mobileOpen.value = false;
  });

  return (
    <>
      {/* Desktop navigation */}
      <nav
        class={[
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled.value ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent",
        ]}
      >
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick$={() => scrollTo("#home")}
            class="text-sm font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors hidden md:block"
          >
            LA
          </button>

          {/* Desktop links */}
          <ul class="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick$={() => scrollTo(link.href)}
                  class="text-xs font-medium tracking-[0.15em] uppercase text-slate-400 hover:text-cyan-400 transition-colors duration-200 relative group"
                >
                  {link.title}
                  <span class="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-200 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick$={() => (mobileOpen.value = !mobileOpen.value)}
            class="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              class={[
                "w-6 h-px bg-slate-300 transition-all duration-300",
                mobileOpen.value && "rotate-45 translate-y-[4px]",
              ]}
            />
            <span
              class={[
                "w-6 h-px bg-slate-300 transition-all duration-300",
                mobileOpen.value && "opacity-0",
              ]}
            />
            <span
              class={[
                "w-6 h-px bg-slate-300 transition-all duration-300",
                mobileOpen.value && "-rotate-45 -translate-y-[4px]",
              ]}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        class={[
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          mobileOpen.value
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ]}
        style={{
          background: "rgba(10, 14, 26, 0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick$={() => scrollTo(link.href)}
            class="text-2xl font-light tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {link.title}
          </button>
        ))}
      </div>
    </>
  );
});
