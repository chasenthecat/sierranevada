let toggleTheme = document.querySelector("#theme-toggler");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
