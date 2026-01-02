document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-links button");

  // Load Home by default
  render(DATA.home);
  buttons[0].classList.add("active");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;

      // Safety check
      if (!DATA[tab]) {
        console.error("No data found for tab:", tab);
        return;
      }

      // Render content
      render(DATA[tab]);

      // Active state
      buttons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      // UX polish
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
