"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const setupObserver = () => {
      // Find all sections and data-reveal elements
      const targets = document.querySelectorAll<HTMLElement>(
        "section, [data-reveal], .reveal-on-scroll, .pricing-card, .bento-card"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("is-revealed");
              // Cascade reveal any children with data-reveal or stagger classes
              const children = el.querySelectorAll<HTMLElement>("[data-reveal]");
              children.forEach((child) => child.classList.add("is-revealed"));
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      targets.forEach((target) => {
        // Exclude hero section, no-reveal elements, and header/navbar
        if (
          target.classList.contains("hero-section") ||
          target.classList.contains("no-reveal") ||
          target.closest("header") ||
          target.closest("nav")
        ) {
          target.classList.add("is-revealed");
          return;
        }

        const rect = target.getBoundingClientRect();
        // If element is already in initial view (or above fold), reveal immediately
        if (rect.top < windowHeight * 0.95) {
          target.classList.add("is-revealed");
        } else {
          observer.observe(target);
        }
      });

      return observer;
    };

    const timer = setTimeout(() => {
      const observer = setupObserver();
      return () => observer?.disconnect();
    }, 40);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
