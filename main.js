//API Settings
var rdviApi = "";
var dataApi = "";
var settingsPath = "";
var dpPath = "";
var configurationFullPath = rdviApi+settingsPath;
var samplesFullPath = dataApi+dpPath;


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
var yAxisTopLimit = []; // float 
var yAxisBotLimit = []; // float
var xAxisLeft = []; // in js Date object format
var xAxisRight = []; // in js Date object format
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



//getDPConfiguration(){
   //call api get data
   /*
      call: get quantity and names of data points  
      for every dp in call
         dpNames[index] = name; //string
         upperLimits[index]= float; // float
         lowerLimits[index] = float; // float
         dpYValues.push([]);//push empty array
         dpYValues[index].push(name); // array will have format of [name, val0,val1,...], initDP() will initialize it
         dpXValues.push([]);//push empty array
         dpXValues[index].push("date"); // array will have format of [name, val0,val1,...], initDP() will initialize it         
         dpRefreshRate[index] = rate;

   */

//}


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
            label: dpNames[index],
            tick: {
               fit: false
            }
         },
         y: {
            label: 'Date Time'
         }
      }
   });
}




/*data: {
  labels: true
}

chart.axis.min({
  x: -10,
  y: 1000,
  y2: 100
});
*/





function updateGraph(index){
   /*

      for every value in 


   */

}






//testing value 
dpNames.push("Voltage");//dp0
upperLimits.push(7.0); //dp0
lowerLimits.push(-1.0);//dp0
dpYValues.push(["voltage",3.5,3.6,3.8,3.0,2.5]);//dp0
dpXValues.push(["Time",1,2,3,4,5]);//dp0
dpRefreshRate.push(1000);//for dp0


var myGraph = createGraph(0);


for (let index = 0; index < dpNames.length; ++index) {//call all the refrsh rates 
   setInterval(updateGraph(index),dpRefreshRate[index]);
}


