

if (Meteor.isClient) {

  Template.tablero.helpers({

  });

  Template.tablero.events({
    "click #nuevoJuego": function (event) {

      deck.cards = [];
      var c = 0;
      for (var i = 1; i <= 4; i++){
        for (var j = 1; j <= 13; j++){
          deck.cards.push(new card(j, i));
        }
      }

      deck.shuffle();


      // Prevent default form submit
      return false;
    },
  });

}
