let dropLink = document.querySelector("#dropLink");
let dropdownMenu = document.querySelector(".dropdownMenu");
console.log(dropLink);
console.log(dropdownMenu);

dropLink.addEventListener("click", e => {
  console.log(e.target);
  let active = dropdownMenu.classList.toggle("active");
  console.log(active);
  if (active === true) {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

// Location dropdown
function dropdown1() {
  var location = document.querySelector(".locationBlock");
  if (location.style.display == "none") {
    location.style.display = "block";
  } else {
    location.style.display = "none";
  }
}

// let globe = document.querySelector(".globe");
// let popup = document.querySelector(".popup");
// globe.addEventListener("click", e => {
//   popup.classList.toggle("active");
// });

// data
let tripData = [
  {
    image:
      "https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320",
    title: "Lonavla",
    description: "66 kilometers away",
    color: "#bc1a6e",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=320",
    title: "Alibag",
    description: "36 kilometers away",
    color: "#de3151",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=320",
    title: "Calangute",
    description: "396 kilometers away",
    color: "#cc2d4a",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/85bff6ba-f4d0-4094-926e-a4fbc21bab4e.jpg?im_w=320",
    title: "Karjat",
    description: "53 kilometers",
    color: "#d93b30",
  },
];

let tripContent = document.getElementById("tripBlock");
let output = [];
// loop each block
tripData.forEach((trip, index) => {
  output += `
  <div class="tripContainer" style="background-color:${trip.color}">
  <figure>
  <img src=${trip.image} alt=${trip.title}/>
  </figure>
  <h2>${trip.title}</h2>
  <p>${trip.description}</p>
  </div>
  `;
});

tripContent.innerHTML = output;

//
