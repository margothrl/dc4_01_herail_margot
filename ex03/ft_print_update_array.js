/* Écrire une fonction qui reçoit un tableau de chiffre en paramètre, qui ajoute plus un à la valeur de chaque cellule et qui affiche le tableau mis à jour. */

function ajouterUn(tableau) {
    const nouveauTableau = tableau.map(x => x + 1); 
    console.log(nouveauTableau); 
  }
  
  