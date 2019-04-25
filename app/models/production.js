import Ember from 'ember';

export default Ember.Object.extend({
  // rename BoardsSum property to 'boards'
  boards: Ember.computed('BoardsSum', function(){
    return this.get('BoardsSum'); // since property is in Ember object , use get() to get the property
  }),
  boardfeet: Ember.computed.alias('BoardFeetSum'), // shorthand for above using computed macros
  volume: Ember.computed('NominalLength', 'NominalWidth', 'NominalThickness', function(){
    return this.get('NominalLength') * 12 * this.get(NominalWidth) * this.get('NominalThickness');
  })
});