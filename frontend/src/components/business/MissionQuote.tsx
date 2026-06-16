"use client";
export function MissionQuote() {
  return (
    <section aria-labelledby="social-proof-heading" className="bg-background">
      <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20">
          <div >
            <p className="border-l-2 border-secondary pl-4 italic text-base md:text-lg leading-ralaxed tracking-wider">
              &quot;Coaching and facilitation are not things I do — they are
              what I am. Whether I am working with an entrepreneur navigating
              the messy middle stages of growth, or a corporate team that needs
              someone to look through their business with genuine interest — I
              stand as a for-someone-else. I am a voice for the potential that
              the industry speaks of but rarely has the heart to really fight
              for.&quot;
            </p>
          </div>

          <div className="pl-4 flex flex-col gap-4 sm:gap-6">
            <h3 className="text-xl md:text-2xl font-bold tracking-[-0.03em] text-primary/60 leading-[1.05]">
              My Mission
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              In a world obsessed with scale, I focus on depth. I believe that
              the strongest businesses are those that understand the fundamental
              value of their human capital.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              My work across Africa and Europe has taught me that while
              technology changes, the core drivers of excellence remain
              consistent: clarity, empathy, and a relentless commitment to the
              craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
