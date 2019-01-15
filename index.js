// DOC
$(document).ready(function(){
//   ON SUBMIT
  $("#button").click(function(){
    
// DATA
    
    //object with keys representing each month with values corresponding to each country's climate array of average temperature
var MONTHS = {
  'January': 0,
  'February':1,
  'March':2,
  'April':3,
  'May':4,
  'June':5,
  'July':6,
  'August':7,
  'September':8,
  'October':9,
  'November':10,
  'December':11
};
//object of object containing diferrent cities with important information
var destinations =  [
  { name:'Rome',
    dailyPrice:78.93,
    climate:[46,	48,	54,	57,	70,	73,	79,	75,	72,	64,	55,	50],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  { name:'Bruges',
    dailyPrice:67.26,
    climate:[39,	39,	43,	46,	54,	59,	61,	63,	59,	52,	45,	39],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  { name:'Shanghai',
    dailyPrice:37.58,
    climate:[39,	43,	48,	59,	68,	75,	84,	84,	75,	66,	55,	45],
    tstyle:['Archeological', 'Museums']
  },
 { name: 'New York City',
    dailyPrice:99.60,
    climate:[36,	36,	39,	52,	61,	72,	77,	75,	68,	57,	48,	48],
    tstyle:['Beach', 'Shopping', 'Dining', 'Museums']
  },
  { name:'London',
    dailyPrice:91.87,
    climate:[41,	45,	48,	52,	57,	61,	66,	66,	63,	55,	50,	45],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  { name:'Reykjavik',
    dailyPrice:107.13,
    climate:[32,	32,	32,	37,	43,	48,	52,	52,	45,	39,	37,	36],
    tstyle:['Dining', 'Archeological', 'Adventure']
  },
  { name:'Rio de Janeiro',
    dailyPrice:49.17,
    climate:[79,	81,	79,	77,	73,	72,	70,	72,	72,	73,	75,	77],
    tstyle:['Beach', 'Dining', 'Adventure']
  },
  { name:'Dubrovnik',
    dailyPrice:74.22,
    climate:[48,	50,	52,	57,	64,	72,	77,	77,	72,	64,	57,	52],
    tstyle:['Beach', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Kuala Lumpur',
    dailyPrice:34.37,
    climate:[81, 82,	82,	82,	82,	82,	82,	82,	81,	81,	81,	81],
    tstyle:['Archeological', 'Museums', 'Adventure']
  },
  { name:'St. Petersburg',
    dailyPrice:45.45,
    climate:[21,	21,	28,	41,	54,	61,	64,	61,	52,	43,	34,	23],
    tstyle:['Dining', 'Archeological', 'Museums']
  },
  { name:'Paris',
    dailyPrice:84.40,
    climate:[41,	43,	48,	52,	59,	61,	68,	68,	61,	54,	45,	41],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  { name:'Dubai',
    dailyPrice:76.99,
    climate:[66,	68,	73,	79,	88,	91,	95,	97,	91,	84,	77,	70],
    tstyle:['Beach', 'Shopping', 'Dining', 'Adventure']
  },
  { name:'Munich',
    dailyPrice:77.10,
    climate:[30,	30,	41,	45,	54,	59,	64,	64,	57,	50,	39,	34],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  { name:'Melbourne',
    dailyPrice:76.34,
    climate:[70,	70,	66,	63,	57,	52,	50,	52,	55,	59,	63,	66],
    tstyle:['Beach', 'Adventure']
  },
  { name:'Beijing',
    dailyPrice:30.45,
    climate:[25,	28,	41,	57,	68,	75,	81,	77,	68,	55,	41,	28],
    tstyle:['Dining', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Edinburgh',
    dailyPrice:71.84,
    climate:[37,	39,	43,	45,	50,	55,	59,	59,	55,	50,	43,	41],
    tstyle:['Dining', 'Archeological', 'Museums', 'Adventure']
  },
 { name: 'Chiang Mai',
    dailyPrice:19.83,
    climate:[73,	77,	82,	86,	86,	84,	82,	82,	82,	81,	77,	72],
    tstyle:['Beach', 'Dining', 'Archeological', 'Adventure']
  },
 { name: 'Buenos Aires',
    dailyPrice:36.01,
    climate:[77,	72,	72,	66,	59,	54,	54,	57,	59,	64,	70,	73],
    tstyle:['Beach', 'Dining', 'Archeological', 'Museums']
  },
  { name:'Tokyo',
    dailyPrice:70.63,
    climate:[41,	43,	48,	57,	64,	70,	77,	79,	73,	64,	54,	46],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Santiago de Chile',
    dailyPrice:36.91,
    climate:[70,	68,	64,	59,	54,	48,	48,	50,	54,	59,	63,	68],
    tstyle:['Archeological', 'Museums']
  },
  { name:'Bergen',
    dailyPrice:94.71,
    climate:[36,	36,	39,	43,	52,	57,	59,	59,	54,	48,	41,	37],
    tstyle:['Archeological', 'Adventure']
  },
  { name:'Vienna',
    dailyPrice:79.25,
    climate:[30,	34,	41,	48,	59,	64,	66,	66,	59,	50,	41,	30],
    tstyle:['Dining', 'Archeological', 'Museums']
  },
  { name:'Istanbul',
    dailyPrice:30.06,
    climate:[43,	43,	46,	54,	61,	72,	75,	75,	70,	61,	54,	46],
    tstyle:['Dining', 'Archeological', 'Museums']
  },
  { name:'Prague',
    dailyPrice:48.01,
    climate:[30,	34,	39,	48,	55,	61,	64,	63,	57,	48,	37,	32],
    tstyle:['Archeological', 'Museums']
  },
  { name:'Florence',
    dailyPrice:74.29,
    climate:[45,	46,	50,	57,	64,	72,	77,	75,	70,	61,	52,	46],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  { name:'Queenstown',
    dailyPrice:75.46,
    climate:[61,	61,	59,	52,	46,	39,	39,	43,	46,	52,	55,	59],
    tstyle:['Beach', 'Archeological', 'Adventure']
  },
 { name: 'Hong Kong',
    dailyPrice:51.09,
    climate:[61,	64,	68,	75,	79,	82,	84,	84,	81,	79,	72,	63],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Budapest',
    dailyPrice:30.29,
    climate:[30,	34,	43,	52,	61, 66,	70,	70,	63,	54,	41,	34],
    tstyle:['Archeological', 'Museums', 'Adventure']
  },
  { name:'Sydney',
    dailyPrice:73.45,
    climate:[73,	73,	72,	66,	61,	57,	55,	57,	61,	64,	68,	72],
    tstyle:['Beach', 'Shopping', 'Dining', 'Adventure']
  },
  { name:'Barcelona',
    dailyPrice:73.21,
    climate:[50,	50,	54,	55,	61,	68,	73,	75,	72,	64,	55,	52],
    tstyle:['Beach', 'Shopping', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Cape Town',
    dailyPrice:41.70,
    climate:[72,	73,	70,	64,	61,	55,	55,	55,	57,	61,	64,	68],
    tstyle:['Beach', 'Archeological', 'Adventure']
  },
 { name: 'Krakow',
    dailyPrice:29.39,
    climate:[27,	28,	39,	46,	57,	63,	66,	64,	57,	48,	37,	30],
    tstyle:['Dining', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Taipei',
    dailyPrice:34.19,
    climate:[61,	61,	64,	72,	75,	81,	86,	84,	81,	75,	70,	64],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Cusco',
    dailyPrice:31.76,
    climate:[52,	52,	52,	52,	48,	46,	45,	48,	50,	52,	52,	52],
    tstyle:['Archeological', 'Museums', 'Adventure']
  },
  { name:'Seoul',
    dailyPrice:42.62,
    climate:[25,	28,	39,	52,	63,	70,	75,	75,	66,	55,	41,	28],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  { name:'Lisbon',
    dailyPrice:56.07,
    climate:[52, 54,	57,	59,	64,	70,	75, 73,	73,	66,	57,	54],
    tstyle:['Beach', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Lima',
    dailyPrice:32.71,
    climate:[73,	75,	73,	72,	68,	66,	64,	63,	64,	66,	68,	72],
    tstyle:['Beach', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Auckland',
    dailyPrice:60.53,
    climate:[68,	68,	66,	63,	57,	54,	52,	54,	55,	59,	61,	64],
    tstyle:['Beach', 'Museums', 'Adventure']
  },
  { name:'Amsterdam',
    dailyPrice:90.60,
    climate:[37,	39,	43,	46,	54,	59,	63,	63,	59,	52,	45,	39],
    tstyle:['Dining', 'Archeological', 'Museums', 'Adventure']
  },
  { name:'Copenhagen',
    dailyPrice:93.61,
    climate:[32,	34,	37,	43,	54,	59,	63,	63,	57,	50,	41,	36],
    tstyle:['Dining', 'Archeological', 'Museums']
  },
];
    
// DATA
     
//     VARIABLES
    var activities = [];
    $('input:checkbox:checked').each(function() {
      activities.push(this.value);
    });
    var budget = $("#budget").val();
    var weather = $("#weather").val();
    var month = $("#month").val();
//     VARIABLES

//     FUNCTION DECLARATION

const whereToTravel = (database, myBudget, myClimate, myTStyle, myMonth)=> {

var highranking = 0;
var highName;
if(myBudget==="0"){
   $("#output").html('Need Budget');
} else if(myClimate==="0"){
   $("#output").html('Need Climate');
} else if(myMonth==="0"){
   $("#output").html('Need Month');
} else {
  database.forEach(function(obj){
    obj.ranking = 0;
    
    switch (myBudget) {
      case 'Moderate':
        if (obj.dailyPrice > 35 && obj.dailyPrice <=70) {
          obj.ranking += 3;
        }
        break;
      case 'High':
        if (obj.dailyPrice > 70) {
          obj.ranking += 3;
        }
        break;
      case 'Low':
        if (obj.dailyPrice <=35) {
          obj.ranking += 3;
        }
        break;
      case "0":
      // console.log("Need myBudget");
        $("#output").html('Need Budget');
    }
    
    switch (myClimate) {
      case 'Moderate':
        if (obj.climate[MONTHS[myMonth]] >50 && obj.climate[MONTHS[myMonth]] <=70)  {
          obj.ranking += 2;
        }
        break;
      case 'Cold':
        if (obj.climate[MONTHS[myMonth]] <=50) {
          obj.ranking += 2;
        }
        break;
      case 'Hot':
        if (obj.climate[MONTHS[myMonth]] >70) {
          obj.ranking += 2;
        }
        break;
      default:
        console.log('Need myClimate');
    }
    
    var arrayTStyles = obj.tstyle;
    for (var i = 0; i < arrayTStyles.length; i++ ) {
      for (var j = 0; j < myTStyle.length; j++) {
        if (arrayTStyles[i] === myTStyle[j]) {
           obj.ranking += 1;
        }
      }
    }
   
    if(obj.ranking > highranking) {
      highranking = obj.ranking;
      highName = obj.name;
    }
  });
  var bestDest = [];
  database.forEach(function(elem){
    if(elem.ranking === highranking){
      bestDest.push(elem.name);
    }
  });
}
var randomIndex = Math.floor(Math.random()*bestDest.length);
$("#output2").html("You should travel to...");
$("#output").html(bestDest[randomIndex]);
}
    
//     FUNCTION DECLARATION
    
//     FUNCTION CALL
    
   whereToTravel(destinations, budget, weather, activities, month);
    
//     FUNCTION CALL
    
  });
//   ON SUBMIT
});
// DOC