var deck = [];



if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

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
