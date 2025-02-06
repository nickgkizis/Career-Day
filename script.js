document.querySelectorAll(".contact-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    // Show a quick burst of confetti where the user clicked
    confetti({
      particleCount: 40,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
    });
  });
});
