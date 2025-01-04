
function helloNpm() {
    return "hello NPM"
}
function generateString(length){
    const letters = [
        'a', 'b', 'c', 'B', 'C', 'D', 'E', 'F','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A',  'G', 'H', 'I',  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];

      let result = '';
      for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random()*52);
        result += letters[randomIndex];
      }
      return result;
}
module.exports = {helloNpm, generateString};