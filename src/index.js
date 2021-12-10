module.exports = function toReadable(number) {

   var str = number.toString().split('');
   if (Number(str.join('')) === 0) {
      return 'zero';
   }
   var result = '';
   var numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   if (str.length === 1) {
      return result += numbers[Number(str[0]) - 1];
   }

   if (str.length === 3) {
      result += numbers[Number(str[0]) - 1] + ' hundred' + (str[1] === '0' && str[2] === '0' ? '' : ' ');
      str.shift();
   };

   if (str.length === 2 && Number(str.join('')) >= 1) {
      if (Number(str[0]) >= 2) {
         result += (Number(str[1]) === 0 ? numbers[17 + Number(str[0])] : numbers[17 + Number(str[0])] + ' ' + numbers[Number(str[1]) - 1]);
      } else { result += numbers[Number(str[0] + str[1]) - 1]; };
   };

   return result;
}
