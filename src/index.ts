import "./styles.css";

let clave: string = "";
let contador: number = 1;

//clave = prompt("Ingrese: ");

while (clave !== "e" && Number(contador <= 3)) {
  clave = prompt("Ingrese: ");
  contador++;
}
if (clave === "e") {
  console.log("bienvenido");
  alert("bienvenido");
} else if (clave !== "e") {
  console.log("reingresa");
  alert("eingresa");
} else {
  alert("se terminaron tus oportunidades");
}
