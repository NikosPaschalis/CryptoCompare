const Http = new XMLHttpRequest();
const url='https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BCH,LTC,EOS&tsyms=USD,EUR&api_key=${apiKey}';
Http.open("GET", url);
Http.send();
var apiKey = "40ccda6fce00fdd02a00969308a5c83163749bfcc7002da79735af7a9d26c396";

Http.onreadystatechange = (e) => {
  //console.log(Http.responseText)
  
  var data = Http.responseText;
  var dataObj = JSON.parse(data);
  document.getElementById('result').innerHTML = data;
}


