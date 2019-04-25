import Component from '@ember/component';

export default Component.extend({
  boards: Ember.computed.mapBy('model', 'boards'), // another way to play with arrays in model.
  total_boards: Ember.computed.sum('boards'),
  boardfeets: Ember.computed.mapBy('model', 'boardfeet'), // this creates array of all boardfeet property
  total_boardfeet: Ember.computed.sum('boardfeets'),
  max_boardfeet: Ember.computed.max('boardfeets')
});
