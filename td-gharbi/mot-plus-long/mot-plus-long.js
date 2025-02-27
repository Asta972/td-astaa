function compterCaracteres() {
    let mot = document.getElementById("mot").value.trim();
    let resultat = document.getElementById("resultat");

    if (mot === "") {
        resultat.textContent = "Veuillez entrer un mot.";
    } else {
        resultat.textContent = `Le mot "${mot}" contient ${mot.length} caractères.`;
    }

    resultat.style.display = "block";
}
