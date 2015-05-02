
var deck = [];

function Card (value, suit) {
    this.value = value;
    this.suit  = suit;
}

function newDeck () {
  Deck.find({}, {sort: {createdAt: -1}}).forEach(function(card){
    console.log(card.value);
  });
}


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.tablero.helpers({
    newDeck: function(){
      // Insertar a arreglo y hacer suffle



    },

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Deck = new Mongo.Collection("cards");

    var c = 0;
    for (var i = 1; i <= 4; i++){
      for (var j = 1; j <= 13; j++){
        Deck.insert({
          value: j,
          suit:  i
        });
      }
    }
  });
}
