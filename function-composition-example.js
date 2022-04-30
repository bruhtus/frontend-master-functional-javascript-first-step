function ender(ending) {
  return function (input) {
    return input + ending;
  };
}

const adore = ender(' rocks');
const announce = ender(', you all');
const exclaim = ender('!');

function hyperup(x) {
  return exclaim(announce(adore(x)));
}

console.log(hyperup('vim script'));
