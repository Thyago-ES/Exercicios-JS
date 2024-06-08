const verificarPalindromo = (palavra) => {
	const palavraReversa = palavra.split("").reverse().join("");

	return palavra === palavraReversa;
};

while (true) {
	const palavra = prompt("Digite uma palavra e veja se é um palíndromo:");

	alert(
		verificarPalindromo(palavra) ? "É um palíndromo!" : "Não é um palíndromo!"
	);
}
