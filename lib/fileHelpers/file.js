class File {
  constructor() {}
  // change dm to have more decimal part
  getFilesizeString (size) {
    if (size == 0) return '0 Bytes';
    let k = 1000,
    let dm = 1,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
module.exports = File;
