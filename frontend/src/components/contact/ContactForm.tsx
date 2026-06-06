"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HELP_OPTIONS = ["Book a Call", "Submit an Enquiry"];

interface FormState {
  name: string;
  email: string;
  organisation: string;
  helpType: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  helpType?: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  organisation: "",
  helpType: "",
  description: "",
};

// Utility function to get input/select field classes based on error state
function getFieldClass(hasError?: boolean) {
  return cn(
    "!h-11 !sm:h-12 px-4 w-full text-sm rounded-md placeholder:text-foreground/40 focus-visible:ring-0 transition-colors duration-200",
    hasError
      ? "border-destructive focus-visible:border-destructive focus:border-destructive"
      : "border-border focus-visible:border-primary/60 focus:border-primary/60",
  );
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email address.";
  if (!form.helpType) errors.helpType = "Please select an option.";
  return errors;
}

export function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSelectChange(value: string) {
    setForm((prev) => ({ ...prev, helpType: value }));
    if (errors.helpType) {
      setErrors((prev) => ({ ...prev, helpType: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
          <Check
            size={16}
            className="text-primary-foreground"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-heading text-xl font-semibold text-primary">
          Message received.
        </h3>
        <p className="text-sm leading-relaxed text-foreground/60">
          Thank you for reaching out. Dare or a member of the team will be in
          touch within 48 hours.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setForm(EMPTY);
          }}
          className="mt-2 h-11 sm:h-12 px-8 sm:px-10 inline-flex justify-center items-center rounded-full text-xs font-semibold text-secondary hover:text-secondary/80 hover:bg-secondary/10 cursor-pointer transition-colors duration-200"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4 sm:gap-5"
      aria-label="Contact booking form"
    >
      {/* Full Name */}
      <Field>
        <FieldLabel htmlFor="name" className="sr-only">
          Full Name
        </FieldLabel>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Full Name"
          required
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          suppressHydrationWarning
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          className={getFieldClass(!!errors.name)}
        />
        {errors.name && (
          <FieldError id="name-error" role="alert">
            {errors.name}
          </FieldError>
        )}
      </Field>

      {/* Email */}
      <Field>
        <FieldLabel htmlFor="email" className="sr-only">
          Email Address
        </FieldLabel>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          suppressHydrationWarning
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          className={getFieldClass(!!errors.email)}
        />
        {errors.email && (
          <FieldError id="email-error" role="alert">
            {errors.email}
          </FieldError>
        )}
      </Field>

      {/* Organisation */}
      <Field>
        <FieldLabel htmlFor="organisation" className="sr-only">
          Organisation
        </FieldLabel>
        <Input
          id="organisation"
          type="text"
          name="organisation"
          placeholder="Organisation (optional)"
          suppressHydrationWarning
          value={form.organisation}
          onChange={handleChange}
          autoComplete="organization"
          className={getFieldClass()}
        />
      </Field>

      {/* Help Type */}
      <Field>
        <FieldLabel htmlFor="helpType" className="sr-only">
          What are you looking for help with?
        </FieldLabel>
        <Select value={form.helpType} onValueChange={handleSelectChange}>
          <SelectTrigger
            id="helpType"
            aria-required="true"
            aria-describedby={errors.helpType ? "helpType-error" : undefined}
            aria-invalid={!!errors.helpType}
            className={cn(
              getFieldClass(!!errors.helpType),
              form.helpType === "" ? "text-foreground/40" : "text-foreground",
            )}
          >
            <SelectValue placeholder="What are you looking for help with?" />
          </SelectTrigger>
          <SelectContent>
            {HELP_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.helpType && (
          <FieldError id="helpType-error" role="alert">
            {errors.helpType}
          </FieldError>
        )}
      </Field>

      {/* Description */}
      <Field>
        <FieldLabel htmlFor="description" className="sr-only">
          Briefly describe the challenge you are navigating
        </FieldLabel>
        <Textarea
          id="description"
          name="description"
          placeholder="Briefly describe the challenge you are navigating..."
          rows={4}
          suppressHydrationWarning
          value={form.description}
          onChange={handleChange}
          className={cn(getFieldClass(), "h-auto resize-none")}
        />
      </Field>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        suppressHydrationWarning
        className="mt-2 h-11 sm:h-12 w-full rounded-full bg-primary text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-all duration-200 hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-3.5 w-3.5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
