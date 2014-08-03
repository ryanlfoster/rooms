if (Meteor.isClient) {
  Template.roomBlock.rendered = function(){
    FastClick.attach(document.body);
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