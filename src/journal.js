Journal.prototype.countWords = function(){
  let count = this.entry.split(' ').length;
  return count;
}

console.log(countWords("This is a test"));


function Journal(entry, name) {
  this.entry = entry;
  this.name = name;
}

const entries = new Journal([
  ['entry'],
  ['name']
]);