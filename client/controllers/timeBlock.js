if (Meteor.isClient) {
  Template.timeBlock.editingDoc = function(){
    return Bookings.findOne({_id: Session.get("selectedDocId")});
  }

  Template.timeBlock.showControls = function(e){
    $('.addOwner').hide();
    $(e.target).children('.addOwner').show();
    $(e.target).children('.addOwner').children().children('input').focus();
  }

  Template.timeBlock.hidePastTimeBlocks = function(e){
    var currentTime = Date.now();
    console.log('Hiding old time blocks');

    $('li.timeBlock').each( function( index, el ) {
     if ($(el).data('end-time') < currentTime) {
        $(el).hide();
     } else {
        $(el).show();
     }
    });

    if (currentTime > $('li.timeBlock').last().data('end-time') ) {
      $('.goHome').show();
    } else {
      $('.goHome').hide();
    }
  }

  Template.timeBlock.rendered = function(){
    jsgradient.gradientList('#E987A4', '#0E163B', '#timeBlockIndex');

    Template.timeBlock.hidePastTimeBlocks();

    setInterval(function(){
      Template.timeBlock.hidePastTimeBlocks();
    },1000);
  }

  Template.timeBlock.events({
    'click li.timeBlock': function (e) {
      Template.timeBlock.showControls(e);
      Session.set("selectedDocId", this._id);
    },

    'submit form': function (e) {
      $('.addOwner').hide();
    }
  });
}