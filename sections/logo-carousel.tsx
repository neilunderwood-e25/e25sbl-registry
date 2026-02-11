"use client";

import Image from "next/image";
import Link from "next/link";

type Logo = {
  id: string;
  src: string;
  alt: string;
  link?: string;
};

const logos: Logo[] = [
  {
    id: "1",
    src: "/sample-logo.svg",
    alt: "React",
  },
  {
    id: "2",
    src: "/sample-logo.svg",
    alt: "Next.js",
  },
  {
    id: "3",
    src: "/sample-logo.svg",
    alt: "Vercel",
  },
  {
    id: "4",
    src: "/sample-logo.svg",
    alt: "TypeScript",
  },
  {
    id: "5",
    src: "/sample-logo.svg",
    alt: "Tailwind CSS",
  },
  {
    id: "6",
    src: "/sample-logo.svg",
    alt: "Stripe",
  },
  {
    id: "7",
    src: "/sample-logo.svg",
    alt: "Notion",
  },
  {
    id: "8",
    src: "/sample-logo.svg",
    alt: "GitHub",
  },
  {
    id: "9",
    src: "/sample-logo.svg",
    alt: "Figma",
  },
  {
    id: "10",
    src: "/sample-logo.svg",
    alt: "Framer Motion",
  },
  {
    id: "11",
    src: "/sample-logo.svg",
    alt: "Storybook",
  },
  {
    id: "12",
    src: "/sample-logo.svg",
    alt: "Sanity",
  },
];

export default function LogoCarousel() {
  return (
    <section className="relative bg-hero-1-bg py-xl overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-marquee gap-3xl">
          {/* First set of logos */}
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="h-[46px] shrink-0 flex items-center justify-center"
            >
              {logo.link ? (
                <Link
                  href={logo.link}
                  className="h-full transition-opacity duration-200 ease-in-out xl:hover:opacity-80 relative flex items-center justify-center"
                >
                  <Image
                    className="h-[32px] w-auto"
                    src={logo.src}
                    alt={logo.alt}
                    width={182}
                    height={32}
                    unoptimized
                    loading="eager"
                  />
                </Link>
              ) : (
                <div className="h-full w-full relative flex items-center justify-center">
                  <Image
                    className="h-[32px] w-auto"
                    src={logo.src}
                    alt={logo.alt}
                    width={182}
                    height={46}
                    unoptimized
                    loading="eager"
                  />
                </div>
              )}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo) => (
            <div
              key={`${logo.id}-duplicate`}
              className="h-[46px] shrink-0 flex items-center justify-center"
            >
              {logo.link ? (
                <Link
                  href={logo.link}
                  className="h-full transition-opacity duration-200 ease-in-out xl:hover:opacity-80 relative flex items-center justify-center"
                >
                  <Image
                    className="h-full w-auto"
                    src={logo.src}
                    alt={logo.alt}
                    width={182}
                    height={46}
                    unoptimized
                    loading="eager"
                  />
                </Link>
              ) : (
                <div className="h-full w-full relative flex items-center justify-center">
                  <Image
                    className="h-full w-auto"
                    src={logo.src}
                    alt={logo.alt}
                    width={182}
                    height={46}
                    unoptimized
                    loading="eager"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
