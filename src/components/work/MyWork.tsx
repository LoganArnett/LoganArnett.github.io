import { component$, useSignal } from "@builder.io/qwik";
import { workItems, type WorkItem } from "~/helpers/work-data";
import { WorkModal } from "./WorkModal";

export const MyWork = component$(() => {
  const modalOpen = useSignal(false);
  const modalData = useSignal<WorkItem | null>(null);

  return (
    <>
      <section id="work" class="section-darker relative py-20 md:py-32">
        <div class="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div class="text-center mb-16">
            <h2 class="text-xs tracking-[0.3em] uppercase text-cyan-400 font-medium mb-3">
              Portfolio
            </h2>
            <h3 class="text-3xl md:text-4xl font-bold text-white">My Work</h3>
            <div class="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
          </div>

          {/* Project grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {workItems.map((w) => (
              <button
                key={w.title}
                onClick$={() => {
                  modalData.value = w;
                  modalOpen.value = true;
                }}
                class="glass rounded-xl overflow-hidden glow-hover cursor-pointer group text-left"
              >
                <div class="relative aspect-video">
                  <div
                    class="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${w.url})`,
                      backgroundPosition: w.centered ? "center" : "left",
                    }}
                  />
                  <div class="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors duration-300" />
                </div>
                <div class="p-4">
                  <p class="text-xs text-slate-400 font-medium truncate">
                    {w.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <WorkModal open={modalOpen} data={modalData} />
    </>
  );
});
