
//function that will output two numbers:
// 	min of the graph
//	max of the graph
//	
// valus should be:
//	min = min(min(dps),limitLow)
//	max = max(max(dps),limitHi) 
//
//
//
//
//


var arr = [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 95 },
        { x: 60, y: 68 },
        { x: 70, y: 28 },
        { x: 80, y: 34 },
        { x: 90, y: 14 }
 ]
var min
var max

//number of values to compare, for efficentcy
var lookAtLast = 200;

//Limits of the vertical window size
var limitMin
var limitMax

//Set the min and max variables used to size the vertical window size
//Uses values in the array 'arr' to do so
 function graphYBoundaries(){
	//Variables
        var tempMin = 9999
        var tempMax = 0
        var numValues = 0

        //Set the number of values to show based on arr size and lookAtLast limiter
        if(lookAtLast < arr.length)
        {
                numValues = lookAtLast
        }
        else
        {
                numValues = arr.length
        }

        //The Crunchenator
        //Will loop through all values of the arr up to the limit, setting a temporary
        //min and max and update for every entry
        for(i = 0; i < numValues; i++)
        {
                //Check and set the maximum
                if(arr[i].y > tempMax)
                {
                        tempMax = arr[i].y
                }
                //Check and set the minimum
                if(arr[i].y < tempMin)
                {
                        tempMin = arr[i].y
                }
        }

        //If the max or min is outside of the limiter, then set to that limit
        //Will cutoff extreme outliers depending on limits
        if(tempMax > limitMax)
        {
                tempMax = limitMax
        }
        if(tempMin < limitMin)
        {
                tempMin = limitMin
        }

        min = tempMin
        max = tempMax
 }
