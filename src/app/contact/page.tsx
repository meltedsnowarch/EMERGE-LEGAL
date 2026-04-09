"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <section
      data-design-id="contact"
      className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-6"
    >
      <div
        data-design-id="contact-container"
        className="max-w-5xl mx-auto"
      >
        <div data-design-id="contact-header" className="animate-fade-up">
          <div
            data-design-id="contact-accent-line"
            className="w-12 h-px mb-8"
            style={{ background: "#c9b99a" }}
          />
          <h1
            data-design-id="contact-title"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight"
          >
            Contact
          </h1>
        </div>

        <div
          data-design-id="contact-grid"
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 animate-fade-up-delay-1"
        >
          {/* LEFT — Bio & Details */}
          <div data-design-id="contact-info">
            <div
              data-design-id="contact-photo-row"
              className="flex items-start gap-5"
            >
              <div
                data-design-id="contact-photo-wrapper"
                className="w-20 h-20 flex-shrink-0 overflow-hidden"
              >
                <Image
                  data-design-id="contact-photo"
                  src="/james-lawler.jpeg"
                  alt="James Lawler MRIAI"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div data-design-id="contact-name-block">
                <h2
                  data-design-id="contact-name"
                  className="text-base font-semibold text-stone-900"
                >
                  James Lawler MRIAI
                </h2>
                <p
                  data-design-id="contact-role"
                  className="mt-1 text-sm text-stone-500"
                >
                  Registered Architect
                </p>
              </div>
            </div>

            <p
              data-design-id="contact-bio"
              className="mt-6 text-sm text-stone-600 leading-relaxed"
            >
              James Lawler MRIAI is a Dublin-based registered architect with 30
              years experience who can provide property sale compliance
              documentation services to solicitors and estate agents throughout
              Ireland.
            </p>

            <div
              data-design-id="contact-details"
              className="mt-8 space-y-3"
            >
              <div data-design-id="contact-tel-row" className="flex items-center gap-3">
                <span
                  data-design-id="contact-tel-label"
                  className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-12"
                >
                  Tel
                </span>
                <a
                  data-design-id="contact-tel-value"
                  href="tel:0834516091"
                  className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
                >
                  083 451 6091
                </a>
              </div>
              <div data-design-id="contact-email-row" className="flex items-center gap-3">
                <span
                  data-design-id="contact-email-label"
                  className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-12"
                >
                  Email
                </span>
                <a
                  data-design-id="contact-email-value"
                  href="mailto:meltedsnowarch@protonmail.com"
                  className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
                >
                  meltedsnowarch@protonmail.com
                </a>
              </div>
            </div>

            <div data-design-id="contact-badge-wrapper" className="mt-8">
              <Image
                data-design-id="contact-riai-badge"
                src="/riai-badge.jpg"
                alt="RIAI Practice Member 2026"
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT — Enquiry Form */}
          <div data-design-id="contact-form-wrapper">
            <form
              data-design-id="contact-form"
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");
                window.location.href = `mailto:meltedsnowarch@protonmail.com?subject=Enquiry from ${name}&body=${message}%0A%0AFrom: ${name} (${email})`;
              }}
            >
              <div data-design-id="contact-form-name-group">
                <label
                  data-design-id="contact-form-name-label"
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Name
                </label>
                <input
                  data-design-id="contact-form-name-input"
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 text-sm text-stone-800 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
                  style={{ background: "#fafaf9" }}
                />
              </div>
              <div data-design-id="contact-form-email-group">
                <label
                  data-design-id="contact-form-email-label"
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Email
                </label>
                <input
                  data-design-id="contact-form-email-input"
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 text-sm text-stone-800 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
                  style={{ background: "#fafaf9" }}
                />
              </div>
              <div data-design-id="contact-form-message-group">
                <label
                  data-design-id="contact-form-message-label"
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  data-design-id="contact-form-message-input"
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 text-sm text-stone-800 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors resize-none"
                  style={{ background: "#fafaf9" }}
                />
              </div>
              <button
                data-design-id="contact-form-submit"
                type="submit"
                className="px-8 py-3 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}