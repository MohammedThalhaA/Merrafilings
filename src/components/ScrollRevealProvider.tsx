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
          "[data-reveal], .reveal-on-scroll, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom"
        )
        .forEach((el) => {
          // If a full section has data-reveal, we don't want the whole section hiding; we want its contents to animate
          if (el.tagName.toLowerCase() !== "section") {
            targets.push(el);
          }
        });

      // 2. Section Headers (Badge, Title, Subtitle) - Float in from TOP
      document
        .querySelectorAll<HTMLElement>(
          "main section:not(.hero-section) > div > .text-center, main section:not(.hero-section) .section-header"
        )
        .forEach((header) => {
          if (
            !header.closest("header") &&
            !header.closest("nav") &&
            !header.classList.contains("no-reveal")
          ) {
            if (
              !header.classList.contains("reveal-down") &&
              !header.classList.contains("reveal-up") &&
              !header.classList.contains("reveal-left") &&
              !header.classList.contains("reveal-right") &&
              !header.hasAttribute("data-reveal")
            ) {
              header.classList.add("reveal-down");
            }
            targets.push(header);
          }
        });

      // 3. Two-Column Split Layouts - Left column from LEFT, Right column from RIGHT
      document
        .querySelectorAll<HTMLElement>(
          "main section:not(.hero-section) .grid.grid-cols-1.lg\\:grid-cols-12, main section:not(.hero-section) .grid.grid-cols-1.md\\:grid-cols-2"
        )
        .forEach((grid) => {
          const children = Array.from(grid.children) as HTMLElement[];
          if (children.length === 2) {
            const leftCol = children[0];
            const rightCol = children[1];

            if (
              !leftCol.classList.contains("reveal-left") &&
              !leftCol.hasAttribute("data-reveal") &&
              !leftCol.classList.contains("no-reveal")
            ) {
              leftCol.classList.add("reveal-left");
              targets.push(leftCol);
            }

            const isStickyRight =
              rightCol.classList.contains("sticky") ||
              rightCol.className.includes("sticky") ||
              rightCol.querySelector(".sticky, [class*='sticky']") !== null;

            if (
              !rightCol.classList.contains("reveal-right") &&
              !rightCol.hasAttribute("data-reveal") &&
              !rightCol.classList.contains("no-reveal") &&
              !isStickyRight
            ) {
              rightCol.classList.add("reveal-right");
              targets.push(rightCol);
            }
          }
        });

      // 4. Multi-Card Grids (3-col, 4-col, 6-col) - Dynamic multi-directional entrances
      document
        .querySelectorAll<HTMLElement>(
          "main section:not(.hero-section) .grid:not(.grid-cols-1.lg\\:grid-cols-12)"
        )
        .forEach((grid) => {
          const cards = Array.from(grid.children) as HTMLElement[];
          const colsCount = cards.length;

          cards.forEach((card, idx) => {
            if (
              card.classList.contains("no-reveal") ||
              card.closest("nav") ||
              card.closest("header")
            ) {
              return;
            }

            // Assign directional physics based on column position if not already specified
            if (
              !card.classList.contains("reveal-up") &&
              !card.classList.contains("reveal-left") &&
              !card.classList.contains("reveal-right") &&
              !card.classList.contains("reveal-down") &&
              !card.classList.contains("reveal-zoom") &&
              !card.hasAttribute("data-reveal")
            ) {
              if (colsCount >= 3) {
                const colPos = idx % 3;
                if (colPos === 0) {
                  card.classList.add("reveal-left");
                } else if (colPos === 1) {
                  card.classList.add("reveal-up");
                } else {
                  card.classList.add("reveal-right");
                }
              } else if (colsCount === 2) {
                if (idx % 2 === 0) {
                  card.classList.add("reveal-left");
                } else {
                  card.classList.add("reveal-right");
                }
              } else {
                card.classList.add("reveal-up");
              }
            }

            // Stagger delay for cascade
            const staggerIdx = (idx % 4) + 1;
            if (!card.classList.contains(`stagger-${staggerIdx}`)) {
              card.classList.add(`stagger-${staggerIdx}`);
            }

            // Automatically add icon popping effect to icons inside cards
            card.querySelectorAll<HTMLElement>(".w-10, .w-11, .w-12, .w-14").forEach((iconContainer) => {
              if (!iconContainer.classList.contains("reveal-icon")) {
                iconContainer.classList.add("reveal-icon");
              }
            });

            targets.push(card);
          });
        });

      // Deduplicate targets
      const uniqueTargets = Array.from(new Set(targets));
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("is-revealed");
              el.setAttribute("data-revealed", "true");
              activeObserver?.unobserve(el);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      uniqueTargets.forEach((target) => {
        // Exclude navigation, header, and explicit no-reveal elements
        if (
          target.classList.contains("hero-section") ||
          target.classList.contains("no-reveal") ||
          target.closest("header") ||
          target.closest("nav")
        ) {
          target.classList.add("is-revealed");
          target.setAttribute("data-revealed", "true");
          return;
        }

        // If element is already revealed, leave it permanently visible
        if (target.getAttribute("data-revealed") === "true") {
          target.classList.add("is-revealed");
          return;
        }

        const rect = target.getBoundingClientRect();
        // If element is already in the viewport on initial load (above the fold), reveal immediately
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          target.classList.add("is-revealed");
          target.setAttribute("data-revealed", "true");
        } else {
          // Off-screen elements: prime for visible directional scroll reveal
          target.classList.remove("is-revealed");
          activeObserver?.observe(target);
        }
      });
    };

    // Staggered initialization to capture DOM stabilization and client-side hydration
    const timer1 = setTimeout(setupObserver, 80);
    const timer2 = setTimeout(setupObserver, 400);

    // Mutation observer ensures React re-renders (like hover state or tab changes) NEVER wipe reveal state
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const target = mutation.target as HTMLElement;
          if (
            target.getAttribute("data-revealed") === "true" &&
            !target.classList.contains("is-revealed")
          ) {
            target.classList.add("is-revealed");
          }
        }
      }
    });

    mutationObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: true,
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (activeObserver) {
        activeObserver.disconnect();
      }
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
