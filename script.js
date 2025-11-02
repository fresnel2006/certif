// Fonctions pour index.html
const nom = document.getElementById("nom");
const message = document.getElementById("messagebienvenue");
const formulaire = document.getElementById("formulaire");

if (formulaire) {
    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();
    });
}

function messageUtilisateur() {
    if (nom && nom.value == "") {
        alert("LE CHAMPS DE SAISIE DU NOM EST VIDE.");
    } else if (nom && message) {
        message.textContent = `${nom.value}`;
    }
}

const couleur_de_fond = document.createElement("button");
couleur_de_fond.textContent = `couleur de fond`;

couleur_de_fond.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
document.body.appendChild(couleur_de_fond);

const questionDiv = document.createElement("div");
questionDiv.innerHTML = `
<label for="reponse">Quel est ton fruit préféré ?</label>
<input type="text" id="reponse" required>
<button id="soumettreReponse">Soumettre</button>
`;
document.body.appendChild(questionDiv);

// Ajouter un événement pour afficher un message personnalisé
const boutonSoumettreReponse = document.getElementById("soumettreReponse");
const inputReponse = document.getElementById("reponse");
if (boutonSoumettreReponse) {
    boutonSoumettreReponse.addEventListener("click", function() {
        const reponse = inputReponse.value.toLowerCase();
        if (reponse === "pomme") {
            alert("Bonne réponse ! La pomme est un fruit très populaire.");
        } else if (reponse === "banane") {
            alert("Mmm, la banane est délicieuse aussi !");
        } else {
            alert("C'est un fruit intéressant, mais pas le plus commun !");
        }
        // Réinitialiser le champ de texte
        inputReponse.value = "";
    });
}

// Fonctions pour portfolio.html
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        if (name && email && message) {
            alert(`Merci ${name}, votre message a été envoyé !`);
            contactForm.reset();
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
}

// Animation simple pour les sections
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    section.addEventListener("mouseenter", function() {
        section.style.transform = "scale(1.02)";
        section.style.transition = "transform 0.3s";
    });
    section.addEventListener("mouseleave", function() {
        section.style.transform = "scale(1)";
    });
});
