import { component$ } from "@builder.io/qwik";

const services = [
  {
    title: "Front End",
    content:
      "Experience with numerous Front End libraries and frameworks including React, Vue, Angular and Ember.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Cloud",
    content:
      "Develop cloud infrastructure with AWS Lambda, Elastic Beanstalk, Cloudfront, DynamoDB and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Design",
    content:
      "Web Design and asset creation using tools like Sketch and Photoshop.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Backend",
    content:
      "Server side experience with Node.js, Ruby, and Go to build REST and GraphQL API's.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Mobile",
    content:
      "Native application experience with React Native, Swift, and Kotlin as well as responsive Progressive Web Applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Database",
    content:
      "SQL and NOSQL database design and implementation with MySQL, PostgreSQL, Microsoft SQL Server, MongoDB, DynamoDB, and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

export const Services = component$(() => {
  return (
    <section id="services" class="section-dark relative py-20 md:py-32">
      {/* Subtle background glow */}
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />
      </div>

      <div class="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div class="text-center mb-16">
          <h2 class="text-xs tracking-[0.3em] uppercase text-cyan-400 font-medium mb-3">
            What I Do
          </h2>
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Services
          </h3>
          <div class="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6" />
          <p class="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            I build everything from Full Stack applications to single page
            websites to CMS solutions.
          </p>
        </div>

        {/* Service cards */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              class="glass rounded-xl p-6 md:p-8 glow-hover group"
            >
              <div class="w-14 h-14 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-500/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h4 class="text-lg font-semibold text-white mb-3">
                {service.title}
              </h4>
              <p class="text-sm text-slate-400 leading-relaxed">
                {service.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
