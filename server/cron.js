
// Every day at 10pm, reset our DB
var everyHour = new Cron(function() {
    Meteor.call('newDay');
}, {
    hour: 22
});