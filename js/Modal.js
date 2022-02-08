let loginLink = document.querySelector("#login");
let modalBlock = document.querySelector(".modalBlock");

// dom events
loginLink.addEventListener(
  "click",
  e => {
    e.preventDefault();
    modalBlock.style.display = "block";
    modalBlock.classList.add = "open";
    document.querySelector(".dropDownMenu").style.display = "none";
    //   document.body.style.filter = "brightness(0.5)";
  },
  true
);

document.addEventListener(
  "click",
  e => {
    if (
      e.target.matches(".modalBlock span i") ||
      !e.target.closest(".modalBlock")
    ) {
      modalBlock.style.display = "none";
    }
  },
  true
);
