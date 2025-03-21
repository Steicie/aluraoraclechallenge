function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sortearAmigoSecreto(participantes) {
    let sorteio = [...participantes];  // Cria uma cópia do array
    do {
        sorteio = embaralhar(sorteio);  // Embaralha o array de sorteio
    } while (sorteio.some((p, i) => p === participantes[i]));  // Garante que ninguém tire a si mesmo

    return participantes.map((p, i) => ({ amigo: p, sorteado: sorteio[i] }));
}

// Adiciona participantes à lista
document.getElementById("adicionar").addEventListener("click", function () {
    const input = document.getElementById("participante").value.trim();
    if (input) {
        const lista = document.getElementById("listaAmigos");
        const item = document.createElement("li");
        item.textContent = input;
        lista.appendChild(item);
        document.getElementById("participante").value = "";
    }
});

// Evento do botão Sortear
document.getElementById("sortear").addEventListener("click", function () {
    const lista = document.querySelectorAll("#listaAmigos li");
    const participantes = Array.from(lista).map(li => li.textContent);

    console.log("Participantes:", participantes);  // Verifica os participantes no console

    if (participantes.length < 2) {
        alert("É necessário pelo menos dois participantes para o sorteio.");
        return;
    }

    const resultado = sortearAmigoSecreto(participantes);
    console.log("Resultado do sorteio:", resultado);  // Verifica o resultado do sorteio no console

    // Exibe os resultados na lista
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa resultados anteriores
    resultado.forEach(par => {
        const item = document.createElement("li");
        item.textContent = `${par.amigo} → ${par.sorteado}`;
        resultadoLista.appendChild(item);
    });
});


