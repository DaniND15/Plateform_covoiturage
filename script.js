// Ajoute un événement à la soumission du formulaire
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs des champs du formulaire
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const passengers = document.getElementById("passengers").value;

    // Construit l'URL avec les paramètres de recherche
    const url = `resultats.html?departure=${encodeURIComponent(departure)}&destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(date)}&passengers=${encodeURIComponent(passengers)}`;

    // Redirige l'utilisateur vers la page resultats.html
    window.location.href = url;
});
