if (Meteor.isClient) {
  Template.rooms.rooms = function(){
    return Rooms.find({});
  }

  Template.rooms.rendered = function(){
    $('a.backButton').transit({opacity:1, x: -40}, 250);
  }
}