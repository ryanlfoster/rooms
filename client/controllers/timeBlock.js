if (Meteor.isClient) {
  Template.timeBlock.editingDoc = function(){
    return Bookings.findOne({_id: Session.get("selectedDocId")});
  }

  Template.timeBlock.showControls = function(e){
    if (Session.get('is-editing')) {
      Template.timeBlock.hideControls();
    }else{
      $('.addOwner').removeClass('editing');
      $('.timeBlock').addClass('not-editing');
      $(e.target).removeClass('not-editing');
      $(e.target).children('.addOwner').children().children('input').focus();
      Session.set('is-editing', true);
      setTimeout(function(){
        $(e.target).children('.addOwner').addClass('editing');
      },60);
    }
  }

  Template.timeBlock.hideControls = function(e){
    Session.set('is-editing', false);
    document.activeElement.blur();
    $('.addOwner').removeClass('editing');
    setTimeout(function(){
      $('.timeBlock').removeClass('not-editing');
    }, 150);
  }

  Template.timeBlock.hidePastTimeBlocks = function(e){
    var currentTime = Date.now();

    $('li.timeBlock').each( function( index, el ) {
     if ($(el).data('end-time') < currentTime) {
        $(el).hide();
     } else {
        $(el).show();
     }
    });

    if (currentTime > $('li.timeBlock').last().data('end-time') ) {
      $('.goHome').transit({ opacity: 1, y: -40 }, 250);
    } else {
      $('.goHome').hide();
    }

    $(".timeBlock").each(function (i) {
      var $item = $(this);
      setTimeout(function() {
        $item.transit({opacity:1, y: -40}, 250);
      }, 60*i);
    });
  }

  Template.timeBlock.rendered = function(){
    jsgradient.gradientList('#F6AE8F', '#FF2A68', '#timeBlockIndex');
  }

  Template.timeBlock.events({
    'click li.timeBlock': function (e) {
      Template.timeBlock.showControls(e);
      Session.set("selectedDocId", this._id);
    },

    'submit form': function (e) {
      // Close form after submissions
      Template.timeBlock.hideControls();
    },

    'keyup input': function(e) {
      if (e.keyCode == 27) {
        // Hits esc
        Template.timeBlock.hideControls();
      };
    },

    'click input': function(e) {
      e.stopPropogation();
    }
  });
}