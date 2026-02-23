import { component$, useVisibleTask$, type Signal } from "@builder.io/qwik";
import type { WorkItem } from "~/helpers/work-data";

interface WorkModalProps {
  open: Signal<boolean>;
  data: Signal<WorkItem | null>;
}

export const WorkModal = component$<WorkModalProps>(({ open, data }) => {
  useVisibleTask$(({ track, cleanup }) => {
    const isOpen = track(() => open.value);
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      cleanup(() => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      });
    }
  });

  if (!open.value || !data.value) return null;

  const { title, description, techStack } = data.value;

  return (
    <div
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick$={(e) => {
        if (e.target === e.currentTarget) {
          open.value = false;
        }
      }}
      style={{
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div class="glass relative max-w-2xl w-full rounded-2xl p-8 md:p-10 max-h-[85vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick$={() => (open.value = false)}
          class="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>

        {title && (
          <h2 class="text-xl md:text-2xl font-semibold text-white mb-4 pr-8">
            {title}
          </h2>
        )}

        <div class="w-12 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />

        {description && (
          <p class="text-slate-300 leading-relaxed text-sm md:text-base mb-6">
            {description}
          </p>
        )}

        {techStack && (
          <>
            <h3 class="text-xs tracking-[0.2em] uppercase text-cyan-400 font-medium mb-3">
              Tech Stack
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed">{techStack}</p>
          </>
        )}
      </div>
    </div>
  );
});
