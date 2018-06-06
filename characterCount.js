

function countLetters(str) {

  let noUse = [];

  let strCount = {};

  str = str.split(' ').join('').split('');

  for (let i = 0; i < str.length; i++) {

   if (!strCount[str[i]]) {

      strCount[str[i]] = 1;

    } else {

      strCount[str[i]]++;
    }

  }

  return strCount;
}

console.log(countLetters('lighthouse in the house'));

