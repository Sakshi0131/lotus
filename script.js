// Buy Now Button
document.querySelector(".primary").addEventListener("click", () => {
  alert("Thanks for choosing Lotus WhiteGlow! 🧴✨");
});

// Learn More scroll
document.querySelector(".secondary").addEventListener("click", () => {
  document.querySelector("#ingredients").scrollIntoView({ behavior: "smooth" });
});
