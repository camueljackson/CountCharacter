
let strCount  =   {};


function letterPosition(str) {



  str = str.split(' ').join('').split('');

  for (let i = 0; i < str.length; i++) {

   if (!strCount[str[i]]) { // obj.key (does not exist)

    strCount[str[i]] = [i];

      // strCount[str[i]] = 1; // obj.key takes value of 1

    } else {

      strCount[str[i]].push(i);
    }

  }

  return strCount;
}

console.log(letterPosition('lighthouse in the house'));

/* {
      l: [0]
      i: [1]
      g: [2]
      h: [4, 6, 14, 16]
      t: [6, 13]
      o: [7, 17]
      u: [8, 18]
      s: [9, 19]
      e: [10, 20]
      n: [12]

    }
*/


