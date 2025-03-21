function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sortearAmigoSecreto(participantes) {
    let sorteio = [participantes];
    do {
        sorteio = embaralhar([participantes]);
    } while (sorteio.some((p, i) => p === participantes[i]));

    return participantes.map((p, i) => ({ amigo: p, sorteado: sorteio[i] }));
}

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

document.getElementById("sortear").addEventListener("click", function () {
    const lista = document.querySelectorAll("#listaAmigos li");
    const participantes = Array.from(lista).map(li => li.textContent);

    if (participantes.length < 2) {
        alert("É necessário pelo menos dois participantes para o sorteio.");
        return;
    }

    const resultado = sortearAmigoSecreto(particiJpantes);

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpa resultados anteriores
    resultado.forEach(par => {
        const item = document.createElement("li");
        item.textContent = `${par.amigo} → ${par.sorteado}`;
        resultadoLista.appendChild(item);
    });
});

