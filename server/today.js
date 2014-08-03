if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({

      newDay: function () {
        Bookings.remove({});
        Rooms.remove({});

        // Setup rooms
        Rooms.insert({name: 'Boardroom'});
        Rooms.insert({name: 'Meeting room 1'});
        Rooms.insert({name: 'Meeting room 2'});

        var rooms = Rooms.find({});
        var count = 0;
        rooms.forEach(function (room) {
          // Setup template for the day
          var startingDate = new Date();
          startingDate.setHours(9);
          startingDate.setMinutes(0);

          var timestamp = startingDate.getTime()

          var date = startingDate, interval=30, arr=[];
          for(var i=0;i<18;i++){
            var timeBlockDate = new Date(timestamp)
            var timeBlockDateEnd = (timestamp + interval*60*1000)

            var formattedTimeBlock = moment(timeBlockDate).format('HH:mm') + " → " + moment(timeBlockDateEnd).format('HH:mm');

            Bookings.insert({timeBlock: formattedTimeBlock, endTime: timeBlockDateEnd, room_id: room._id});
            timestamp += interval*60*1000
          }
        });
      },

      // welcome: function () {

      // },
    });
  });
}