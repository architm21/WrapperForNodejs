class File {
  constructor() {}
  // change dm to have more decimal part
  getFilesizeString (size) {
    if (sizeBytes == 0) return '0 Bytes';
    let k = 1000,
    let dm = 1,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(sizeBytes) / Math.log(k));
    return parseFloat((sizeBytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
module.exports = File;
