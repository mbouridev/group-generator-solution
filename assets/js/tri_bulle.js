function triBulle(t) {

    // Ajoute un nombre aléatoire à chaque élément du tableau
    t = t.map((value) => ({ value, rand: Math.random()}));

    // Tri à bulle
    for(i = t.length - 1; i >= 1; i--) {
        for(j = 0; j <= i - 1; j++) {
            if (t[j + 1]['rand'] < t[j]['rand']) {
                valeurJ = t[j];
                t[j] = t[j + 1];
                t[j + 1] = valeurJ;
            }
        }
    }

    // Retourne le tableau initial trié aléatoirement
    return t.map(({ value }) => value);
}



var test = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
console.log(triBulle(test));