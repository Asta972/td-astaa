function tirage() {
    let mangas = ["perdu", "Gagner",];
    let choix = mangas[Math.floor(Math.random() * mangas.length)];

    document.getElementById("affichage").textContent = `tu as : ${choix}`;
}
