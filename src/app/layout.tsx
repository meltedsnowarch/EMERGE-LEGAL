import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "EMERGE Legal — Architectural Compliance Services Ireland",
    template: "%s | EMERGE Legal",
  },
  description:
    "Architectural compliance documents for solicitors and estate agents across Ireland. Land Registry maps, Opinions on Compliance, Planning Certificates, and Declarations of Identity. RIAI registered architect. 48-hour turnaround.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <script
          data-design-ignore="true"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window===window.parent||window.__DESIGN_NAV_REPORTER__)return;window.__DESIGN_NAV_REPORTER__=true;function report(){try{window.parent.postMessage({type:'IFRAME_URL_CHANGE',payload:{url:location.origin+location.pathname+location.hash}},'*')}catch(e){}}report();var ps=history.pushState,rs=history.replaceState;history.pushState=function(){ps.apply(this,arguments);report()};history.replaceState=function(){rs.apply(this,arguments);report()};window.addEventListener('popstate',report);window.addEventListener('hashchange',report);window.addEventListener('load',report)})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white">

        {/* ── HEADER / NAV ─────────────────────────────────────────────── */}
        <header
          data-design-id="nav"
          className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200"
          style={{ background: "#F7F3EB" }}
        >
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              data-design-id="nav-logo"
              href="/"
              className="text-base tracking-tight text-stone-900 hover:opacity-80 transition-opacity"
            >
              <span className="font-bold">EMERGE</span>
              <span className="font-light"> Legal</span>
            </Link>

            <nav
              data-design-id="nav-links"
              className="flex items-center gap-6 sm:gap-8"
            >
              <Link
                href="/#services"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors hidden sm:block"
              >
                Services
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors hidden sm:block"
              >
                How it works
              </Link>
              <Link
                href="/contact"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main data-design-id="main" className="flex-1 pt-16">
          {children}
        </main>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer
          data-design-id="footer"
          className="border-t border-stone-200 px-6 py-6"
          style={{ background: "#FAF8F3" }}
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-stone-500">
              James Lawler &middot; RIAI Registered Member &middot; 2026
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
