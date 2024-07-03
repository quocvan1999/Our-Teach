window.onscroll = function () {
  let headerElement = document.querySelector(".header");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    headerElement.classList.add("header-scroll");
  } else {
    headerElement.classList.remove("header-scroll");
  }
};

document.querySelector("#btnMenu").onclick = function () {
  document.querySelector(".header").classList.toggle("bg-white");
  document.querySelector(".menu").classList.toggle("menu-active");
  document.querySelector(".iconMenu1").classList.toggle("d-none");
  document.querySelector(".iconMenu2").classList.toggle("d-none");
};
