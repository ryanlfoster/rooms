if (Meteor.isClient) {
  Template.bookings.bookings = function(){
    return Bookings.find({room_id: _id}, {sort: ['timeBlock']} );
  }

  Template.bookings.room = function(){
    return Rooms.findOne(_id);
  }

  Template.bookings.goToHome = function(el){
    $('a.backButton').transit({opacity:0, x: 40}, 250);

    $(".timeBlock").each(function (i) {
      var $item = $(this);
      setTimeout(function() {
        $item.transit({opacity:0, y: -80}, 250);
      }, 60*i);
    });

    setTimeout(function(){
      Router.go('/');
    },250);
  }

  Template.bookings.rendered = function() {
    Template.timeBlock.hidePastTimeBlocks();
    $('a.backButton').transit({opacity:1, x: -40}, 250);

    setTimeout(function(){
      Template.timeBlock.hidePastTimeBlocks();
    },1000);

    setInterval(function(){
      Template.timeBlock.hidePastTimeBlocks();
    },5000);
  }

  Template.bookings.events({
    'click a.backButton': function (e) {
      Template.bookings.goToHome(e.target)
    }
  });
}