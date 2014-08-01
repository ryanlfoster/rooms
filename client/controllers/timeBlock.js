if (Meteor.isClient) {
  Template.timeBlock.editingDoc = function(){
    return Bookings.findOne({_id: Session.get("selectedDocId")});
  }

  Template.timeBlock.showControls = function(e){
    $('.addOwner').hide();
    $(e.target).children('.addOwner').show();
    $(e.target).children('.addOwner').children().children('input').focus();
  }

  Template.timeBlock.rendered = function(){
    jsgradient.gradientList('#07E3F2', '#155994', '#timeBlockIndex');
  }

  Template.timeBlock.events({
    'touchend li.timeBlock': function (e) {
      Template.timeBlock.showControls(e);
      Session.set("selectedDocId", this._id);
    },

    'click li.timeBlock': function (e) {
      Template.timeBlock.showControls(e);
      Session.set("selectedDocId", this._id);
    },

    'submit form': function (e) {
      $('body').focus();
    }
  });
}