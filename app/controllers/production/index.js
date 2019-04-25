import Controller from '@ember/controller';

export default Controller.extend({
  // total_boards: Ember.computed('model.@each.boards', function() { // 'model.@each.boards' is used to watch 'boards' property when it is changed in the ember inspect
  //   return this.get('model').reduce((prev, row) => {
  //     return prev + parseFloat(row.get('boards'))
  //   }, 0);
  // }),
  // boards: Ember.computed.mapBy('model', 'boards'), // another way to play with arrays in model.
  // total_boards: Ember.computed.sum('boards'),
  // boardfeets: Ember.computed.mapBy('model', 'boardfeet'), // this creates array of all boardfeet property
  // total_boardfeet: Ember.computed.sum('boardfeets'),
  // max_boardfeet: Ember.computed.max('boardfeets')
});
