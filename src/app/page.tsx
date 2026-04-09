"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "land-registry",
    title: "Land Registry Compliant Maps",
    summary:
      "Detailed large-scale maps meeting the requirements of the Property Registration Authority of Ireland.",
    description:
      "A Land Registry Compliant Map is a detailed large-scale map meeting the requirements of the Property Registration Authority of Ireland (PRAI). Required by solicitors as part of conveyancing when registering, transferring or subdividing a property. An RIAI architect surveys the site, verifies boundaries and certifies the map to PRAI standards.",
    pricing: [
      "House — €300 + VAT",
      "Apartment — €500 + VAT",
      "Outside Dublin — contact for quote",
    ],
  },
  {
    id: "opinion-compliance",
    title: "Opinion on Compliance",
    summary:
      "Confirmation that a property complies with planning permission and building regulations.",
    description:
      "An RIAI Architect's Opinion on Compliance confirms that a property complies with planning permission and building regulations. Required retrospectively where no Certificate of Compliance exists — typically where works were carried out without professional oversight at the time. Issued in the format approved by the Law Society of Ireland. Covers both planning compliance and building regulations.",
    pricing: ["€400 + VAT", "Includes site visit and planning file review"],
  },
  {
    id: "declaration-identity",
    title: "Declaration of Identity",
    summary:
      "Resolving discrepancies between deed maps, folio maps and historical mapping records.",
    description:
      "A Declaration of Identity is required where the sale of a property involves discrepancies between deed maps, folio maps and historical mapping records. An RIAI architect visits the property, analyses all mapping evidence and prepares a Declaration resolving boundary and identity issues for vendor and purchaser.",
    pricing: ["Contact for quote"],
  },
];

function ServiceCard({
  service,
  isOpen,
  onToggle,
  index,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      data-design-id={`service-card-${service.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-stone-200 bg-white"
    >
      <button
        data-design-id={`service-card-${service.id}-toggle`}
        onClick={onToggle}
        className="w-full text-left px-6 py-6 sm:px-8 sm:py-8 flex items-start justify-between gap-4 group cursor-pointer"
      >
        <div data-design-id={`service-card-${service.id}-header`}>
          <h3
            data-design-id={`service-card-${service.id}-title`}
            className="text-lg sm:text-xl font-semibold text-stone-900 tracking-tight"
          >
            {service.title}
          </h3>
          <p
            data-design-id={`service-card-${service.id}-summary`}
            className="mt-2 text-sm text-stone-500 leading-relaxed max-w-xl"
          >
            {service.summary}
          </p>
        </div>
        <span
          data-design-id={`service-card-${service.id}-icon`}
          className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600 transition-colors"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            data-design-id={`service-card-${service.id}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-stone-100">
              <p
                data-design-id={`service-card-${service.id}-description`}
                className="mt-6 text-sm text-stone-600 leading-relaxed max-w-2xl"
              >
                {service.description}
              </p>
              <div
                data-design-id={`service-card-${service.id}-pricing`}
                className="mt-6 pt-5 border-t border-stone-100"
              >
                <span
                  data-design-id={`service-card-${service.id}-pricing-label`}
                  className="text-xs font-semibold uppercase tracking-widest text-stone-400"
                >
                  Pricing
                </span>
                <ul
                  data-design-id={`service-card-${service.id}-pricing-list`}
                  className="mt-3 space-y-1"
                >
                  {service.pricing.map((line, i) => (
                    <li
                      key={i}
                      className="text-sm text-stone-700"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Home() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav
        data-design-id="nav"
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100"
      >
        <div
          data-design-id="nav-container"
          className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        >
          <a
            data-design-id="nav-logo"
            href="#"
            className="text-lg tracking-tight text-stone-900"
          >
            <span className="font-bold">EMERGE</span>{" "}
            <span className="font-light">Legal</span>
          </a>
          <div data-design-id="nav-links" className="flex items-center gap-8">
            <a
              data-design-id="nav-link-services"
              href="#services"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              Services
            </a>
            <a
              data-design-id="nav-link-contact"
              href="#contact"
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main data-design-id="main" className="flex-1">
        {/* HERO */}
        <section
          data-design-id="hero"
          className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-6"
        >
          <div
            data-design-id="hero-container"
            className="max-w-5xl mx-auto"
          >
            <motion.div
              data-design-id="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                data-design-id="hero-accent-line"
                className="w-12 h-px bg-[#c9b99a] mb-8"
              />
              <h1
                data-design-id="hero-title"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight max-w-3xl"
              >
                Architectural services for property sales in Ireland
              </h1>
              <p
                data-design-id="hero-subtitle"
                className="mt-6 text-base sm:text-lg text-stone-500 font-light leading-relaxed max-w-xl"
              >
                Fast, reliable architectural compliance documents for solicitors
                and estate agents.
              </p>
              <div data-design-id="hero-cta-row" className="mt-10 flex gap-4">
                <a
                  data-design-id="hero-cta-primary"
                  href="#services"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors"
                >
                  View services
                </a>
                <a
                  data-design-id="hero-cta-secondary"
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-stone-600 border border-stone-200 hover:border-stone-400 transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          data-design-id="services"
          id="services"
          className="py-20 sm:py-28 px-6 bg-stone-50/50"
        >
          <div
            data-design-id="services-container"
            className="max-w-5xl mx-auto"
          >
            <motion.div
              data-design-id="services-header"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                data-design-id="services-label"
                className="text-xs font-semibold uppercase tracking-widest text-[#c9b99a]"
              >
                Services
              </span>
              <h2
                data-design-id="services-title"
                className="mt-3 text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight"
              >
                Compliance documentation
              </h2>
              <p
                data-design-id="services-subtitle"
                className="mt-3 text-sm text-stone-500 max-w-lg leading-relaxed"
              >
                Professional architectural compliance services for property
                transactions throughout Ireland.
              </p>
            </motion.div>

            <div
              data-design-id="services-list"
              className="mt-12 space-y-4"
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isOpen={openCard === service.id}
                  onToggle={() => toggleCard(service.id)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          data-design-id="contact"
          id="contact"
          className="py-20 sm:py-28 px-6"
        >
          <div
            data-design-id="contact-container"
            className="max-w-5xl mx-auto"
          >
            <motion.div
              data-design-id="contact-header"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                data-design-id="contact-label"
                className="text-xs font-semibold uppercase tracking-widest text-[#c9b99a]"
              >
                Contact
              </span>
              <h2
                data-design-id="contact-title"
                className="mt-3 text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight"
              >
                Get in touch
              </h2>
            </motion.div>

            <div
              data-design-id="contact-grid"
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16"
            >
              {/* LEFT — Bio & Details */}
              <motion.div
                data-design-id="contact-info"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
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
                    <h3
                      data-design-id="contact-name"
                      className="text-base font-semibold text-stone-900"
                    >
                      James Lawler MRIAI
                    </h3>
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
                  James Lawler MRIAI is a Dublin-based registered architect with
                  30 years experience. MeltedSnow Architects provides compliance
                  documentation services to solicitors and estate agents
                  throughout Ireland.
                </p>

                <div
                  data-design-id="contact-details"
                  className="mt-8 space-y-3"
                >
                  <div data-design-id="contact-tel-row" className="flex items-center gap-3">
                    <span data-design-id="contact-tel-label" className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-12">
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
                    <span data-design-id="contact-email-label" className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-12">
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

                <div
                  data-design-id="contact-badge-wrapper"
                  className="mt-8"
                >
                  <Image
                    data-design-id="contact-riai-badge"
                    src="/riai-badge.jpg"
                    alt="RIAI Practice Member 2026"
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* RIGHT — Enquiry Form */}
              <motion.div
                data-design-id="contact-form-wrapper"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
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
                      className="w-full px-4 py-3 text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 text-sm text-stone-800 bg-stone-50 border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors resize-none"
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        data-design-id="footer"
        className="border-t border-stone-100 py-10 px-6"
      >
        <div
          data-design-id="footer-container"
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div data-design-id="footer-left" className="text-center sm:text-left">
            <p data-design-id="footer-credit" className="text-xs text-stone-400">
              James Lawler MRIAI — RIAI Registered Member 2026
            </p>
          </div>
          <div data-design-id="footer-right" className="text-center sm:text-right">
            <p data-design-id="footer-brand" className="text-xs text-stone-400">
              <span className="font-semibold">EMERGE</span>{" "}
              <span className="font-light">Legal</span>
              <span className="mx-2">·</span>
              Dublin, Ireland
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}