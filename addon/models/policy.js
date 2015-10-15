import DS from 'ember-data';

export default DS.Model.extend({
  action: DS.attr('string'),
  epersonId: DS.attr('number'),
  groupId: DS.attr('number'),
  resourceId: DS.attr(),
  resourceType: DS.attr('string'),
  rpDescription: DS.attr('string'),
  rpName: DS.attr('string'),
  rpType: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date')
});
