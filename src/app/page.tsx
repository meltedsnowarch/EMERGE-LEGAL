"use client";

import { useState } from "react";

function ExpandableCard({
  id,
  title,
  bgColor,
  description,
  pricing,
  isOpen,
  onToggle,
  animDelay,
}: {
  id: string;
  title: string;
  bgColor: string;
  description: string;
  pricing: { label: string; items: string[] };
  isOpen: boolean;
  onToggle: () => void;
  animDelay: string;
}) {
  return (
    <div
      data-design-id={`service-card-${id}`}
      className={`border border-stone-200 flex flex-col ${animDelay}`}
      style={{ background: bgColor }}
    >
      <button
        data-design-id={`service-card-${id}-toggle`}
        onClick={onToggle}
        className="w-full text-left px-6 py-6 flex items-center justify-between gap-4 group cursor-pointer"
      >
        <h3
          data-design-id={`service-card-${id}-title`}
          className="text-sm sm:text-base font-semibold text-stone-900 tracking-tight whitespace-nowrap"
        >
          {title}
        </h3>
        <span
          data-design-id={`service-card-${id}-icon`}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600 transition-all duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <div
        data-design-id={`service-card-${id}-body`}
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div data-design-id={`service-card-${id}-expanded`} className="px-6 pb-6 border-t border-stone-200/60">
            <p data-design-id={`service-card-${id}-description`} className="mt-6 text-sm text-stone-600 leading-relaxed">
              {description}
            </p>
            <div data-design-id={`service-card-${id}-pricing`} className="mt-6 pt-5 border-t border-stone-200/60">
              <span data-design-id={`service-card-${id}-pricing-label`} className="text-xs font-semibold uppercase tracking-widest text-stone-400">{pricing.label}</span>
              <ul data-design-id={`service-card-${id}-pricing-list`} className="mt-3 space-y-1">
                {pricing.items.map((item, i) => (
                  <li key={i} data-design-id={`service-card-${id}-price-${i + 1}`} className="text-sm text-stone-700">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenCard((prev) => (prev === id ? null : id));

  return (
    <>
      {/* HERO */}
      <section
        data-design-id="hero"
        className="pt-28 pb-8 sm:pt-36 sm:pb-10 px-6 bg-white"
      >
        <div data-design-id="hero-container" className="max-w-5xl mx-auto">
          <div data-design-id="hero-content" className="animate-fade-up">
            <div
              data-design-id="hero-accent-line"
              className="w-12 h-px mb-8"
              style={{ background: "#c9b99a" }}
            />
            <h1
              data-design-id="hero-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 tracking-tight leading-tight whitespace-nowrap"
            >
              Architectural services for property sales in Ireland
            </h1>
            <p
              data-design-id="hero-subtitle"
              className="mt-4 text-sm sm:text-base text-stone-500 font-light leading-relaxed whitespace-nowrap"
            >
              Fast, reliable architectural compliance documents for solicitors and estate agents.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        data-design-id="services"
        id="services"
        className="py-12 sm:py-16 px-6 bg-white"
      >
        <div data-design-id="services-container" className="max-w-5xl mx-auto">
          <div
            data-design-id="services-list"
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <ExpandableCard
              id="land-registry"
              title="Land Registry Compliant Maps"
              bgColor="#F4EFE4"
              description="A Land Registry Compliant Map is a detailed large-scale map meeting the requirements of the Property Registration Authority of Ireland (PRAI). Required by solicitors as part of conveyancing when registering, transferring or subdividing a property. An RIAI architect surveys the site, verifies boundaries and certifies the map to PRAI standards."
              pricing={{ label: "Pricing", items: ["House — €300 + VAT", "Apartment — €500 + VAT", "Outside Dublin — contact for quote"] }}
              isOpen={openCard === "land-registry"}
              onToggle={() => toggle("land-registry")}
              animDelay="animate-fade-up-delay-1"
            />

            <ExpandableCard
              id="opinion-compliance"
              title="Opinion on Compliance"
              bgColor="#F7F3EB"
              description="An RIAI Architect's Opinion on Compliance confirms that a property complies with planning permission and building regulations. Required retrospectively where no Certificate of Compliance exists — typically where works were carried out without professional oversight at the time. Issued in the format approved by the Law Society of Ireland. Covers both planning compliance and building regulations."
              pricing={{ label: "Pricing", items: ["€400 + VAT", "Includes site visit and planning file review"] }}
              isOpen={openCard === "opinion-compliance"}
              onToggle={() => toggle("opinion-compliance")}
              animDelay="animate-fade-up-delay-2"
            />

            <ExpandableCard
              id="declaration-identity"
              title="Declaration of Identity"
              bgColor="#FAF8F3"
              description="A Declaration of Identity is required where the sale of a property involves discrepancies between deed maps, folio maps and historical mapping records. An RIAI architect visits the property, analyses all mapping evidence and prepares a Declaration resolving boundary and identity issues for vendor and purchaser."
              pricing={{ label: "Pricing", items: ["Contact for quote"] }}
              isOpen={openCard === "declaration-identity"}
              onToggle={() => toggle("declaration-identity")}
              animDelay="animate-fade-up-delay-3"
            />
          </div>
        </div>
      </section>
    </>
  );
}