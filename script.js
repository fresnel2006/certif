const nom=document.getElementById("nom");
const message=document.getElementById("messagebienvenue");
const formulaire = document.getElementById("formulaire"); 
formulaire.addEventListener("submit", function(event) { 
event.preventDefault(); })
function messageUtilisateur(){
    if(nom.value ==""){
        alert("LE CHAMPS DE SAISIE DU NOM ETS VIDE.")
    }else{
        message.textContent=`${nom.value}`
    }
}
const couleur_de_fond=document.createElement("button");
couleur_de_fond.textContent=`couleur de fond`;

couleur_de_fond.addEventListener("click",function(){
    document.body.style.backgroundColor="lightblue";
})
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
boutonSoumettreReponse.addEventListener("click", function() { 
const reponse = inputReponse.value.toLowerCase(); 
if (reponse === "pomme") { 
alert("Bonne réponse ! La pomme est un fruit très populaire."); 
} else if (reponse === "banane") { 
alert("Mmm, la banane est délicieuse aussi !"); 
} else { 
alert("C’est un fruit intéressant, mais pas le plus commun !"); 
} 
// Réinitialiser le champ de texte 
inputReponse.value = ""; 
});