if (Meteor.isServer) {
  Meteor.startup(function () {
    Bookings.remove({});
    Rooms.remove({});

    // Setup template for the day
    var startingDate = new Date();
    startingDate.setHours(9);
    startingDate.setMinutes(0);

    var timestamp = startingDate.getTime()

    var date = startingDate, interval=15, arr=[];
    for(var i=0;i<37;i++){
      var timeBlockDate = new Date(timestamp)
      var timeBlockDateEnd = (timestamp + interval*60*1000)

      var formattedTimeBlock = moment(timeBlockDate).format('HH:mm') + " → " + moment(timeBlockDateEnd).format('HH:mm');

      Bookings.insert({timeBlock: formattedTimeBlock, endTime: timeBlockDateEnd});
      timestamp += interval*60*1000
    }

    // Setup our meeting rooms
    Rooms.insert({name: 'Boardroom'});
    Rooms.insert({name: 'Meeting room 1'});
    Rooms.insert({name: 'Meeting room 2'});
  });
}