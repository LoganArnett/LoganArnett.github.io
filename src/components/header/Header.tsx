import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <section
      id="home"
      class="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
    >
      {/* Animated background orbs */}
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[120px] animate-pulse-glow" />
        <div
          class="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.07] blur-[120px] animate-pulse-glow"
          style="animation-delay: 2s"
        />
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/[0.05] blur-[100px] animate-pulse-glow"
          style="animation-delay: 4s"
        />
        {/* Grid pattern */}
        <div class="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      {/* Content */}
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p class="text-sm md:text-base tracking-[0.3em] uppercase text-slate-400 font-light mb-4">
          Hey there, I'm
        </p>
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text mb-6 leading-tight">
          Logan
        </h1>
        <div class="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6" />
        <p class="text-lg md:text-xl tracking-[0.2em] uppercase text-slate-300 font-light">
          A Staff Software Engineer
        </p>
        <p class="mt-4 text-sm md:text-base text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
          Building performant interfaces, scalable cloud infrastructure, and
          exceptional digital experiences.
        </p>

        {/* Scroll indicator */}
        <div class="mt-16 md:mt-24 flex flex-col items-center gap-2 animate-bounce">
          <span class="text-[10px] tracking-[0.3em] uppercase text-slate-600">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            class="text-slate-600"
          >
            <path
              d="M7.29 23.71a1 1 0 001.42 0l5.66-5.66a1 1 0 00-1.42-1.42L8 21.59l-4.95-4.96a1 1 0 00-1.42 1.42l5.66 5.66zM7 0v23h2V0H7z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
});
