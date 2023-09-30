const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");

form.addEventListener("submit", sumarInputValue);

function sumarInputValue(event) {
  event.preventDefault();
  const resultado = parseInt(input1.value) + parseInt(input2.value);
  const parrafocreado = document.createElement("p");
  parrafocreado.textContent = "Su resultado es: " + resultado;
  document.body.appendChild(parrafocreado);
  input1.value = "";
  input2.value = "";
}
