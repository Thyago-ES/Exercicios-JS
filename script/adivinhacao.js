const numeroPC = Math.floor(Math.random() * 20) + 1;
let acertou = false;

while (acertou === false) {
	const numeroUser = prompt("Adivinhe qual é o número: [de 1 a 20]");

	if (numeroPC == numeroUser) {
		acertou = true;
		alert("Você acertou!");
	} else if (numeroUser > numeroPC) {
		alert("Muito alto! Abaixa um pouquinho!");
	} else if (numeroUser < numeroPC) {
		alert("Muito baixo! Aumenta um pouquinho!");
	}
}
