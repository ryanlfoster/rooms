if (Meteor.isClient) {
  Template.timeBlock.editingDoc = function(){
    return Bookings.findOne({_id: Session.get("selectedDocId")});
  }

  Template.timeBlock.showControls = function(e){
    $('.addOwner').hide();
    $(e.target).children('.addOwner').show();

    $(e.target).children('.addOwner').children().children('input').focus();
    $(e.target).children('.addOwner').children().children('input').val('');
  }

  Template.timeBlock.hideControls = function(e){
    $('.addOwner').hide();
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
    jsgradient.gradientList('#1AD6FD', '#1D62F0', '#timeBlockIndex');
  }

  Template.timeBlock.events({
    'click li.timeBlock': function (e) {
      Template.timeBlock.showControls(e);
      Session.set("selectedDocId", this._id);
    },

    'submit form': function (e) {
      // Close form after submissions
      $('.addOwner').hide();
    },

    'keyup input': function(e) {
      if (e.keyCode == 27) {
        // Hits esc
        Template.timeBlock.hideControls();
      };
    }
  });
}