const Http = new XMLHttpRequest();
const url='https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BCH,LTC,EOS&tsyms=USD,EUR&api_key=${apiKey}';
Http.open("GET", url);
Http.send();
var apiKey = "YOUR_API_KEY";

Http.onreadystatechange = (e) => {
  //console.log(Http.responseText)
  
  var data = Http.responseText;
  var dataObj = JSON.parse(data);
  document.getElementById('result').innerHTML = data;
}


