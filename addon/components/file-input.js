import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',
  change: function(e) {
    let inputFiles = e.target.files;
    if (inputFiles.length < 1) {
      return;
    }

    let inputFile = inputFiles[0];

    let fileInfo = {
      name: inputFile.name,
      type: inputFile.type || 'n/a',
      size: inputFile.size,
      date: inputFile.lastModifiedDate ?
        inputFile.lastModifiedDate.toLocaleDateString() : 'n/a',
    };

    var fileReader = new FileReader();

    fileReader.onload = (e) => {
      let fileReader = e.target;
      fileInfo.data = fileReader.result;

      this.sendAction('onChange', fileInfo);
    };

    let firstFile = e.target.files[0];
    fileReader.readAsArrayBuffer(firstFile);
  }
});
