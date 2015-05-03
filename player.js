var Player = new function(){
  this.hand = [];
}

if (Meteor.isClient) {

  Template.player.helpers({
    cardOne: function(){
      console.log(Player.hand);
      return Player.hand[0].value;
    }
  });

  Template.player.events({
    "click #hit": function (event) {

      if(Player.hand.length < 5){

        deck.shuffle();

        Player.hand[Player.hand.length] = deck.shift();
        console.log(Player.hand);
      }

      // Prevent default form submit
      return false;
    },
  });
}
