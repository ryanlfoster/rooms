if (Meteor.isClient) {
  Template.roomBlock.rendered = function(){
    FastClick.attach(document.body);
  }

  Template.roomBlock.transitionOut = function(el){
    var elPositon = $(el).parent().position()

    $(el).parent().addClass('selected');
    $(el).parent().siblings().velocity({ opacity: 0 }, 180);
    $(el).parent().velocity({ translateY: -elPositon.top }, 180);
    if ($(window).width() >= 768) {
      $(el).velocity({ fontSize: '18px', padding: '20px', paddingLeft: '30px' }, 180);
    } else{
      $(el).velocity({ fontSize: '16px', padding: '15px', paddingLeft: '15px' }, 180);
    }


    setTimeout(function(){
      Router.go('/' + $(el).data('id'));
    }, 250)
  }

  Template.roomBlock.events({
  'click li.roomBlock a': function (e) {
    Template.roomBlock.transitionOut(e.target)
  }
});
}