today
=====

Zen meeting room booker

### Run it

```bash
curl https://install.meteor.com | /bin/sh

npm install -g meteorite

cd today

mrt install

meteor
```
    
Then open `http://localhost:3000` and in your dev tools console type `Meteor.call('newDay')` to populate the database with our config. 
