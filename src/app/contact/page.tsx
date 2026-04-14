import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="mb-12 animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
            Contact
          </p>
          <div className="w-8 h-px mb-7" style={{ background: "#c9b99a" }} />
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Contact
          </h1>
        </div>

        {/* ── Bio & contact details ───────────────────────────────────── */}
        <div className="max-w-lg animate-fade-up-delay-1">

          {/* Photo + name */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
              <Image
                src="/james-lawler.jpeg"
                alt="James Lawler MRIAI"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-1">
              <h2 className="text-sm font-semibold text-stone-900">
                James Lawler MRIAI
              </h2>
              <p className="mt-0.5 text-xs text-stone-500">
                Registered Architect
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-stone-600 leading-relaxed mb-8">
            James Lawler is a Dublin-based architect with over 30 years of
            professional experience, providing architectural compliance
            documentation for solicitors and estate agents throughout Ireland.
          </p>

          {/* Contact details */}
          <div className="space-y-4 mb-8">

            {/* Tel + WhatsApp */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-10 flex-shrink-0">
                Tel
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="tel:0834516091"
                  className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
                >
                  083 451 6091
                </a>
                <a
                  href="https://wa.me/353834516091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-10 flex-shrink-0">
                Email
              </span>
              <a
                href="mailto:emergearchservices@protonmail.com"
                className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
              >
                emergearchservices@protonmail.com
              </a>
            </div>

          </div>

          {/* RIAI badge */}
          <Image
            src="/riai-badge.jpg"
            alt="RIAI Practice Member 2026"
            width={120}
            height={60}
            className="object-contain"
          />

        </div>
      </div>
    </section>
  );
}
