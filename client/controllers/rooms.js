if (Meteor.isClient) {
  Template.rooms.rooms = function(){
    return Rooms.find({});
  }
}