"use client";

import { useState } from "react";

const SERVICES = [
  "Land Registry Map House/Site",
  "Land Registry Map Apartment",
  "Declaration of Identity",
  "Opinion of Compliance with Planning",
  "Opinion of Compliance with Building Regulations",
  "Retention Planning Permission",
];

const EMPTY = {
  service: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address1: "",
  address2: "",
  city: "",
  eircode: "",
  notes: "",
};

export default function ContactPage() {
  const [fields, setFields] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">

        {/* ── Heading ────────────────────────────────────────────────── */}
        <div className="mb-10 animate-fade-up">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
            style={{ color: "#1A1A1A" }}>
            Book a Service
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#1A1A1A" }}>
            To book a service, contact James directly by phone, WhatsApp or
            email with the property address and service required.
          </p>
        </div>

        {/* ── Contact details ─────────────────────────────────────────── */}
        <div className="mb-12 animate-fade-up-delay-1">
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

        {/* ── Booking form ─────────────────────────────────────────────── */}
        <div className="animate-fade-up-delay-2">
          {submitted ? (
            <div
              className="p-10 text-center"
              style={{ background: "#E8E0D5" }}
            >
              <h2 className="text-lg font-semibold mb-2" style={{ color: "#1B2A4A" }}>
                Enquiry received
              </h2>
              <p className="text-sm" style={{ color: "#1A1A1A" }}>
                Thank you. James will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 space-y-5"
              style={{ background: "#E8E0D5" }}
            >

              {/* Service dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#1B2A4A" }}>
                  What service do you require?
                </label>
                <select
                  name="service"
                  value={fields.service}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled>Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* First / Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#1B2A4A" }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={fields.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#1B2A4A" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={fields.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#1B2A4A" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#1B2A4A" }}>
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={fields.mobile}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Address line 1 */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#1B2A4A" }}>
                  Property Address
                </label>
                <input
                  type="text"
                  name="address1"
                  value={fields.address1}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Address line 2 */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#1B2A4A" }}>
                  Property Address Line 2
                </label>
                <input
                  type="text"
                  name="address2"
                  value={fields.address2}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Town/City + Eircode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#1B2A4A" }}>
                    Town / City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={fields.city}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#1B2A4A" }}>
                    Eircode
                  </label>
                  <input
                    type="text"
                    name="eircode"
                    value={fields.eircode}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#1B2A4A" }}>
                  Any Other Information
                </label>
                <textarea
                  name="notes"
                  value={fields.notes}
                  onChange={handleChange}
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto text-sm font-semibold uppercase tracking-widest py-3 px-10 transition-opacity hover:opacity-80"
                  style={{ background: "#2C2C2A", color: "#FFFFFF" }}
                >
                  Submit
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
