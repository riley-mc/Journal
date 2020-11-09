Journal.prototype.countWords = function(){
  let count = this.entry.split(' ').length;
  return count;
}

Journal.prototype.countVowels = function(){
  let vowels = this.entry.match(/[aeiou]/g)
  return vowels ===null ? 0 : vowels.length;
};

export function Journal(entry, name) {
  this.entry = entry;
  this.name = name;
}

const entries = new Journal([
  ['entry'],
  ['name']
]);