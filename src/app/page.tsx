import Link from "next/link";
import Image from "next/image";
import {
  CATEGORY_ORDER,
  CATEGORY_LABELS,
  getServicesByCategory,
  type ServiceCategory,
} from "@/lib/services";

const DELAY = [
  "animate-fade-up-delay-1",
  "animate-fade-up-delay-2",
  "animate-fade-up-delay-3",
  "animate-fade-up-delay-4",
] as const;

/* All column headers use the Compliance Opinions colour */
const COLUMN_BG: Record<ServiceCategory, string> = {
  "maps-declarations":   "#F7F3EB",
  "compliance-opinions": "#F7F3EB",
  planning:              "#F7F3EB",
};

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Submit your enquiry",
    body: "Contact me by phone or email with the property address and the service required. I will respond usually on the same day.",
  },
  {
    step: "02",
    title: "Confirm the details",
    body: "I review the property details and confirm the exact service needed, the fixed fee, and availability for a survey.",
  },
  {
    step: "03",
    title: "Survey usually within 48 hours",
    body: "I visit the property to carry out a visual inspection of the works or to survey the boundaries and other relevant matters.",
  },
  {
    step: "04",
    title: "Certificate issued same day",
    body: "The signed, certified document is issued to the homeowner, solicitor or estate agent within 48 hours.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        data-design-id="hero"
        className="px-6 pt-6 pb-6 sm:pt-8 sm:pb-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

            {/* Text — spans 2 of 3 columns */}
            <div className="md:col-span-2 animate-fade-up">
              <h1 className="text-2xl sm:text-[1.8rem] md:text-[2.2rem] font-bold text-stone-900 tracking-tight leading-tight">
                Architectural compliance documents for property transactions in Ireland.
              </h1>
              <p className="mt-4 text-sm text-stone-500 font-light leading-relaxed">
                Land Registry maps, Opinions on Compliance, and Declarations of Identity for solicitors and estate agents — with a 48-hour turnaround on most services.
              </p>
            </div>

            {/* Image — 1 column, same width as card 3 */}
            <div className="animate-fade-up-delay-1 hidden md:block">
              <Image
                src="/how1.jpg"
                alt="Residential property"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section
        data-design-id="services"
        id="services"
        className="border-b border-stone-100 px-6 pt-8 pb-14 sm:pt-10 sm:pb-16"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CATEGORY_ORDER.map((category, i) => {
              const services = getServicesByCategory(category);
              return (
                <div
                  key={category}
                  className={`border border-stone-200 overflow-hidden ${DELAY[i]}`}
                >
                  {/* Colour band header */}
                  <div
                    className="px-5 py-4 border-b border-stone-200"
                    style={{ background: COLUMN_BG[category] }}
                  >
                    <p className="text-sm font-bold text-stone-800 tracking-tight">
                      {CATEGORY_LABELS[category]}
                    </p>
                  </div>

                  {/* Service rows */}
                  <ul className="px-5">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="service-row group"
                        >
                          <span className="service-row-title">
                            {service.title}
                          </span>
                          <span className="service-row-price">
                            {service.price}&ensp;&rarr;
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section
        data-design-id="how-it-works"
        id="how-it-works"
        className="border-b border-stone-100 px-6 py-16 sm:py-20"
        style={{ background: "#FAF8F3" }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-10 animate-fade-up">
            How it works
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className={DELAY[i]}>
                <p className="text-4xl font-bold text-stone-200 mb-5 tracking-tight leading-none">
                  {item.step}
                </p>
                <h3 className="text-sm font-semibold text-stone-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────────── */}
      <section data-design-id="divider" className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="w-1/3 h-px" style={{ background: "#e7e0d0" }} />
        </div>
      </section>
    </>
  );
}
