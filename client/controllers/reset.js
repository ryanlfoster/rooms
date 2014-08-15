if (Meteor.isClient) {
  Template.reset.rendered = function(){
    Meteor.call('newDay');
  }
}