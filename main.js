// https://www.one-tab.com/page/6iMfYO8qSlayQtXkmRH6FQ

//API Settings
var rdviApi = "";
var dataApi = "";
var settingsPath = "";
var dpPath = "";
var configurationFullPath = rdviApi+settingsPath;
var samplesFullPath = dataApi+dpPath;


//machine variables// 
var machineName ;//one for each graph/machine

//Data Point variables
var dpNames = []; //string
var upperLimits = []; // float
var lowerLimits = []; // float
var dpYValues = [];//2D//sp value, array will have format of [name, val0,val1,...], initDP() will initialize it
var dpXValues = [];//2D//date value,  array will have format of [name, val0,val1,...], initDP() will initialize it
var dpRefreshRate = [];

/* exmaple data 
columns: [
   ["x1", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
   ["y2", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8]
*/


//Graph configuration settings variables //one for each data point
var graphs = []; //place to store graphs
var yAxisTopLimit = []; // float 
var yAxisBotLimit = []; // float
var xAxisLastTimeToShow = []; // in js Date object format, var = new Date("October 13, 2014 11:15:00");
var graphBindIDs = [
                     "#GRAPH0",
                     "#GRAPH1",
                     "#GRAPH2",
                     "#GRAPH3"               
                  ];


/*
addOneDP()
Desc: will add one entry value to the corresponding graph, this function will not re render graph
ARG in graphIndex: index of the datapint 
ARG in pointValue: y value aka data
ARG in pointTime : x value aka time, in string date format
Return Void
*/
function addOneDP(graphIndex, pointValue, pointTime = ""){
   var xValueDate;
   if(pointTime === ""){
      xValueDate = Date();
   }
   else{
      xValueDate = new Date(Date.Parse(pointTime));
   }

   ///// CODE /////

}

function getCurrentTime(){
   return  
   var y = getFullYear().toString();
   var mo = (getMonth()+1).toString();// zero indexed
   var d = getDate().toString();
   var h =  getHours().toString();
   var mi = getMinutes().toString();
   var s = getSeconds().toString();
   return y+"-"+mo+"-"+d+" "+h+":"+mi+":"+s;
   // %Y-%m-%d %H:%M:%S
   // match input format
}

function getConfiguration(){
   //call api get data
   /*
      call: get quantity and names of data points  
      ///machineName.push("name");//does not apply
      for every dp in call

         dpNames[index] = name; //string
         upperLimits[index]= float; // float
         lowerLimits[index] = float; // float
         dpYValues.push([]);//push empty array
         // does not apply since we are only doing one machine
         // dpYValues[index].push(machineName[i]); // array will have format of [machineName, val0,val1,...], initDP() will initialize it
         dpXValues.push([]);//push empty array
         dpXValues[index].push("date"); // array will have format of [name, val0,val1,...], initDP() will initialize it         
         dpRefreshRate[index] = rate;

   */

}


function createGraph(index){//all information has to be available before calling


   return chart = c3.generate({
      bindto: graphBindIDs[index],
      data: {
         x: 'Time',
         
         columns: [
            dpXValues[index],
            dpYValues[index],
         ],
         type: 'scatter'
      },
      axis: {
         x: {
            type: 'timeseries',
            label: dpNames[index],
            localtime: false,
            //xFormat: '%Y-%m-%d %H:%M:%S',//how to parse x 
            tick: {
                format: '%H:%M:%S',//how to display x
                fit: true,
                count: 5,


            },
            min: xAxisLastTimeToShow[index]

         },
         y: {
            label: 'Date Time'
         }
      },
      regions: [
            {axis: 'y', start: lowerLimits[index], end: upperLimits[index], class: 'regionGood'},
         ],
      grid: {
         y: {
            show: true,
            lines: [
               {value: lowerLimits[index], text: 'Lower Limit', position: 'middle'},
               {value: upperLimits[index], text: 'Upper Limit', position: 'middle'},

            ]
         },
         x: {
            show: true,

         }
    }
   });
}




/*

chart.axis.min({
  x: -10,
  y: 1000,
  y2: 100
});
*/





function updateGraph(index){//add value to graph
   console.log("updating graph")
   /*

      for every value in 


   */

dpYValues[0].push(5.1);//dp0
dpXValues[0].push(new Date(new Date("October 13, 2014 11:13:00").getMilliseconds() + 1000));//dp0
console.log(dpXValues[0]);
}





//manual values
machineName = "Machine 1";
dpNames.push("Voltage");//dp0
upperLimits.push(5.2); //dp0
lowerLimits.push(4.8);//dp0


// dpYValues.push([machineName]);//dp0
// dpXValues.push(["Time"]);//dp0


dpYValues.push([machineName,3.5,3.6,3.8,5.0,4.9,5.12,3.0,2.5,5.1]);//dp0
dpXValues.push(["Time",
                  new Date("October 13, 2014 11:13:00"),
                  new Date("October 13, 2014 11:14:00"),
                  new Date("October 13, 2014 11:15:00"),
                  new Date("October 13, 2014 11:16:00"),
                  new Date("October 13, 2014 11:17:00"),
                  new Date("October 13, 2014 11:18:00"),
                  new Date("October 13, 2014 11:19:00"),
                  new Date("October 13, 2014 11:20:00"),
                  new Date("October 13, 2014 11:21:00")]);//dp0

dpRefreshRate.push(1000);//for dp0

xAxisLastTimeToShow.push(new Date("October 13, 2014 11:18:00"));//sp0, valuees before this will not show anymore
//xAxisLastTimeToShow.push(new Date(getCurrentTime()));//sp0, valuees before this will not show anymore




getConfiguration();
/*
code that will settup plage layout depending on how many graphs we have 
*/

for (let index = 0; index < dpNames.length; ++index) {// make everything

   graphs.push(createGraph(index));
   setInterval(updateGraph(index),dpRefreshRate[index]);
}


