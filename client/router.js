Router.map(function() {
  this.route('rooms', {
    path: '/',
    layoutTemplate: 'default',
  });

  this.route('bookings', {
    path: '/:_id',
    layoutTemplate: 'default',
    data: function(){
      _id  = this.params._id;
    }
  });
});