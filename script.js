function getCardNumber(cardNumber){
let cardNum = cardNumber.split(' ').join(' ');

if(cardNum.length <= 16 && !isNaN(cardNum)){
      console.log(cardNumber.slice(0, 5) + ' **** ' + ' **** ' + cardNum.slice(12));
}else if(cardNum.length > cardNumber){
      console.log('Karta xato kiritildi');
}else if(isNaN(cardNum)){
      console.log('Karta xato kiritildi');
}else if(isNaN(cardNum)){
      console.log('8600123456789101, bu uzkard');
}else if(isNaN(cardNum)){
      console.log('9860123456789101, bu humo');
}else{
  console.log('aniqlanmadi');
}
}

getCardNumber('8600123456789101');
getCardNumber('86001234567891012'); 
getCardNumber('860012345678910a');
getCardNumber('8600123456789101');
getCardNumber('9860123456789101');
getCardNumber('1233123456789101'); 