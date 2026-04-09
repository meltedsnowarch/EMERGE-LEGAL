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
  title: "EMERGE Legal — Architectural Compliance Services",
  description:
    "Fast, reliable architectural compliance documents for solicitors and estate agents in Ireland. Land Registry maps, Opinions on Compliance, Declarations of Identity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <body className="min-h-full flex flex-col font-sans">
        {/* NAVIGATION */}
        <nav
          data-design-id="nav"
          className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100"
        >
          <div
            data-design-id="nav-container"
            className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
          >
            <Link
              data-design-id="nav-logo"
              href="/"
              className="text-lg tracking-tight text-stone-900"
            >
              <span className="font-bold">EMERGE</span>{" "}
              <span className="font-light">Legal</span>
            </Link>
            <div data-design-id="nav-links" className="flex items-center gap-8">
              <Link
                data-design-id="nav-link-services"
                href="/#services"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Services
              </Link>
              <Link
                data-design-id="nav-link-contact"
                href="/contact"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main data-design-id="main" className="flex-1">
          {children}
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
      </body>
    </html>
  );
}
