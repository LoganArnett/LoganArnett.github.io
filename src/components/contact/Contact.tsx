import { component$, useSignal, $ } from "@builder.io/qwik";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const Contact = component$(() => {
  const name = useSignal("");
  const email = useSignal("");
  const content = useSignal("");
  const status = useSignal<"idle" | "sending" | "sent" | "error">("idle");

  const submitForm = $(async () => {
    if (
      !name.value.trim() ||
      !email.value.trim() ||
      !content.value.trim() ||
      !emailRegex.test(email.value)
    ) {
      return;
    }

    status.value = "sending";
    try {
      await fetch(
        "https://ll16g93wte.execute-api.us-east-1.amazonaws.com/production/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.value,
            email: email.value,
            content: content.value,
          }),
        },
      );
      status.value = "sent";
      name.value = "";
      email.value = "";
      content.value = "";
    } catch {
      status.value = "error";
    }
  });

  return (
    <section id="contact" class="section-dark relative py-20 md:py-32">
      {/* Background glow */}
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>

      <div class="relative max-w-2xl mx-auto px-6">
        {/* Section header */}
        <div class="text-center mb-12">
          <h2 class="text-xs tracking-[0.3em] uppercase text-cyan-400 font-medium mb-3">
            Reach Out
          </h2>
          <h3 class="text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h3>
          <div class="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Form */}
        <div class="glass rounded-2xl p-6 md:p-10">
          <div class="space-y-5">
            <div>
              <label class="block text-xs tracking-[0.15em] uppercase text-slate-400 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                value={name.value}
                onInput$={(e) =>
                  (name.value = (e.target as HTMLInputElement).value)
                }
                class="w-full px-4 py-3 rounded-lg input-glass text-sm"
              />
            </div>

            <div>
              <label class="block text-xs tracking-[0.15em] uppercase text-slate-400 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={email.value}
                onInput$={(e) =>
                  (email.value = (e.target as HTMLInputElement).value)
                }
                class="w-full px-4 py-3 rounded-lg input-glass text-sm"
              />
            </div>

            <div>
              <label class="block text-xs tracking-[0.15em] uppercase text-slate-400 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="What's on your mind?"
                value={content.value}
                onInput$={(e) =>
                  (content.value = (e.target as HTMLTextAreaElement).value)
                }
                rows={5}
                class="w-full px-4 py-3 rounded-lg input-glass text-sm resize-none"
              />
            </div>

            <button
              onClick$={submitForm}
              disabled={status.value === "sending"}
              class="w-full py-3.5 rounded-lg text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.value === "sending"
                ? "Sending..."
                : status.value === "sent"
                  ? "Sent!"
                  : "Submit"}
            </button>

            {status.value === "error" && (
              <p class="text-center text-red-400 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
            {status.value === "sent" && (
              <p class="text-center text-cyan-400 text-sm">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
