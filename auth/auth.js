// Gestion de l'authentification
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Ici, ajouter la logique de connexion réelle
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = "../index.html";
});

// Vérification de l'état de connexion
function checkAuth() {
    if(localStorage.getItem('isLoggedIn') === 'true') {
        // Modifier le bouton de connexion en "Mon compte"
        const authLinks = document.querySelectorAll('a[href="auth/login.html"]');
        authLinks.forEach(link => {
            link.textContent = "Mon compte";
            link.href = "#";
        });
    }
}

// Appeler au chargement
document.addEventListener('DOMContentLoaded', checkAuth);
