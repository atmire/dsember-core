import DSORoute from 'dsember-core/routes/dspace-object';

function getValuesFor(metadata, fields) {
  let values = [];
  fields.forEach(function(field) {
    let value = metadata.filterBy('key', field).mapBy('value')
    if (!Ember.isBlank(value)) {
      values.push(value);
    }
  });
  return values;
}

export default DSORoute.extend({

  afterModel: function (model) {
    this.setHeadTags(model);
  },

  setHeadTags: function (model) {
    let metaDataTags = [];
    let gsTags = [];
    model.get('metadata').forEach(function (metadatum) {
      metaDataTags.push({
        type: 'meta',
        //tagId: `meta-${metadatum.get('id')}-tag`,
        attrs: {
          name: metadatum.get('key'),
          content: metadatum.get('value')
        }
      });
    });

    let titleValues = getValuesFor(model.get('metadata'), ['dc.title']);
    titleValues.forEach(function (value) {
      gsTags.push({
        type: 'meta',
        attrs: {
          name: 'citation_title',
          content: value
        }
      });
    });

    let authorValues = getValuesFor(model.get('metadata'), ['dc.author', 'dc.contributor.author','dc.creator']);
    authorValues.forEach(function (value) {
      gsTags.push({
        type: 'meta',
        attrs: {
          name: 'citation_author',
          content: value
        }
      });
    });

    let dateValues = getValuesFor(model.get('metadata'), ['dc.date.issued']);
    dateValues.forEach(function (value) {
      gsTags.push({
        type: 'meta',
        attrs: {
          name: 'citation_date',
          content: value
        }
      });
    });

    let issnValues = getValuesFor(model.get('metadata'), ['dc.identifier.issn']);
    issnValues.forEach(function (value) {
      gsTags.push({
        type: 'meta',
        attrs: {
          name: 'citation_issn',
          content: value
        }
      });
    });

    let keywordValues = getValuesFor(model.get('metadata'), ['dc.subject', 'dc.type']);
    if (!Ember.isEmpty(keywordValues)) {
      let combinedKeywords = keywordValues.join('; ');
      gsTags.push({
        type: 'meta',
        attrs: {
          name: 'citation_keywords',
          content: combinedKeywords
        }
      });
    }

    let headTags = metaDataTags.concat(gsTags);

    headTags.unshift({
      type: 'link',
      attrs: {
        rel: 'schema.DC',
        content: 'http://purl.org/dc/elements/1.1/'
      }
    });

    this.set('headTags', headTags);
  }

});
