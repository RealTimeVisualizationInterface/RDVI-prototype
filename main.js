function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}









window.onload = function () {

var dps = []; // dataPoints

var top = 105;
var low = 90;
         CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EEf0"                
                ]);
var chart = new CanvasJS.Chart("chartContainer", {
    colorSet: "greenShades",
  zoomEnabled: true,
  title :{
    text: "Dynamic Data"
  },
  axisY: {
               minimum: 80,   // change here
      maximum: 110,
    includeZero: false,
      stripLines:[
            {
                startValue:low,
                endValue:top,                
                color:"#4286f4",
                label : "",
                labelFontColor: "#a8a8a8",
            },
        {
          value:top,
          label : "top",
        },
       {
          value:low
        }
          ],


  }, 
  axisX : {
    labelAngle: -40
  },
  data: [{
    type: "scatter",
    dataPoints: dps
  }]
  
});

var xVal = 0;
var yVal = 100; 
var updateInterval = 1000;
var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function (count) {

  count = count || 1;

  for (var j = 0; j < count; j++) {
    yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
    dps.push({
      x: new Date(),
      y: yVal
    });
    xVal++;
  }

  if (dps.length > dataLength) {
    dps.shift();
  }

  chart.render();
};

updateChart(dataLength);
setInterval(function(){updateChart()}, updateInterval);

}