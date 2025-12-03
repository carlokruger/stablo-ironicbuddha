// Helper to get a random float between min and max
function randBetween(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Split every .wobble-text element into spans per character
  const containers = document.querySelectorAll(".wobble-text");

  containers.forEach(container => {
    const text = container.textContent;
    container.textContent = ""; // clear it

    [...text].forEach(char => {
      if (char === " ") {
        // preserve spaces as actual spaces
        container.appendChild(document.createTextNode(" "));
      } else {
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("wobble-char");
        container.appendChild(span);
      }
    });
  });

  // 2. Add hover behavior to each character
  const chars = document.querySelectorAll(".wobble-char");

  chars.forEach(span => {
    let timeoutId = null;

    const flipLoop = () => {
      // Randomly decide whether to flip on this tick
      if (Math.random() < 0.6) {
        span.classList.toggle("mirrored");
      }

      // Optional jitter toggle for extra weirdness
      if (Math.random() < 0.3) {
        span.classList.toggle("jitter");
      }

      // Schedule next flip at a random time for "unpredictable" behavior
      const nextDelay = randBetween(40, 200); // in ms
      timeoutId = setTimeout(flipLoop, nextDelay);
    };

    span.addEventListener("mouseenter", () => {
      if (timeoutId === null) {
        flipLoop();
      }
    });

    span.addEventListener("mouseleave", () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      // Reset character state when cursor leaves
      span.classList.remove("mirrored", "jitter");
    });
  });
});