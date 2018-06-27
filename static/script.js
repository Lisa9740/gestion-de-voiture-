
$(function () {
    $('#btnmodal').click(function () {

    var marque = $('#marque').val();
    var img = $('#img').val();
    var puissance = $('#puissance').val();
    var motorisation = $('#motorisation').val();
    var prix = $('#prix').val();
    var couleur = $('#couleur').val();
    var nbporte = $('#nbporte').val();
    var nbplace = $('#nbplace').val();
    
    var url = 'http://localhost:3008/ajoutdonnees';
        $.post(url, { marque: marque, img: img, puissance: puissance, motorisation: motorisation, prix: prix, couleur: couleur, nbporte: nbporte, nbplace: nbplace }, function (data) { });
    })
});