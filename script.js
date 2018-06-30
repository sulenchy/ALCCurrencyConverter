
var request = new XMLHttpRequest();
request.open('GET', 'https://free.currencyconverterapi.com/api/v5/currencies', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      let dataArr = data.results;
    for (let element of Object.keys(dataArr).sort()) {
        var count = document.getElementById("fromSelect").options.length;
        var x = document.getElementById("fromSelect");
        var c = document.createElement("option");
        c.text = element;
        c.value = element;
        x.options.add(c, count);
    }

    for (let element of Object.keys(dataArr).sort()) {
        var count = document.getElementById("toSelect").options.length;
        var x = document.getElementById("toSelect");
        var c = document.createElement("option");
        c.text = element;
        c.value = element;
        x.options.add(c, count);
    }

  }
  else{
      console.log("Not working");
  }
}

request.send();