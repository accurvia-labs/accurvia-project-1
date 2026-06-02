import { Clock, Mail, MapPin, Phone } from "lucide-react";

const InfoItems = [
  {
    icon: (
      <Clock
        size={14}
        className="shrink-0 text-secondary"
        aria-hidden="true"
      />
    ),
    label: "OPENING HOURS",
    lines: ["Sunday - Wednesday", "Wednesday - Saturday"],
  },
  {
    icon: (
      <Mail
        size={14}
        className="shrink-0 text-secondary"
        aria-hidden="true"
      />
    ),
    label: "EMAIL",
    lines: ["dare@dareoduale.com", "inquiry@dareoduale.com"],
  },
  {
    icon: (
      <MapPin
        size={14}
        className="shrink-0 text-secondary"
        aria-hidden="true"
      />
    ),
    label: "ADDRESS",
    lines: ["Lagos, Nigeria"],
  },
  {
    icon: (
      <Phone
        size={14}
        className="shrink-0 text-secondary"
        aria-hidden="true"
      />
    ),
    label: "PHONE NUMBERS",
    lines: ["+234 1 234 5678", "+234 801 234 5678"],
  },
];

export function ConnectDirectlyInfo() {
  return (
    <section aria-labelledby="connect-heading">
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-start gap-10 sm:gap-14 lg:gap-8">
        
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2
            id="connect-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-[-0.03em] text-primary"
          >
            Connect Directly
          </h2>
          <p className="max-w-sm text-sm sm:text-base leading-[1.75] text-foreground/60">
            For pressing matters or international speaking engagements, please
            reach out via our direct channels. All conversations are handled
            with the utmost confidentiality.
          </p>
          <p className="mt-2 sm:mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/40">
            All conversations are confidential
          </p>
        </div>

        
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-12">
          <h3 className="mb-6 sm:mb-8 font-heading text-base sm:text-lg font-semibold text-primary">
            Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {InfoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <p className="mb-1.5 sm:mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                    {item.label}
                  </p>
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="text-xs sm:text-sm leading-relaxed text-foreground/70"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
