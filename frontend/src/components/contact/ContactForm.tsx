"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const HELP_OPTIONS = ["Book a Call", "Submit an Enquiry"];

interface FormState {
  name: string;
  email: string;
  organisation: string;
  helpType: string;
  description: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  organisation: "",
  helpType: "",
  description: "",
};

const field =
  "w-full px-4 py-3.5 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-0 transition-colors duration-200";

export function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 6L6 11L15 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-semibold text-primary">
          Message received.
        </h3>
        <p className="text-sm leading-relaxed text-foreground/60">
          Thank you for reaching out. Dare or a member of the team will be in
          touch within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-xs font-semibold text-secondary transition-colors hover:text-secondary/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        suppressHydrationWarning
        value={form.name}
        onChange={handleChange}
        className={field}
        autoComplete="name"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        suppressHydrationWarning
        value={form.email}
        onChange={handleChange}
        className={field}
        autoComplete="email"
      />

      <input
        type="text"
        name="organisation"
        placeholder="Organisation"
        suppressHydrationWarning
        value={form.organisation}
        onChange={handleChange}
        className={field}
        autoComplete="organization"
      />

      <select
        name="helpType"
        required
        suppressHydrationWarning
        value={form.helpType}
        onChange={handleChange}
        className={`${field} ${
          form.helpType === "" ? "text-foreground/40" : "text-foreground"
        } appearance-none`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 16px center",
          paddingRight: "40px",
        }}
      >
        <option value="" disabled>
          What are you looking for help with?
        </option>
        {HELP_OPTIONS.map((option) => (
          <option key={option} value={option} className="text-foreground">
            {option}
          </option>
        ))}
      </select>

      <textarea
        name="description"
        placeholder="Briefly Describe the challenge you are navigating..."
        rows={4}
        suppressHydrationWarning
        value={form.description}
        onChange={handleChange}
        className={`${field} resize-none`}
      />

      <button
        type="submit"
        disabled={loading}
        suppressHydrationWarning
        className="mt-2 w-full rounded-full bg-primary py-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-all duration-200 hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
