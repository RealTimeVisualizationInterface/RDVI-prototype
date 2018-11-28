
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
var min = 9999
var max = 0

//number of values to compare, for efficentcy
var lookAtLast = 200;

var limitMin
var limitMax
 function graphYBoundaries(){
	/*

	/////CODE/////

	*/
        var numValues = 0
        if(lookAtLast < arr.length)
        {
                numValues = lookAtLast
        }
        else
        {
                numValues = arr.length
        }
        for(i = 0; i < numValues; i++)
        {
                if(arr[i].y > max)
                {
                        max = arr[i].y
                }
                if(arr[i].y < min)
                {
                        min = arr[i].y
                }
        }
 }
