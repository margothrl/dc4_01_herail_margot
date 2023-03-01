/* Écrire une fonction qui prend en entrée un tableau d'entiers non trié et qui le trie par insertion. La fonction doit modifier le tableau d'origine et afficher le tableau trié. */

function triInsertion(tableau) {
    for (let i = 1; i < tableau.length; i++) {
      const valeurCourante = tableau[i];
      let j = i - 1;
      while (j >= 0 && tableau[j] > valeurCourante) {
        tableau[j + 1] = tableau[j];
        j--;
      }
      tableau[j + 1] = valeurCourante;
    }
    console.log(tableau);
  }
  
 