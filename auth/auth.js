import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBzMi3F5vLM0bYxTY1KuBJf7eD6Nx96wsQ",
    authDomain: "login-ec53a.firebaseapp.com",
    projectId: "login-ec53a",
    storageBucket: "login-ec53a.appspot.com",
    messagingSenderId: "123644267529",
    appId: "1:123644267529:web:5409efdf896971c655bcd8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Connexion
document.getElementById('login-btn')?.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        sessionStorage.setItem('user', JSON.stringify({
            email: userCredential.user.email,
            uid: userCredential.user.uid
        }));
        window.location.href = '../index.html'; // Redirection vers l'accueil
    } catch (error) {
        alert('Erreur: ' + error.message);
    }
});
