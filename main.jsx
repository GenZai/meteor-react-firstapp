import { Meteor } from 'meteor/meteor';
import { Cards } from '../imports/collections/cards';

Meteor.startup(() => {
  // code to run on server at startup
  const numberCards = Cards.find({}).count();
  console.log(numberCards);
});

Meteor.publish('cards', function(skip, limit){
  return Cards.find({ ownerId: this.userId } , { skip: skip, limit: limit });
});
