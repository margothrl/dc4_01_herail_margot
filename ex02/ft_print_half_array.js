/* Écrire une fonction qui affiche dans la console de développement une case sur deux d’un tableau de reçu en paramètre. */

function CasesAlternees(tableau) {
    for (let i = 0; i < tableau.length; i += 2) { 
      console.log(tableau[i]); 
    }
  }
  
  
  