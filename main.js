// ￼Grazie all’utilizzo dell’API e il suo URL https://www.boolean.careers/api/ar ray/basket?n=numberPlayers Ricreare l’esercizio del basket, questa volta dando la possibilità all’utente di scegliere quanti giocatori generare per poi stampare la lista in una sidebar e vedere le statistiche correlate al player clicccato



$(document).ready(function() {

  var numeroGiocatori = parseInt(prompt('inserisci numero giocatori'));
  $.ajax({
    url: 'https://www.boolean.careers/api/array/basket?n=numberPlayers',
    method: 'GET',
    data: {
      n: numeroGiocatori
    },
    success: function(data)
    {
      var arrayGiocatori = data.response;
      for (var i = 0; i < arrayGiocatori.length; i++) {
        var playerCodeDiv = $('.template .playercode').clone();
        var sidebar = arrayGiocatori[i].playerCode;
        playerCodeDiv.text(sidebar);

        $('.sidebar').append(playerCodeDiv);
        console.log(arrayGiocatori);
      }
      $(document).on('click', '.playercode', function() {
        var number = $(this).text();
        for (var i = 0; i < arrayGiocatori.length; i++) {
          var playerIdNumber = arrayGiocatori[i].playerCode;
          if (number == playerIdNumber) {
            var source   = $('#playerid').html();
            var template = Handlebars.compile(source);
            var context = {Codice: arrayGiocatori[i].playerCode, Punti: arrayGiocatori[i].points, Rimbalzi: arrayGiocatori[i].rebounds, Falli: arrayGiocatori[i].fouls, Percentuale2punti: arrayGiocatori[i].twoPoints, Percentuale3punti: arrayGiocatori[i].threePoints};
            var html = template(context);
            $('.player').html(html);

          }
        }

      });
    }
  });





});









// var giocatori = [];
//
// for (var i = 0; i < 100; i++)
// {
//   var nuovoGiocatore = {
//     'codiceGiocatoreUnivoco': randomUnivoco() + randomUnivoco2(),
//     'numeroPunti': getRandomNumber(10, 40),
//     'numeroRimbalzi': getRandomNumber(5, 20),
//     'falli': getRandomNumber(5, 15),
//     'percentualeSuccessoTiriDuePunti': getRandomNumber(70, 80) + '%',
//     'percentualeSuccessoTiriTrePunti': getRandomNumber(20, 40) + '%'
//   }
//   giocatori.push(nuovoGiocatore);
// }
//
//
//
//
// for (var i = 0; i < giocatori.length; i++) {
//   var playerCodeDiv = $('.template .playercode').clone();
//   var sidebar = giocatori[i].codiceGiocatoreUnivoco;
//   playerCodeDiv.text(sidebar);
//
//   $('.sidebar').append(playerCodeDiv);
//   console.log(playerCodeDiv);
//
// }
//
//
// $('.playercode').click(function() {
//
//   var clickCode = $(this).index();
//   console.log(clickCode);
//
//
//
//
// });
//
//
//
//
// function getRandomNumber(min, max)
// {
//   var newRandomNumber = Math.floor(Math.random()*(max-min+1)+min);
//   return newRandomNumber;
// }
//
// function randomUnivoco() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//
//   for (var i = 0; i < 3; i++){
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//
//   return text;
//
// }
// function randomUnivoco2() {
//   var text = "";
//   var possible = "0123456789";
//
//   for (var i = 0; i < 3; i++){
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
//
// }
//



// var contatore = 0;
// var trovato = false;
//
// while (trovato == false && contatore < giocatori.length)
// {
//   var richiestaCodice = prompt('inserisci il codice');
//   console.log(giocatori[contatore]);
//
//   if (richiestaCodice == giocatori[contatore].codiceGiocatoreUnivoco)
//   {
//     trovato = true;
//     document.writeln(giocatori[contatore]);
//   }
//
//   contatore++;
//
// }
