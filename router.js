Router.map(function() {
  this.route('rooms', {
    path: '/',
    layoutTemplate: 'default',
  });

  this.route('reset', {
    path: '/reset',
    where: 'server',
    action: function () {
      var requestMethod = this.request.method;
      var requestData = this.request.body;
      Meteor.call('newDay');
      this.response.writeHead(200, {'Content-Type': 'text/html'});
      this.response.end('<html><body>Your request was a ' + requestMethod + '</body></html>');
    }
  });

  this.route('bookings', {
    path: '/:_id',
    layoutTemplate: 'default',
    data: function(){
      _id  = this.params._id;
    }
  });
});
