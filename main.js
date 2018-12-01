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
var dateParseFormat = '%Y-%m-%d %H:%M:%S';
var dateOutputFormat = '%H:%M:%S';
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
function addOneDP(graphIndex, pointValue , pointTime = ""){
   var formatCorrect = false;
   if(pointTime === ""){
      dpXValues[graphIndex].push(getCurrentTime());
      formatCorrect = true;
   }
   else{//make sure format is correct before inserting
      formatCorrect = checkDateFormat(pointTime);
      if(formatCorrect){
         dpXValues[graphIndex].push(pointValue);
      }
   }
   if(formatCorrect){
      dpYValues[graphIndex].push(pointValue);
   }
}

function getCurrentTime(){ 
   var now = new Date();
   var y = now.getFullYear().toString();
   var mo = (now.getMonth()+1).toString();// zero indexed
   var d = now.getDate().toString();
   var h =  now.getHours().toString();
   var mi = now.getMinutes().toString();
   var s = now.getSeconds().toString();
   var date = y+"-"+mo+"-"+d+" "+h+":"+mi+":"+s;
   console.log(date);
   return date;
   // %Y-%m-%d %H:%M:%S
   // match input format
}

function getConfiguration(){

   //manual values
   machineName = "Machine 1";
   dpNames.push("Voltage");//dp0
   upperLimits.push(5.2); //dp0
   lowerLimits.push(4.8);//dp0


   dpYValues.push([machineName]);//dp0
   dpXValues.push(["Time"]);//dp0


   // dpYValues.push([machineName,3.5,3.6,3.8,5.0,4.9,5.12,3.0,2.5,5.1]);//dp0
   // dpXValues.push(["Time",
   //                   "2018-11-30 19:32:00",
   //                   "2018-11-30 19:33:00",
   //                   "2018-11-30 19:34:00",
   //                   "2018-11-30 19:35:00",
   //                   "2018-11-30 19:36:00",
   //                   "2018-11-30 19:37:00",
   //                   "2018-11-30 19:38:00",
   //                   "2018-11-30 19:39:00",
   //                   "2018-11-30 19:40:00"]);//dp0

   dpRefreshRate.push(1000);//for dp0

   xAxisLastTimeToShow.push(getCurrentTime());//"2018-11-30 19:36:00");//sp0, valuees before this will not show anymore
   //xAxisLastTimeToShow.push(new Date(getCurrentTime()));//sp0, valuees before this will not show anymore

   //should be omplemented
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
      transition: {
         duration: 10
      },
      data: {
         x: 'Time',
         xFormat: dateParseFormat,//how to parse x 
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
            tick: {
                format: dateOutputFormat,//how to display x
                fit: false,
                count: 10
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
            show: false,
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



function reloadGraph(index){
   // recalculate min and max for y axis
   //update min max in graph
   graphs[index].load({
      columns: [
         dpXValues[index],
         dpYValues[index],
      ]
    });
}

function updateGraph(index){//add value to graph
   console.log("updating graph")
   /*

      for every value in gotten from api call add point 


   */

//console.log(dpXValues[0]);
   for (i = 0; i < (Math.floor(Math.random() * 9) + 1); i++){ //random number of points to generate
      addOneDP(index,((Math.random() * 2.0) + 4.0));
   } 

   reloadGraph(index);

}
function setRange(index){
   //time + refrash rate
   //display refresh rate 
   chart.axis.min({
      x: xAxisLastTimeToShow[index]
   });

   xAxisLastTimeToShow[index] = getCurrentTime();
}





/*
#####################################################################################
#####################################################################################
#####################################################################################
##########################                           ################################
##########################          MAIN             ################################
##########################                           ################################
#####################################################################################
#####################################################################################
#####################################################################################
*/



getConfiguration();
/*
code that will settup plage layout depending on how many graphs we have 
*/

for (let index = 0; index < dpNames.length; ++index) {// make everything

   graphs.push(createGraph(index));
   console.log(dpXValues[0]);
   setInterval(function(){ updateGraph(index); }, dpRefreshRate[index]);
   //setInterval(function(){ setRange(index); }, dpRefreshRate[index]);

}


// setTimeout(function () {
//     graphs[0].flow({
//         columns: [
//             ['Time', getCurrentTime(), getCurrentTime()],
//             ['Machine 1', 5.1, 4.9],

//         ],
//         duration: 1500,       
//     });
// }, 1000);