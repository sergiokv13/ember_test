import DS from 'ember-data';

export default DS.Model.extend({
  display_name: DS.attr('string'),
  location_pk: DS.attr('string')
});
