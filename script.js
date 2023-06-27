const toggleMode = document.querySelector(".toggleMode");

toggleMode.addEventListener("click", (e) => {
  e.preventDefault();
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains('light')) {
    img.setAttribute('src', './img/avatar-light.jpg');
  } else {
    img.setAttribute('src', './img/avatar.jpg');
 
  }
  
});
