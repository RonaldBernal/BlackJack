if (Meteor.isClient) {

  Template.player.helpers({

  });

  Template.player.events({
    "click #hit": function (event) {
      console.log(this.name);

      // Prevent default form submit
      return false;
    },
  });
}
