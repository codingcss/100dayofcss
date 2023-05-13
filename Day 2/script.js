document.querySelector(".menu-icon").bind("click", function () {
  document.querySelector(this).classList.toggle("active");
  document
    .querySelector(this)
    .querySelector("div")
    .classList.remove("no-animation");
});
