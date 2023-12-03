let colorLeft = document.querySelector("#color1");
let colorRight = document.querySelector("#color2");
let body = document.querySelector(".body");

colorLeft.addEventListener("input", change);
colorRight.addEventListener("input", change);

function change() {
  body.style.background = `linear-gradient(to right, ${colorLeft.value}, ${colorRight.value})`;
}
change();
