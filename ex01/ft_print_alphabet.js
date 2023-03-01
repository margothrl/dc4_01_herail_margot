/* Écrire une fonction qui affiche l’alphabet en majuscule, une string contenant l’alphabet en minuscule sera passée en paramètre la fonction. Chaque lettre devra être stockée dans une cellule du tableau. */

function afficherAlphabetEnMajuscule(str) {
    const alphabetEnMinuscule = str.split('');
    const alphabetEnMajuscule = [];
          for (let i = 0; i < alphabetEnMinuscule.length; i++) {
                 const lettreEnMinuscule = alphabetEnMinuscule[i];
                 const lettreEnMajuscule = String.fromCharCode(lettreEnMinuscule.charCodeAt() - 32);
                    alphabetEnMajuscule.push(lettreEnMajuscule);
    }
    console.log(alphabetEnMajuscule);
  }
  
