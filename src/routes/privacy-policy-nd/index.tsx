import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="section-dark min-h-screen pt-24 pb-20">
      <div class="max-w-3xl mx-auto px-6">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p class="text-sm text-slate-500 mb-10">
          Last updated: February 23, 2026
        </p>

        <div class="glass rounded-2xl p-8 md:p-10 space-y-8 text-slate-300 text-sm leading-relaxed">
          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Overview</h2>
            <p>
              This website (<a href="https://loganarnett.com" class="text-cyan-400 hover:underline">loganarnett.com</a>)
              is a personal portfolio site operated by Logan Arnett. Your privacy
              is important, and this site is designed with a no data collection
              approach.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-white mb-3">
              Information We Collect
            </h2>
            <p>
              <strong class="text-white">We do not collect any personal data.</strong>{" "}
              This site does not use cookies, analytics, tracking pixels, or any
              other mechanism to collect, store, or process personal information
              about visitors.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Contact Form</h2>
            <p>
              This site includes a contact form that allows you to voluntarily
              send a message. When you submit the form, the information you
              provide (name, email address, and message) is transmitted directly
              for the sole purpose of responding to your inquiry. This
              information is not stored in any database, sold, or shared with
              third parties.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Cookies</h2>
            <p>
              This site does not set or use any cookies, including first-party
              or third-party cookies.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-white mb-3">
              Third-Party Services
            </h2>
            <p>
              This site is hosted using AWS (Amazon Web Services) and may load
              fonts from Google Fonts. These services may collect minimal
              technical information (such as IP addresses) as part of standard
              web delivery. Please refer to their respective privacy policies
              for details:
            </p>
            <ul class="list-disc list-inside mt-3 space-y-1 text-slate-400">
              <li>
                <a
                  href="https://aws.amazon.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-cyan-400 hover:underline"
                >
                  AWS Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-cyan-400 hover:underline"
                >
                  Google Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-white mb-3">
              Children's Privacy
            </h2>
            <p>
              This site is not directed at children under the age of 13 and does
              not knowingly collect any information from children.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-white mb-3">
              Changes to This Policy
            </h2>
            <p>
              This policy may be updated from time to time. Any changes will be
              reflected on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-semibold text-white mb-3">Contact</h2>
            <p>
              If you have questions about this privacy policy, you can reach out
              at{" "}
              <a
                href="mailto:logan@loganarnett.com"
                class="text-cyan-400 hover:underline"
              >
                logan@loganarnett.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy | Logan Arnett",
  meta: [
    {
      name: "description",
      content: "Privacy policy for loganarnett.com — no data collection.",
    },
  ],
};
