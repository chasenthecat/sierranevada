const themeToggler = document.querySelector("#theme-toggler");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("websiteTheme", "dark-mode");
  } else {
    localStorage.setItem("websiteTheme", "default");
  }
});

const retrieveTheme = () => {
  const theme = localStorage.getItem("websiteTheme");
  if (theme != null) {
    document.body.classList.remove("default", "dark-mode");
    document.body.classList.add(theme);
  }
};

retrieveTheme();

window.addEventListener("storage", () => retrieveTheme(), false);
