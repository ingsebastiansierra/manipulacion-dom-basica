const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const pClase = document.getElementsByClassName("parrafito");
const pId = document.getElementById("parrafito");
const input = document.querySelector("input");

console.log(input.value);
console.log({ h1, p, pClase, pId, input });

h1.innerHTML = "EDITANDO H1 <br> CON INNERHTML";
h1.innerText = "EDITANDO <br> CON INNERHTML";

console.log(h1.getAttribute("class"));
h1.setAttribute("class", "Rojitoo");
h1.classList.add("green");

input.value = "EDITANDO VALUE DE ESTE INPUT";
const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200/300");
console.log(img);

pId.innerHTML = "";
pId.appendChild(img);
