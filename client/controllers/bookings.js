if (Meteor.isClient) {
  Template.bookings.bookings = function(){
    return Bookings.find({room_id: _id}, {sort: ['timeBlock']} );
  }

  Template.bookings.room = function(){
    return Rooms.findOne(_id);
  }

  Template.bookings.rendered = function() {
    Template.timeBlock.hidePastTimeBlocks();

    setInterval(function(){
      Template.timeBlock.hidePastTimeBlocks();
    },1000);
  }
}