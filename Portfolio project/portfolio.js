let nav = document.querySelector("nav");

const scrollNav = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    nav.style.background = "#343434";
    nav.style.padding = "1%";
  } else {
    nav.style.background = "transparent";
    nav.style.padding = "1%";
  }
};

window.addEventListener("scroll", scrollNav);

// Point is that you have bg color transp. or colored.
