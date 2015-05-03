function Deck(){
  this.cards = [];
}

card = function (value, suit) {
    this.value = value;
    this.suit  = suit;
}

Deck.prototype.shuffle = function() {
  var currentIndex = this.cards.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }
};

Deck.prototype.shift = function() {
  return this.cards.shift();
}

deck = new Deck();


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    DBDeck = new Mongo.Collection("cards");




  });
}
