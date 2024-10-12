// Sélectionner tous les boutons de téléchargement
const downloadButtons = document.querySelectorAll('.download-button');

// Ajouter un événement de survol pour les boutons de téléchargement
downloadButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transition = 'background-color 0.3s ease';
        button.style.backgroundColor = '#b92b27'; // Couleur de survol
        button.style.color = '#ffffff'; // Couleur de texte en survol
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = ''; // Rétablir la couleur par défaut
        button.style.color = ''; // Rétablir la couleur par défaut
    });
});

// Gestion des téléchargements
downloadButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const fileUrl = event.target.getAttribute('data-file-url');
        if (fileUrl) {
            // Lancer le téléchargement
            window.location.href = fileUrl;
        } else {
            alert('Aucun fichier à télécharger.');
        }
    });
});
