"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    let activeObserver: IntersectionObserver | null = null;

    const setupObserver = () => {
      // Collect explicit targets as well as standard page sections and card grids
      const explicitTargets = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-reveal], .reveal-on-scroll, .pricing-card-lift, [data-reveal-card], .reveal-init"
        )
      );

      // Major semantic sections (excluding hero and navbar)
      const sectionTargets = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main > section:not(.hero-section):not(.no-reveal):not(#hero)"
        )
      );

      // Major cards inside grid sections (solutions, features, comparisons, testimonials)
      const cardTargets = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main section:not(.hero-section) .grid > div:not(.no-reveal)"
        )
      );

      // Combine unique targets
      const allTargets = Array.from(
        new Set([...explicitTargets, ...sectionTargets, ...cardTargets])
      );

      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("is-revealed");
              activeObserver?.unobserve(el);
            }
          });
        },
        {
          threshold: 0.06, // Trigger as soon as top 6% of the element enters the viewport
          rootMargin: "0px 0px -30px 0px", // Trigger smoothly just before it clears the bottom
        }
      );

      allTargets.forEach((target) => {
        // Exclude navigation, header, and explicit no-reveal elements
        if (
          target.classList.contains("hero-section") ||
          target.classList.contains("no-reveal") ||
          target.closest("header") ||
          target.closest("nav")
        ) {
          target.classList.add("is-revealed");
          return;
        }

        // Apply reveal base class if not already tagged
        if (
          !target.hasAttribute("data-reveal") &&
          !target.classList.contains("reveal-on-scroll") &&
          !target.classList.contains("pricing-card-lift")
        ) {
          target.classList.add("reveal-init");
        }

        // Add automatic stagger index to cards within grids
        if (target.parentElement && target.parentElement.classList.contains("grid")) {
          const siblings = Array.from(target.parentElement.children);
          const index = siblings.indexOf(target);
          if (index >= 0 && index < 6 && !target.classList.contains(`stagger-${index + 1}`)) {
            target.classList.add(`stagger-${(index % 4) + 1}`);
          }
        }

        const rect = target.getBoundingClientRect();
        // If element is already in the viewport on initial load (above the fold), reveal immediately
        if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
          target.classList.add("is-revealed");
        } else {
          // Keep element unrevealed until scrolled to
          target.classList.remove("is-revealed");
          activeObserver?.observe(target);
        }
      });
    };

    // Allow DOM to stabilize after Next.js page transition
    const timer = setTimeout(setupObserver, 80);

    return () => {
      clearTimeout(timer);
      if (activeObserver) {
        activeObserver.disconnect();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
