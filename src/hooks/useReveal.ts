import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const showAll = () => nodes.forEach((node) => node.classList.add("is-in"));

    if (reduce.matches || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    nodes.forEach((node) => observer.observe(node));

    const onPreference = () => {
      if (reduce.matches) {
        showAll();
        observer.disconnect();
      }
    };
    reduce.addEventListener("change", onPreference);
    return () => {
      observer.disconnect();
      reduce.removeEventListener("change", onPreference);
    };
  }, []);
}
