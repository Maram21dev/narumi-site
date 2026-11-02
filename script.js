const btn = document.querySelector(".menu"),
  nav = document.querySelector("nav");
btn.addEventListener("click", () => {
  nav.classList.toggle("open");
  btn.setAttribute(
    "aria-label",
    nav.classList.contains("open") ? "Close menu" : "Open menu",
  );
  btn.textContent = nav.classList.contains("open") ? "×" : "☰";
});
nav
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
document.getElementById("year").textContent = new Date().getFullYear();
