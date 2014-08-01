Rooms = new Meteor.Collection("rooms", {
    schema: {
        name: {
            type: String,
            label: "Name",
            max: 40
        },
    }
});

Bookings = new Meteor.Collection("bookings", {
    schema: {
        timeBlock: {
            type: String,
            label: "Time block",
            max: 50
        },
        endTime: {
          type: String,
          label: 'End time'
        },
        owner: {
            type: String,
            label: "Owner name",
            max: 50,
            optional: true
        },
    }
});

Rooms.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
  },
  remove: function (userId, doc) {
    return true;
  },
});


Bookings.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
  },
  remove: function (userId, doc) {
    return true;
  },
});
