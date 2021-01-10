"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var data = axios_1.default.get('https://api.alternative.me/fng/?limit=2');
data.then(function (data) {
    var dataPoints = data.data.data;
    var currentDataPoint = parseInt(dataPoints[0].value);
    console.log('done the thing');
    document.getElementById('advice').innerText = currentDataPoint < 20 ? "BUY" : currentDataPoint > 90 ? "sell" : "Uncertain... check back later";
});
//# sourceMappingURL=index.js.map