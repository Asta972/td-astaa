function construirePyramide() {
    let lignes = parseInt(document.getElementById("ligne-pyramide").value);
    let pyramide = "";

    for (let i = 1; i <= lignes; i++) {
        pyramide += " ".repeat(lignes - i) + "*".repeat(2 * i - 1) + "\n";
    }

    document.getElementById("pyramide").textContent = pyramide.slice(0, pyramide.length);
}
