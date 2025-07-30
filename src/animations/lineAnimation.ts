"use client";

export const initLineAnimation = (): (() => void) => {
  if (typeof window === "undefined") return () => {};

  const handleScroll = () => {
    const sections = document.querySelectorAll("[data-section-id]");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (isVisible) {
        section.classList.add("opacity-100", "translate-y-0");

        // Find the line element within this section and animate it
        const lineElement = section.querySelector(".icon-line");
        if (lineElement) {
          lineElement.classList.add("h-full");
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  // Trigger once on initial load
  setTimeout(handleScroll, 100);

  // Return cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
