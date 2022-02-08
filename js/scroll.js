let targetElement = document.getElementById("_HeaderSection");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    targetElement.classList.add("scrolled");
    document.querySelector(".logoBlock a svg").style.fill = "red";
    document.querySelector(".authBlock ul li a").style.color = "#111";
    document.querySelector(".authBlock ul li span i").style.color = "#111";
    document.querySelector(".hiddenBlock").style.display = "flex";
    document.querySelector("nav").style.display = "none";
  } else {
    targetElement.classList.remove("scrolled");
    document.querySelector(".logoBlock a svg").style.fill = "#fff";
    document.querySelector(".authBlock ul li a").style.color = "#fff";
    document.querySelector(".authBlock ul li span i").style.color = "#fff";
    document.querySelector(".hiddenBlock").style.display = "none";
    document.querySelector("nav").style.display = "flex";
  }
});
