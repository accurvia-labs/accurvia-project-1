"use client";

import Image from "next/image";
import styles from "./StyleModuleCompanyMix/CompanyMix.module.css";

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

type SizeVariant = "small" | "medium" | "large";

interface Company {
  name: string;
  src: typeof logoAllianz;
  size?: SizeVariant;
}

const company: Company[] = [
  { name: "Allianz", src: logoAllianz },
  { name: "Bank", src: logoBank, size: "large" },
  { name: "BBC", src: logoBbc, size: "large" },
  { name: "BIP", src: logoBip, size: "large" },
  { name: "BNP Paribas Cardif", src: logoBnpParibasCardif },
  { name: "Dept. of Transport", src: logoDeptTrans, size: "large" },
  { name: "Jaguar", src: logoJaguar, size: "large" },
  { name: "KPMG", src: logoKpmg },
  { name: "Land Rover", src: logoLandRover },
  { name: "nationalgrid", src: logoNationalgrid, size: "large" },
  { name: "North Highland", src: logoNorthHighland, size: "large" },
  { name: "Roche", src: logoRoche },
  { name: "Santander", src: santander, size: "large" },
  { name: "Shell", src: logoShell },
  { name: "Skipton", src: skipton, size: "large" },
  { name: "Ventures Platform", src: logoVenturesPlatform, size: "large" },
];

const sizeClasses: Record<SizeVariant, string> = {
  small: "max-h-5 sm:max-h-6",
  medium: "max-h-6 sm:max-h-8",
  large: "max-h-8 sm:max-h-10",
};

const caption =
  "This is a mix of companies I have worked for and clients I have had.";

export function CompanyMix() {
  return (
    <section
      className="border-t border-b overflow-hidden py-2 sm:py-0"
      aria-label="Companies and clients"
    >
      {/* Carousel Viewport */}
      <div
        className={`${styles.viewport} h-20 sm:h-24 md:h-28 overflow-hidden`}
      >
        <div
          className={`${styles.track} flex items-center gap-8 sm:gap-10 md:gap-14 w-max px-4 sm:px-6 md:px-7 h-full`}
        >
          {[...company, ...company].map(
            ({ name, src, size = "medium" }, index) => (
              <span
                key={`${name}-${index}`}
                className="shrink-0 flex items-center justify-center w-20 sm:w-24 md:w-28"
                title={name}
              >
                <Image
                  src={src}
                  alt={name}
                  className={`w-auto h-auto object-contain ${sizeClasses[size]}`}
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                  loading="lazy"
                />
              </span>
            ),
          )}
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed text-center px-6 mt-3 sm:mt-4 mb-4 sm:mb-6 md:mb-8">
          {caption}
        </p>
      )}
    </section>
  );
}
