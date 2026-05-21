"use client";

import Image, { StaticImageData } from "next/image";

// Image imports
import logoAllianz from "../../../public/images/allianz.png";
import logoBank from "../../../public/images/bank.jpg";
import logoBbc from "../../../public/images/BBC.png";
import logoBip from "../../../public/images/bip.png";
import logoBnpParibasCardif from "../../../public/images/bnp-paribas-cardif.png";
import logoDeptTrans from "../../../public/images/dept-trans.png";
import logoJaguar from "../../../public/images/jaguar.png";
import logoKpmg from "../../../public/images/kpmg.png";
import logoLandRover from "../../../public/images/land-rover.png";
import logoNationalgrid from "../../../public/images/nationalgrid.png";
import logoNorthHighland from "../../../public/images/north-highland.png";
import logoRoche from "../../../public/images/roche.png";
import santander from "../../../public/images/santander.png";
import logoShell from "../../../public/images/shell.png";
import skipton from "../../../public/images/skipton.png";
import logoVenturesPlatform from "../../../public/images/ventures-platform.png";


interface Company {
  name: string;
  src: StaticImageData;
}

const COMPANIES: Company[] = [
  { name: "Allianz", src: logoAllianz },
  { name: "Bank", src: logoBank },
  { name: "BBC", src: logoBbc },
  { name: "BIP", src: logoBip },
  { name: "BNP Paribas Cardif", src: logoBnpParibasCardif },
  { name: "Dept. of Transport", src: logoDeptTrans },
  { name: "Jaguar", src: logoJaguar },
  { name: "KPMG", src: logoKpmg },
  { name: "Land Rover", src: logoLandRover },
  { name: "nationalgrid", src: logoNationalgrid },
  { name: "North Highland", src: logoNorthHighland },
  { name: "Roche", src: logoRoche },
  { name: "Santander", src: santander },
  { name: "Shell", src: logoShell },
  { name: "Skipton", src: skipton },
  { name: "Ventures Platform", src: logoVenturesPlatform },
];

export function CompanyMix() {
  const companies = COMPANIES;
  const caption = "This is a mix of companies I have worked for and clients I have had.";
  return (
    <>
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .company-mix__track {
          animation: ticker 48s linear infinite;
        }
        
        .company-mix__track:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .company-mix__track {
            animation: none;
          }
        }
      `}</style>

      <section
        className="border-t border-b overflow-hidden"
        aria-label="Companies and clients"
      >
        {/* Carousel Viewport */}
        <div className="h-28 overflow-hidden mask-image-gradient">
          <style>{`
            .mask-image-gradient {
              mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
              -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
            }
          `}</style>
          <div className="company-mix__track flex items-center gap-14 w-max p-7">
            {[...companies, ...companies].map(({ name, src }, index) => (
              <span
                key={`${name}-${index}`}
                className="shrink-0 flex items-center justify-center w-30 h-16"
                title={name}
              >
                <Image
                  src={src}
                  alt={name}
                  className="w-auto h-auto object-contain"
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Caption */}
        {caption && (
          <p className="mb-8 text-xs leading-[1.4] text-center mt-4">
            {caption}
          </p>
        )}
      </section>
    </>
  );
}
