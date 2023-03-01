/* Écrire une fonction qui insert dans un tableau un nombre reçu en paramètre dans l’ordre croissant. */

function insererDansTableau(nombre, tableau) {
    let index = 0;
    while (index < tableau.length && tableau[index] < nombre) {
      index++;
    }
    tableau.splice(index, 0, nombre);
    console.log(tableau);
  }
  
  