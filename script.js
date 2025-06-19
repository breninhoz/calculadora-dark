function calcular() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const operador = document.getElementById("operador").value;
    const resultadoEl = document.getElementById("resultado");

    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        resultadoEl.textContent = "Por favor, insira dois números válidos.";
        resultadoEl.style.color = "red"; // erro
        return;
    }

    switch (operador) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            if (n2 === 0) {
                resultadoEl.textContent = "Erro: divisão por zero!";
                resultadoEl.style.color = "red"; // erro
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            resultadoEl.textContent = "Operador inválido";
            return;
    }
    
    resultadoEl.textContent = `Resultado: ${resultado}`;
    resultadoEl.style.color = "red"; // erro
    resultadoEl.style.color = "#4caf50"; // sucesso
}

// Alternar tema (dark/light)
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

function aplicarTema(tema) {
    body.classList.remove("dark", "light");
    body.classList.add(tema);
    localStorage.setItem("tema", tema);
}

toggleBtn.addEventListener("click", () => {
    const novoTema = body.classList.contains("dark") ? "light" : "dark";
    aplicarTema(novoTema);
});

// Carregar tema salvo
const temaSalvo = localStorage.getItem("tema") || "dark";
aplicarTema(temaSalvo);