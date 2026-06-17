"use client";

import Image from "next/image";
import phoneMockup from "../../../public/images/phone-mockup.png";
import { BookingForm } from "@/components/contact/ContactForm";

export function ContactHero() {
  return (
    <section aria-labelledby="booking-heading" className="w-full">
      {/* Heading */}
      <div className="py-8 sm:px-10 md:px-12 text-center">
        <h1
          id="booking-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-primary"
        >
          Let&apos;s have a Chat
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-foreground">
          <div className="max-w-lg h-auto m-auto" aria-hidden="true">
            <Image
              src={phoneMockup}
              alt=""
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:pr-18 py-10 sm:py-12 md:py-16 gap-4">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Inquiry
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-primary">
            Start Your Transformation
          </h2>
          <BookingForm />
        </div>
      </div>

      {/* Quote Banner */}
      <div className="bg-primary px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-20 text-center">
        <blockquote
          className="mx-auto max-w-3xl font-heading text-xl md:text-2xl lg:text-3xl font-light italic leading-snug tracking-[-0.02em] text-primary-foreground"
        >
          &ldquo;If you&apos;re not sure whether this is the right fit —
          that&apos;s exactly what the first call is for.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
