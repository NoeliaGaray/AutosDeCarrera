rotulo1.innerHTML = "Primera vuelta";
rotulo2.innerHTML = "Segunda vuelta";
rotulo3.innerHTML = "Tercera vuelta";
rotulo4.innerHTML = "Cuarta vuelta";

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);
  let resultado: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  let promedio: number = resultado / 4;

  console.log("El tiempo total es:", resultado);
  console.log("El promedio de vuelta es de:", promedio);
});
