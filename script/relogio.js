const visorHoras = document.querySelector("#visor-h");
const visorMinutos = document.querySelector("#visor-m");
const visorSegundos = document.querySelector("#visor-s");

function formatarData(numero) {
	return numero < 10 ? "0" + numero : numero;
}

function atualizarHora() {
	const data = new Date();

	visorSegundos.innerHTML = formatarData(data.getSeconds());
	visorMinutos.innerHTML = formatarData(data.getMinutes());
	visorHoras.innerHTML = formatarData(data.getHours());
}

setInterval(() => {
	atualizarHora();
}, 1000);
