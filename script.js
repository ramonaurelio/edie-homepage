const btnMobile = document.getElementById("btn-mobile");
const lists = document.querySelectorAll(".navigation li a");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

lists.forEach((list) => {
  list.addEventListener("click", handleClick);
});

function handleClick() {
  const nav = document.getElementById("nav");
  nav.classList.remove("active");
}
