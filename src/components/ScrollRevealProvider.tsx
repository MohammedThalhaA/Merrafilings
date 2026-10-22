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
      if (activeObserver) {
        activeObserver.disconnect();
      }

      const targets: HTMLElement[] = [];

      // 1. Explicit directional & reveal elements
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal], .reveal-on-scroll, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom, .reveal-init"
        )
        .forEach((el) => {
          if (
            el.tagName.toLowerCase() !== "section" &&
            !el.classList.contains("no-reveal") &&
            !el.closest("header") &&
            !el.closest("nav")
          ) {
            targets.push(el);
          }
        });

      // 2. Section Headers (Badge, Title, Subtitle)
      document
        .querySelectorAll<HTMLElement>(
          "main section:not(.hero-section) .section-header"
        )
        .forEach((header) => {
          if (
            !header.closest("header") &&
            !header.closest("nav") &&
            !header.classList.contains("no-reveal") &&
            !header.hasAttribute("data-reveal")
          ) {
            targets.push(header);
          }
        });

      // Deduplicate targets
      const uniqueTargets = Array.from(new Set(targets));

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
          threshold: 0.05,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      uniqueTargets.forEach((target) => {
        if (target.classList.contains("is-revealed")) {
          return;
        }
        activeObserver?.observe(target);
      });
    };

    // Staggered frame after client mount ensures React hydration completes without interference
    const frameId = requestAnimationFrame(() => {
      setupObserver();
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (activeObserver) {
        activeObserver.disconnect();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
