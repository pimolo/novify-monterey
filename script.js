$(document).ready(function() { // Onglets artistes
    $('#artists .artistbox').hide();
    $('#artists #muse').show();
    $('#artists .button').click(function() {
        var artist = $(this).data('toggle');
        $('#artists .artistbox').hide();
        $('#artists #' + artist).show();
    });
});

// Caroussel

$(document).ready(function() {
    var i = 0; // i est le numéro de l'image à afficher
    var img = $('#carrousel img');
    var currentImg = img.eq(i); // on met dans une variable l'image correspondant à ce numéro
    img.hide(); // on cache toutes les images...
    currentImg.show(); // ...et on montre seulement celle que l'on a sélectionné préalablement (ici la première image)
    function sildeImg() {
        setTimeout(function() { // setTimeout permet d'indiquer un intervalle de temps avant de lancer la fonction
            if (i>=img.length-1) {i=0;} else {i++;}; // on veut le numéro de l'image suivante sauf si on est déjà à la dernière, dans ce cas on reprend à la première (la première image est 0)
            currentImg = img.eq(i); // ligne 16
            img.fadeOut(); // voir ligne 17
            currentImg.fadeIn(); // ligne 18
            sildeImg(); // à la fin de la fonction, on la relance
        }, 3000); // la fonction va se lancer au bout de 3 secondes
    }
    sildeImg(); // on lance la fonction une première fois

    $('.right').click(function() { // ce qui se passe si on clique sur la flèche de droite
        if (i>=2) {i=0;} else {i++};
        $('img').fadeOut();
        currentImg = img.eq(i);
        currentImg.fadeIn();
        console.log(currentImg);
    });

    $('.left').click(function() { // ce qui se passe si on clique sur la flèche de gauche
        if (i<=0) {i=2;} else {i--}; // on veut l'image précédente d'où le i--
        $('img').fadeOut();
        currentImg = img.eq(i);
        currentImg.fadeIn();
        console.log(currentImg);
    });
});
