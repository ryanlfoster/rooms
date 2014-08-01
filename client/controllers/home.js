if (Meteor.isClient) {
  Template.home.bookings = function(){
    return Bookings.find({});
  }
}