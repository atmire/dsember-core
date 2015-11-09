import ApplicationAdapter from 'dsember-core/adapters/application';

export default ApplicationAdapter.extend({
  updateRecord: function(store, type, snapshot) {
    var data = this.serialize(snapshot, { includeId: false });
    var id = snapshot.id;
    var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');
    url = [url, 'metadata'].join('/');

    var promise = this.ajax(url, "PUT", { data: data });
    return promise;
  }
});
