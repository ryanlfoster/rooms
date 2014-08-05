if (Meteor.isClient) {
  Template.roomBlock.rendered = function(){
    FastClick.attach(document.body);

    $(".roomBlock").each(function (i) {
      var $item = $(this);
      setTimeout(function() {
        $item.transit({opacity:1, y: -40}, 250);
      }, 60*i);
    });

  }

  Template.roomBlock.goToBookings = function(el){
    $('a.backButton').transit({opacity:0, x: -80}, 250);

    $(".roomBlock").each(function (i) {
      var $item = $(this);
      setTimeout(function() {
        $item.transit({opacity:0, y: -80}, 250);
      }, 60*i);
    });

    setTimeout(function(){
      Router.go('/' + $(el).data('id'));
    },250);
  }

  Template.roomBlock.events({
    'click li.roomBlock a': function (e) {
      Template.roomBlock.goToBookings(e.target)
    }
  });
}