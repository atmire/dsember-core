import Ember from 'ember';
import layout from '../../../templates/components/items/edit/item-add-metadata';

export default Ember.Component.extend({
  layout: layout,

  initProperties: function() {
    this.setProperties({
      fieldToAdd: 'dc.contributor.advisor',
      valueToAdd: '',
      languageToAdd: ''
    });
  }.on('init'),

  actions: {
    submitAction() {
      //this.get('onSubmit')(this.get('fieldToAdd'), this.get('valueToAdd'), this.get('languageToAdd'));
      this.sendAction('onSubmit', this.get('fieldToAdd'), this.get('valueToAdd'), this.get('languageToAdd'));
      this.initProperties();
    }
  },

  //TODO hardcoded, can't get it from the REST API
  dcFields: [
    "dc.contributor.advisor",
    "dc.contributor.author",
    "dc.contributor.editor",
    "dc.contributor.illustrator",
    "dc.contributor.other",
    "dc.contributor",
    "dc.coverage.spatial",
    "dc.coverage.temporal",
    "dc.creator",
    "dc.date.accessioned",
    "dc.date.available",
    "dc.date.copyright",
    "dc.date.created",
    "dc.date.issued",
    "dc.date.submitted",
    "dc.date.updated",
    "dc.date",
    "dc.description.abstract",
    "dc.description.provenance",
    "dc.description.sponsorship",
    "dc.description.statementofresponsibility",
    "dc.description.tableofcontents",
    "dc.description.uri",
    "dc.description.version",
    "dc.description",
    "dc.format.extent",
    "dc.format.medium",
    "dc.format.mimetype",
    "dc.format",
    "dc.identifier.citation",
    "dc.identifier.govdoc",
    "dc.identifier.isbn",
    "dc.identifier.ismn",
    "dc.identifier.issn",
    "dc.identifier.other",
    "dc.identifier.sici",
    "dc.identifier.slug",
    "dc.identifier.uri",
    "dc.identifier",
    "dc.language.iso",
    "dc.language.rfc3066",
    "dc.language",
    "dc.provenance",
    "dc.publisher",
    "dc.relation.haspart",
    "dc.relation.hasversion",
    "dc.relation.isbasedon",
    "dc.relation.isformatof",
    "dc.relation.ispartof",
    "dc.relation.ispartofseries",
    "dc.relation.isreferencedby",
    "dc.relation.isreplacedby",
    "dc.relation.isversionof",
    "dc.relation.replaces",
    "dc.relation.requires",
    "dc.relation.uri",
    "dc.relation",
    "dc.rights.holder",
    "dc.rights.license",
    "dc.rights.uri",
    "dc.rights",
    "dc.source.uri",
    "dc.source",
    "dc.subject.classification",
    "dc.subject.ddc",
    "dc.subject.lcc",
    "dc.subject.lcsh",
    "dc.subject.mesh",
    "dc.subject.other",
    "dc.subject",
    "dc.title.alternative",
    "dc.title",
    "dc.type"
  ]
});
