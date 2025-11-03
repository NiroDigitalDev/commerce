"use client";

import { Reveal } from "@/components/animations";
import clsx from "clsx";
import AnimatedLink from "components/animated-link";
import LogoSquare from "components/logo-square";
import Link from "next/link";
import FooterLeftGradient from "./footer-left-gradient";
import FooterRightGradient from "./footer-right-gradient";
import { Collection } from "lib/shopify/types";

const { COMPANY_NAME, SITE_NAME } = process.env;

interface FooterProps {
  className?: string;
  collections?: Collection[];
}

const Footer = ({ className, collections = [] }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || "";
  
  // Filter out "All" collection and hidden collections
  const displayCollections = collections.filter(
    (collection) => collection.handle !== "" && !collection.handle.startsWith("hidden")
  );

  return (
    <footer className={clsx("bg-black relative overflow-hidden", className)}>
      {/* Right gradient */}
      <FooterRightGradient />

      {/* Left gradient */}
      <FooterLeftGradient />

      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <Reveal
            delay={0.1}
            direction="up"
            className="col-span-12 xl:col-span-4"
          >
            <div>
              <div className="max-w-[306px]">
                <Link href="/" className="flex items-center gap-2">
                  <LogoSquare />
                  <span className="ml-2 text-sm font-medium uppercase text-white md:hidden lg:block">
                    {SITE_NAME}
                  </span>
                </Link>
                <p className="text-neutral-400 mt-4 mb-7 font-normal text-sm">
                  Turpis tortor nunc sed amet et faucibus vitae morbi congue sed
                  id mauris.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com"
                    className="text-neutral-400 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="bg-neutral-700 h-6 w-px"></div>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com"
                    className="text-neutral-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.954 2.013 9.298 2 11.941 2h.08zM12 6.838a5.162 5.162 0 100 10.324 5.162 5.162 0 000-10.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="bg-neutral-700 h-6 w-px"></div>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com"
                    className="text-neutral-400 hover:text-white transition-colors"
                    aria-label="Youtube"
                  >
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <div className="bg-neutral-700 h-6 w-px"></div>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com"
                    className="text-neutral-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            <Reveal
              delay={0.2}
              direction="up"
              className="col-span-12 md:col-span-3"
            >
              <div>
                <div className="space-y-8">
                  <p className="text-white font-semibold text-base">Collections</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <AnimatedLink
                        href="/shop"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        All Products
                      </AnimatedLink>
                    </li>
                    {displayCollections.map((collection) => (
                      <li key={collection.handle}>
                        <AnimatedLink
                          href={collection.path}
                          className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                        >
                          {collection.title}
                        </AnimatedLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal
              delay={0.25}
              direction="up"
              className="col-span-12 md:col-span-3"
            >
              <div>
                <div className="space-y-8">
                  <p className="text-white font-semibold text-base">Company</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <AnimatedLink
                        href="/about"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        About Us
                      </AnimatedLink>
                    </li>
                    <li>
                      <AnimatedLink
                        href="/career"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Career
                      </AnimatedLink>
                    </li>
                    <li>
                      <AnimatedLink
                        href="/contact"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Contact Us
                      </AnimatedLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal
              delay={0.3}
              direction="up"
              className="col-span-12 md:col-span-3"
            >
              <div>
                <div className="space-y-8">
                  <p className="text-white font-semibold text-base">Support</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <AnimatedLink
                        href="/faq"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        FAQ
                      </AnimatedLink>
                    </li>
                    <li>
                      <AnimatedLink
                        href="/support"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Support
                      </AnimatedLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal
              delay={0.35}
              direction="up"
              className="col-span-12 md:col-span-3"
            >
              <div>
                <div className="space-y-8">
                  <p className="text-white font-semibold text-base">
                    Legal Policies
                  </p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <AnimatedLink
                        href="/policies/terms-conditions"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Terms & Conditions
                      </AnimatedLink>
                    </li>
                    <li>
                      <AnimatedLink
                        href="/policies/privacy-policy"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Privacy Policy
                      </AnimatedLink>
                    </li>
                    <li>
                      <AnimatedLink
                        href="/policies/return-refund"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Return & Refund Policy
                      </AnimatedLink>
                    </li>
                    <li>
                      <AnimatedLink
                        href="/policies/shipping"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Shipping Policy
                      </AnimatedLink>
                    </li>
                    <li>
                      <AnimatedLink
                        href="/policies/cookie-policy"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Cookie Policy
                      </AnimatedLink>
                    </li>
                    <li>
                      <AnimatedLink
                        href="/policies/cancellation"
                        className="text-neutral-400 hover:text-white dark:text-neutral-400 dark:hover:text-white"
                      >
                        Cancellation Policy
                      </AnimatedLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.4} direction="up">
          <div className="relative pt-[26px] pb-[100px] text-center border-t border-neutral-800">
            <p className="text-neutral-400 font-normal text-sm">
              Copyright &copy; {currentYear} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith(".")
                ? "."
                : ""}{" "}
              All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
