if (Meteor.isClient) {
  Template.roomBlock.rendered = function(){
    FastClick.attach(document.body);

    $(".roomBlock").each(function (i) {
      var $item = $(this);
      setTimeout(function() {
        $item.transit({opacity:1, y: -40}, 340);
      }, 60*i);
    });

  }

  Template.roomBlock.goToBookings = function(el){
    Router.go('/' + $(el).data('id'));
  }

  Template.roomBlock.events({
  'click li.roomBlock a': function (e) {
    Template.roomBlock.goToBookings(e.target)
  }
});
}