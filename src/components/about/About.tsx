import { component$ } from "@builder.io/qwik";
import { getMedia } from "~/helpers/getMedia";

const clientLogos = [
  { name: "Netflix", key: "netflix" },
  { name: "Trolli", key: "trolli" },
  { name: "NHL", key: "nhl" },
  { name: "Verizon", key: "verizon" },
  { name: "Facebook", key: "facebook" },
  { name: "Smirnoff", key: "smirnoff" },
  { name: "Nike", key: "nike" },
  { name: "DirecTV", key: "directv" },
  { name: "Intuit", key: "intuit" },
];

export const About = component$(() => {
  return (
    <section id="about" class="section-darker relative py-20 md:py-32">
      <div class="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div class="text-center mb-16">
          <h2 class="text-xs tracking-[0.3em] uppercase text-cyan-400 font-medium mb-3">
            Background
          </h2>
          <h3 class="text-3xl md:text-4xl font-bold text-white">About Me</h3>
          <div class="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <div>
            <p class="text-lg text-slate-200 font-medium leading-relaxed mb-6">
              Staff Software Engineer with experience at every level of the
              technology stack and cloud infrastructure.
            </p>
            <p class="text-slate-400 leading-relaxed mb-8">
              Worked across industries that include Retail, Events, Hospitality,
              Sports, and Entertainment. Projects have included restaurant
              websites to giant trivia games at the Super Bowl to interactive pop
              up events in Times Square.
            </p>

            <div class="w-full h-px bg-white/5 mb-8" />

            {/* Contact info */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p class="text-xs tracking-[0.2em] uppercase text-slate-500 font-medium mb-2">
                  Give me a ring
                </p>
                <a
                  href="tel:5613025096"
                  class="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  (561) 302-5096
                </a>
              </div>
              <div>
                <p class="text-xs tracking-[0.2em] uppercase text-slate-500 font-medium mb-2">
                  Email Me
                </p>
                <a
                  href="mailto:logan@loganarnett.com"
                  class="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  logan@loganarnett.com
                </a>
              </div>
            </div>
          </div>

          {/* Client logos */}
          <div>
            <p class="text-xs tracking-[0.2em] uppercase text-slate-500 font-medium mb-6 text-center lg:text-left">
              Past Clients Include
            </p>
            <div class="grid grid-cols-3 gap-3">
              {clientLogos.map((client) => (
                <div
                  key={client.key}
                  class="glass rounded-lg flex items-center justify-center p-4 md:p-6 aspect-[4/3] glow-hover"
                >
                  <img
                    src={getMedia(client.key)}
                    alt={client.name}
                    class={[
                      "max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity",
                      client.key === "nhl" ? "w-3/4" : "w-full",
                    ]}
                    width={120}
                    height={80}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
