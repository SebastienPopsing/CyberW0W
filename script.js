function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 


//NOM JOURNAL

let nomJournal = data.journal.nomJournal;
console.log(nomJournal);
let nomJournalReplacment = document.querySelector('.mag_name');

nomJournalReplacment.textContent = nomJournal;

//APPEL ACTION

let texteAppelAction = data.journal.texteAppelAction;
console.log(texteAppelAction);
let texteAppelActionReplacment = document.querySelector('#appel_action');

texteAppelActionReplacment.textContent = texteAppelAction;

//Article principal

let articlePrincipalTitle = data.journal.articlePrincipal.titre;
console.log(articlePrincipalTitle);
let articlePrincipalTitleReplacment = document.querySelector('#article_principal_title');
articlePrincipalTitleReplacment.textContent = articlePrincipalTitle;

let articlePrincipalTheme = data.journal.articlePrincipal.theme;
console.log(articlePrincipalTheme);
let articlePrincipalDate = data.journal.articlePrincipal.date;
console.log(articlePrincipalDate);
let articlePrincipalThemeDateReplacment = document.querySelector('#article_principal_theme_date');
articlePrincipalThemeDateReplacment.textContent = `${articlePrincipalTheme} - ${articlePrincipalDate}`;

let articlePrincipalDescription = data.journal.articlePrincipal.description;
console.log(articlePrincipalDescription);
let articlePrincipalDescriptionReplacment = document.querySelector('#article_principal_description');
articlePrincipalDescriptionReplacment.textContent = articlePrincipalDescription;


let articleTitre = data.journal.articles[0].titre;
console.log(articleTitre);
let articleTheme = data.journal.articles[0].theme;
console.log(articleTheme);
let articleDate = data.journal.articles[0].date;
console.log(articleDate);
let articleImage = data.journal.articles[0].image;
console.log(articleImage);


/// FIN DU CODE
})
 .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 ///ON écrit les fonctions ici

 getData();

 ///ON écrit les fonctions ici
 