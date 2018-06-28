// fonction ajax pour ajouter des données
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
    
    var url = 'http://localhost:3189/ajoutdonnees';
        $.post(url, { marque: marque, img: img, puissance: puissance, motorisation: motorisation, prix: prix, couleur: couleur, nbporte: nbporte, nbplace: nbplace }, function (data) { 
            $('#update_message').html('<div class="alert alert-success" role="alert">Données enregistrées !</div>');
       
        });

    })
});
// fonction ajax pour modifier la base de donnée
$(function () {
    $('#btnmodal2').click(function () {
  var  _id =  $('#id').val();
     var marqueModif  = $('#marque1').val();
    var imgModif  = $('#img1').val();
    var puissanceModif  = $('#puissance1').val();
    var motorisationModif  = $('#motorisation1').val();
    var prixModif  = $('#prix1').val();
    var couleurModif  = $('#couleur1').val();
    var nbporteModif  = $('#nbporte1').val();
    var nbplaceModif  = $('#nbplace1').val();
    
    $.ajax({
        url: 'http://localhost:3189/modifier',
        method: "PUT",
        data: {  marque: marqueModif, img: imgModif, puissance: puissanceModif, motorisation: motorisationModif, prix: prixModif, couleur: couleurModif, nbporte: nbporteModif, nbplace: nbplaceModif },
        success: function (data) {
            
         

        }
    });
   
           
        });

    })
