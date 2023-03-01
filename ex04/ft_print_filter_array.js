/* Écrire une fonction qui filtre tous les nombres impairs d’un tableau. Affichez le résultat dans la console de développement */

function filtrerNombresPairs(tableau) {
    const pairs = tableau.filter(function(nombre) {
      return nombre % 2 === 0;
    });
  
    console.log(pairs);
  }
  
  