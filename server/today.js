if (Meteor.isServer) {
  Meteor.startup(function () {
    Bookings.remove({});
    Rooms.remove({});

    // Setup template for the day
    var startingDate = new Date();
    startingDate.setHours(8);
    startingDate.setMinutes(45);

    var date = startingDate, interval=15, arr=[];
    for(var i=0;i<37;i++){
      var humanMinutes;
      var endTime;

      humanMinutes = date.getMinutes();



      endTime = date.getMinutes() + 15;

      date.setMinutes(humanMinutes + interval);
      Bookings.insert({timeBlock: date.getHours() + '.' + humanMinutes});
    }

    // Setup our meeting rooms
    Rooms.insert({name: 'Boardroom'});
    Rooms.insert({name: 'Meeting room 1'});
    Rooms.insert({name: 'Meeting room 2'});
  });
}