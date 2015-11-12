import Ember from 'ember';
import { getShowRouteForDSOType } from 'dsember-core/utils/dso-utils';
import { combineURLParts } from 'dsember-core/utils/url-utils';
import NamespaceMixin from 'dsember-core/mixins/namespace';

export default Ember.Controller.extend(NamespaceMixin, {
  file: null,
  fileInputVisible: true,

  parentRoute: Ember.computed('model.parentObject.type', function () {
    return getShowRouteForDSOType(this.get('model.parentObject.type'));
  }),

  hasNewFile: Ember.computed.notEmpty('file'),
  hasUnsavedChanges: Ember.computed.or('model.isDirty', 'hasNewFile'),

  //TODO this should be refactored, is duplicated everywhere we need a bitstream download link
  originalLink: Ember.computed('model.retrieveLink', function () {
    if (Ember.isPresent(this.get('model.retrieveLink'))) {
      return combineURLParts(this.get('restNamespace'), this.get('model.retrieveLink'));
    }
    return undefined;
  }),

  breadCrumbs: Ember.computed('model', 'i18n.locale', function () {
    return [{
      label: this.get('i18n').t('trail.edit'),
      path: 'bitstreams.bitstream.edit',
      model: this.get('model')
    }];
  }),

  actions: {
    replaceFile(file) {
      this.set('file', file);
    },
    save(model) {
      let file = this.get('file');
      if (Ember.isPresent(file)) {
        this.send('uploadReplacementFile', model, file);
      }
      return true;
    }
  },

  /*
   * A bit of a hacky way to force the file-input component to reload after
   * a file upload. Reloading it is necessary to ensure that the same file
   * doesn't get uploaded again if you make any more metadata changes after
   * the initial upload
   */
  reloadFileInput() {
    this.set('fileInputVisible', false);
    Ember.run.next(this, () => {
      this.set('fileInputVisible', true);
    });
  },

  //TODO get from REST API when it becomes available
  formats: [
    { label: "Format not in list", value: -1 },
    { label: "License (known) (Internal)", value: "License" },
    { label: "CC License (known) (Internal)", value: "CC License" },
    { label: "Adobe PDF (known)", value: "Adobe PDF" },
    { label: "XML (known)", value: "XML" },
    { label: "Text (known)", value: "Text" },
    { label: "HTML (known)", value: "HTML" },
    { label: "CSS (known)", value: "CSS" },
    { label: "Microsoft Word (known)", value: "Microsoft Word" },
    { label: "Microsoft Word XML (known)", value: "Microsoft Word XML" },
    { label: "Microsoft Powerpoint (known)", value: "Microsoft Powerpoint" },
    { label: "Microsoft Powerpoint XML (known)", value: "Microsoft Powerpoint XML" },
    { label: "Microsoft Excel (known)", value: "Microsoft Excel" },
    { label: "Microsoft Excel XML (known)", value: "Microsoft Excel XML" },
    { label: "MARC (known)", value: "MARC" },
    { label: "JPEG (known)", value: "JPEG" },
    { label: "GIF (known)", value: "GIF" },
    { label: "image/png (known)", value: "image/png" },
    { label: "TIFF (known)", value: "TIFF" },
    { label: "AIFF (known)", value: "AIFF" },
    { label: "audio/basic (known)", value: "audio/basic" },
    { label: "WAV (known)", value: "WAV" },
    { label: "MPEG (known)", value: "MPEG" },
    { label: "RTF (known)", value: "RTF" },
    { label: "Microsoft Visio (known)", value: "Microsoft Visio" },
    { label: "FMP3 (known)", value: "FMP3" },
    { label: "BMP (known)", value: "BMP" },
    { label: "Photoshop (known)", value: "Photoshop" },
    { label: "Postscript (known)", value: "Postscript" },
    { label: "Video Quicktime (known)", value: "Video Quicktime" },
    { label: "MPEG Audio (known)", value: "MPEG Audio" },
    { label: "Microsoft Project (known)", value: "Microsoft Project" },
    { label: "Mathematica (known)", value: "Mathematica" },
    { label: "LateX (known)", value: "LateX" },
    { label: "TeX (known)", value: "TeX" },
    { label: "TeX dvi (known)", value: "TeX dvi" },
    { label: "SGML (known)", value: "SGML" },
    { label: "WordPerfect (known)", value: "WordPerfect" },
    { label: "RealAudio (known)", value: "RealAudio" },
    { label: "Photo CD (known)", value: "Photo CD" },
    { label: "OpenDocument Text (known)", value: "OpenDocument Text" },
    { label: "OpenDocument Text Template (known)", value: "OpenDocument Text Template" },
    { label: "OpenDocument HTML Template (known)", value: "OpenDocument HTML Template" },
    { label: "OpenDocument Master Document (known)", value: "OpenDocument Master Document" },
    { label: "OpenDocument Drawing (known)", value: "OpenDocument Drawing" },
    { label: "OpenDocument Drawing Template (known)", value: "OpenDocument Drawing Template" },
    { label: "OpenDocument Presentation (known)", value: "OpenDocument Presentation" },
    { label: "OpenDocument Presentation Template (known)", value: "OpenDocument Presentation Template" },
    { label: "OpenDocument Spreadsheet (known)", value: "OpenDocument Spreadsheet" },
    { label: "OpenDocument Spreadsheet Template (known)", value: "OpenDocument Spreadsheet Template" },
    { label: "OpenDocument Chart (known)", value: "OpenDocument Chart" },
    { label: "OpenDocument Formula (known)", value: "OpenDocument Formula" },
    { label: "OpenDocument Database (known)", value: "OpenDocument Database" },
    { label: "OpenDocument Image (known)", value: "OpenDocument Image" },
    { label: "OpenOffice.org extension (known)", value: "OpenOffice.org extension" },
    { label: "Writer 6.0 documents (known)", value: "Writer 6.0 documents" },
    { label: "Writer 6.0 templates (known)", value: "Writer 6.0 templates" },
    { label: "Calc 6.0 spreadsheets (known)", value: "Calc 6.0 spreadsheets" },
    { label: "Calc 6.0 templates (known)", value: "Calc 6.0 templates" },
    { label: "Draw 6.0 documents (known)", value: "Draw 6.0 documents" },
    { label: "Draw 6.0 templates (known)", value: "Draw 6.0 templates" },
    { label: "Impress 6.0 presentations (known)", value: "Impress 6.0 presentations" },
    { label: "Impress 6.0 templates (known)", value: "Impress 6.0 templates" },
    { label: "Writer 6.0 global documents (known)", value: "Writer 6.0 global documents" },
    { label: "Math 6.0 documents (known)", value: "Math 6.0 documents" },
    { label: "StarWriter 5.x documents (known)", value: "StarWriter 5.x documents" },
    { label: "StarWriter 5.x global documents (known)", value: "StarWriter 5.x global documents" },
    { label: "StarCalc 5.x spreadsheets (known)", value: "StarCalc 5.x spreadsheets" },
    { label: "StarDraw 5.x documents (known)", value: "StarDraw 5.x documents" },
    { label: "StarImpress 5.x presentations (known)", value: "StarImpress 5.x presentations" },
    { label: "StarImpress Packed 5.x files (known)", value: "StarImpress Packed 5.x files" },
    { label: "StarMath 5.x documents (known)", value: "StarMath 5.x documents" },
    { label: "StarChart 5.x documents (known)", value: "StarChart 5.x documents" },
    { label: "StarMail 5.x mail files (known)", value: "StarMail 5.x mail files" },
    { label: "RDF XML (known)", value: "RDF XML" }
  ]
});
