const {
  promedio,
  desviacionEstandar,
} = require("../Integraci-n_con_GitHub_Packages/estadisticas");
const {
  generarGrafico,
} = require("../Integraci-n_con_GitHub_Packages/graficas");

const datos = [10, 20, 30, 40, 50];

console.log("Promedio:", promedio(datos));
console.log("Desviación estándar:", desviacionEstandar(datos));

generarGrafico("grafico.png", ["A", "B", "C", "D", "E"], datos).then(() => {
  console.log("Gráfico generado.");
});
