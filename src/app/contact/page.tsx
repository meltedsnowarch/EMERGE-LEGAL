import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">

        {/* ── Profile block ───────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start gap-8 mb-10 animate-fade-up">

          {/* Circular photo */}
          <div className="flex-shrink-0">
            <div
              style={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                src="/JLPhoto-NEW.jpeg"
                alt="James Lawler MRIAI"
                width={150}
                height={150}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* Name + bio */}
          <div className="pt-1">
            <h1 className="text-base font-bold mb-3 tracking-tight"
              style={{ color: "#1A1A1A" }}>
              James Lawler &middot; RIAI Registered Member &middot; 2026 &middot;{" "}
              <a
                href="https://www.meltedsnow.net"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                style={{ color: "#1A1A1A" }}
              >
                Meltedsnow Architects
              </a>
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "#1A1A1A" }}>
              James is a Dublin-based architect with over 30 years experience in
              residential architecture. Through his practice Meltedsnow
              Architects he has designed extensions, refurbishments and new
              builds across Dublin and Ireland. EMERGE Compliance offers a
              specialist certification service providing solicitors, estate
              agents and homeowners with the compliance documents required for
              property transactions.
            </p>
          </div>

        </div>

        {/* ── Bridging line ───────────────────────────────────────────── */}
        <p className="mb-6 text-base font-bold tracking-tight animate-fade-up-delay-1"
          style={{ color: "#1A1A1A" }}>
          To book a service please contact James directly:
        </p>

        {/* ── Contact details ─────────────────────────────────────────── */}
        <div className="mb-10 animate-fade-up-delay-1">
          <div className="space-y-3">

            {/* Phone + WhatsApp */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-10 flex-shrink-0">
                Tel
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="tel:0834516091"
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: "#1A1A1A" }}
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
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: "#1A1A1A" }}
              >
                emergearchservices@protonmail.com
              </a>
            </div>

          </div>
        </div>

        {/* ── RIAI badge ───────────────────────────────────────────────── */}
        <div className="animate-fade-up-delay-2">
          <Image
            src="/RIAI.jpg"
            alt="RIAI Practice Member 2026"
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>

      </div>
    </section>
  );
}
