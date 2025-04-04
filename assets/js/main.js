// Navigation fluide pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Vérification de connexion pour l'achat
document.querySelectorAll('.btn[href="#ebooks"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Ici vous devriez vérifier si l'utilisateur est connecté
        // Pour cet exemple, nous redirigeons toujours vers la page de connexion
        if (!this.classList.contains('disabled')) {
            e.preventDefault();
            window.location.href = "auth/login.html";
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons dès que possible.');
        this.reset();
    });
}
// Vérification de connexion pour la page ebook
if (window.location.pathname.includes('ebook-football')) {
    const purchaseBtn = document.getElementById('purchase-btn');
    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', function(e) {
            // Ici vous devriez vérifier si l'utilisateur est connecté
            // Pour l'exemple, nous redirigeons vers la page de connexion
            const isLoggedIn = false; // À remplacer par votre vérification
            
            if (!isLoggedIn) {
                e.preventDefault();
                alert('Veuillez vous connecter pour procéder à l\'achat.');
                window.location.href = "auth/login.html";
            }
        });
    }
}
