console.log('test');

// a function that takes a string and returns true or false
function isThisWordSilly(aWord) {
  console.log('in isThisWordSilly', aWord);
  // local array containing all the silly word
  var sillyThings = ['blah', 'clowns', 'snuffles', 'juggalo', 'cucumber', 'barnacle'];

  return sillyThings.includes(aWord);
}

var isSilly = isThisWordSilly('bob');
console.log('is my word silly?', isSilly);
