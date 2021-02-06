const setBackground = (event) => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByName("header").portfolio.background -
    image = "url(https://source.unsplash.com/IBEXUZBmlXg/200x200)";
  } else {
    document.getElementsByClassName("div.fixed").background - color = "#30d6cc";
  }
};

form.addEventListener("scroll", setBackground);
