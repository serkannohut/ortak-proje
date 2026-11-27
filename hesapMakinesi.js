// hesap makinesi  toplama çıkarma  js kod ile  html kullanılmadı 

function topla(a, b) {
  return a + b;
}

function cikar(a, b) {
  return a - b;
}

module.exports = { topla, cikar };

function carp(a, b){
  return a * b;
}
function bol(a, b){
  if (b===0){
    return"hata:sıfıra  bölünmez!"; 
  }
  return a/b;
}