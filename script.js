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

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici
 