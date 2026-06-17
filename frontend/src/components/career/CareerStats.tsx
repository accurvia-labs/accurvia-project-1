"use client";

interface stats {
  num: string;
  label: string;
}

const stats = [
  { num: "120", label: "Countries (Global Reach)" },
  { num: "13M+", label: "Users Impacted" },
  { num: "15", label: "Years Experience" },
  { num: "7+", label: "Industry Sectors" },
];

export function CareerStats() {
  return (
    <section className="bg-primary" aria-labelledby="stats-heading">
      <div className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-4 gap-2 sm:gap-6 md:gap-8">
          {stats.map(({ num, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 sm:gap-2 ${
                i > 0 ? "border-l border-border/20" : ""
              }`}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-none text-center">
                {num}
              </h2>
              <span className="text-primary-foreground/60 text-[7px] sm:text-xs md:text-sm tracking-[1.5px] sm:tracking-[2px] uppercase leading-tight text-center px-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
