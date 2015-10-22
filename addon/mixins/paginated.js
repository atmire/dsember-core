import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['page'],
  page: 1,
  offset: 0,
  hasPreviousPage: Ember.computed('offset', function(){
    return this.get('offset') !== 0;
  }),
  hasNextPage: Ember.computed('offset', 'limit', 'total', function(){
    return (this.get('offset') + this.get('limit')) < this.get('total');
  }),
  needsPagination: Ember.computed.or('hasPreviousPage', 'hasNextPage'),
  actions: {
    previousPage() {
      var totalPages = Math.ceil(this.get('total')/this.get('limit'));
      if(this.decrementProperty('page') > totalPages){
        this.set('page', totalPages);
      }

      this.transitionToRoute({
        queryParams: {
          page: this.get('page')
        }
      });
    },
    nextPage() {
      this.transitionToRoute({
        queryParams: {
          page: this.incrementProperty('page')
        }
      });
    }
  }
});
