import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  SERVICES,
  CATEGORY_LABELS,
  getServiceBySlug,
} from "@/lib/services";

/* ── Static params ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.description.slice(0, 155)}…`,
  };
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const categoryLabel = CATEGORY_LABELS[service.category];

  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* ── Breadcrumb ─────────────────────────────────────────────── */}
        <div className="mb-6 animate-fade-up">
          <Link
            href="/#services"
            className="text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            &larr; {categoryLabel}
          </Link>
        </div>

        {/* ── Title (outside grid so sidebar aligns with description) ── */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight">
            {service.title}
          </h1>
        </div>

        {/* ── Content grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Left — description (2/3 width) */}
          <div className="md:col-span-2 animate-fade-up">
            <p className="text-sm leading-[1.8]" style={{ color: "#1A1A1A" }}>
              {service.description}
            </p>
          </div>

          {/* Right — sidebar (1/3 width, flush with description) */}
          <div className="animate-fade-up-delay-1">
            <div className="border border-stone-200 p-6 space-y-6"
              style={{ background: "#FAF8F3" }}>
              <p className="text-sm text-stone-700 leading-relaxed">
                Prepared by James Lawler, MRIAI, Dublin, Ireland
              </p>
              <p className="text-sm font-semibold" style={{ color: "#2E4A7A" }}>
                {service.price}
              </p>
              <Link
                href="/contact"
                className="block text-center text-sm font-semibold uppercase tracking-widest py-3 px-4 transition-colors hover:opacity-80"
                style={{ background: "#2E4A7A", color: "#FFFFFF", border: "1px solid #2E4A7A" }}
              >
                Book Now
              </Link>
            </div>
          </div>

        </div>

        {/* ── Back ───────────────────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-stone-100 animate-fade-up-delay-2">
          <Link
            href="/#services"
            className="text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            &larr; Back to all services
          </Link>
        </div>

      </div>
    </div>
  );
}