export type ServiceCategory =
  | "compliance-opinions"
  | "planning"
  | "maps-declarations";

export interface Service {
  slug: string;
  title: string;
  price: string;
  turnaround: string;
  description: string;
  category: ServiceCategory;
}

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  "compliance-opinions": "Compliance Opinions",
  planning: "Planning",
  "maps-declarations": "Maps & Declarations",
};

export const CATEGORY_ORDER: ServiceCategory[] = [
  "maps-declarations",
  "compliance-opinions",
  "planning",
];

export const SERVICES: Service[] = [
  // ── Column 1 (left) — Maps & Declarations ───────────────────────────
  {
    slug: "land-registry-map-house",
    title: "Land Registry Map (House / Site)",
    price: "€350 + VAT",
    turnaround: "",
    category: "maps-declarations",
    description:
      "A Land Registry Compliant Map is required by solicitors for all property sales and first registrations with the Property Registration Authority of Ireland. It is a scale certified map showing the precise boundaries and area of the property. The map is prepared by James and is accepted by Tailte Éireann, all major banks, and the Law Society of Ireland.",
  },
  {
    slug: "land-registry-map-apartment",
    title: "Land Registry Map (Apartment)",
    price: "€500 + VAT",
    turnaround: "2–3 working days",
    category: "maps-declarations",
    description:
      "Apartment properties require both a Land Registry Compliant Map and a certified floor plan showing the boundaries and area of the individual unit. James will carry out a site survey where required and produce all necessary documentation to satisfy the Property Registration Authority of Ireland requirements.",
  },
  {
    slug: "declaration-of-identity",
    title: "Declaration of Identity",
    price: "€350 + VAT",
    turnaround: "",
    category: "maps-declarations",
    description:
      "A Declaration of Identity is a formal letter prepared by a registered architect confirming that all services to a property, including boundaries, utilities, and ancillary works, are located within the site as described in the title documents. It is most commonly required by solicitors where there are discrepancies between deed maps, folio maps, or historical mapping records that need to be resolved before a sale can proceed.",
  },

  // ── Column 2 (centre) — Compliance Opinions ─────────────────────────
  {
    slug: "opinion-compliance-planning",
    title: "Opinion of Compliance with Planning",
    price: "€300 + VAT",
    turnaround: "",
    category: "compliance-opinions",
    description:
      "When selling or mortgaging a property, confirmation may be required that any works carried out comply with planning permission. The Opinion of Compliance with Planning is prepared by James following a visual inspection of the property. It is issued in RIAI standard format and is accepted by all major banks and mortgage providers.",
  },
  {
    slug: "opinion-compliance-building-regulations",
    title: "Opinion of Compliance with Building Regulations",
    price: "€300 + VAT",
    turnaround: "",
    category: "compliance-opinions",
    description:
      "If works have been carried out on a property without full professional oversight at the time of construction, an Opinion of Compliance with Building Regulations may be required to complete a sale. James will carry out a visual inspection and issue a formal opinion confirming the works appear to comply with the relevant building regulations in place at the time of construction. Occasionally the works do not comply and a report as to the reasons why will be issued in place of the standard RIAI document.",
  },

  // ── Column 3 (right) — Planning ─────────────────────────────────────
  {
    slug: "retention-planning-permission",
    title: "Retention Planning Permission",
    price: "€TBC",
    turnaround: "",
    category: "planning",
    description:
      "If works have been carried out on a property that required planning permission but none was obtained at the time, Retention Planning Permission offers an option to regularise the development through retrospective retention permission. James will manage the full process from initial survey to preparation of the drawing information through to submission to the local authority, and can provide an Opinion of Compliance with Planning once permission is granted.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}