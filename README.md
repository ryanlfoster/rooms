<img src="http://f.cl.ly/items/3L2m1i1h442M2o2O3Y1Y/iPad_Air_H_iPhone_5s_V_SpcGr_sRGB.png"/>

# Rooms

A zen meeting room booker written in Meteor.js.


### About

In a sea of complex and expensive apps to book & schedule meetings, we found ourselves looking for a simple, free alternative. We didn't find one, so we built Rooms. Rooms is a beautiful web app that works as perfectly on your phone as it does on your desktop. Changes to bookings are synced on every connected device instantly. 

For more info about how and why we built Rooms, <a href="https://medium.com/@almonk/building-a-meeting-room-booking-app-in-7-hours-4f5534f9036a">check out our article in Medium</a>.

### Installation

```bash
$ curl https://install.meteor.com | /bin/sh # If you haven't installed meteor

$ npm install -g meteorite

$ cd rooms

$ mrt install # Installs dependencies

$ meteor
```
    
Open `http://localhost:3000` and in your dev tools console type `Meteor.call('newDay')` to populate the database with our config. 
