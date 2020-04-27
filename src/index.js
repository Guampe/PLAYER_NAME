import "./styles.css";

document.getElementById("app").innerHTML = `
<p>READY Playe 1: N_A_M_E___H_E_R_E </p>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Ingresa nombre");
  para.textContent = "Player 1: " + name;
}
