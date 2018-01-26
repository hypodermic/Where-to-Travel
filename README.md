# Where-to-Travel
//JS Function gives you best options for travel based on preferences
//object with keys representing each month with values corresponding to each country's climate array of average temperature
var MONTHS = {
  'January': 0,
  'February':1,
  'March':2,
  'April':3,
  'Mayo':4,
  'Junio':5,
  'July':6,
  'August':7,
  'September':8,
  'October':9,
  'November':10,
  'December':11
};
//object of object containing diferrent cities with important information
var destinations =   {
  'Rome': {
    dailyPrice:78.93,
    climate:[46,	48,	54,	57,	70,	73,	79,	75,	72,	64,	55,	50],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  'Bruges': {
    dailyPrice:67.26,
    climate:[39,	39,	43,	46,	54,	59,	61,	63,	59,	52,	45,	39],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  'Shanghai': {
    dailyPrice:37.58,
    climate:[39,	43,	48,	59,	68,	75,	84,	84,	75,	66,	55,	45],
    tstyle:['Archeological', 'Museums']
  },
  'New York City': {
    dailyPrice:99.60,
    climate:[36,	36,	39,	52,	61,	72,	77,	75,	68,	57,	48,	48],
    tstyle:['Beach', 'Shopping', 'Dining', 'Museums']
  },
  'London': {
    dailyPrice:91.87,
    climate:[41,	45,	48,	52,	57,	61,	66,	66,	63,	55,	50,	45],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  'Reykjavik': {
    dailyPrice:107.13,
    climate:[32,	32,	32,	37,	43,	48,	52,	52,	45,	39,	37,	36],
    tstyle:['Dining', 'Archeological', 'Adventure']
  },
  'Rio de Janeiro': {
    dailyPrice:49.17,
    climate:[79,	81,	79,	77,	73,	72,	70,	72,	72,	73,	75,	77],
    tstyle:['Beach', 'Dining', 'Adventure']
  },
  'Dubrovnik': {
    dailyPrice:74.22,
    climate:[48,	50,	52,	57,	64,	72,	77,	77,	72,	64,	57,	52],
    tstyle:['Beach', 'Archeological', 'Museums', 'Adventure']
  },
  'Kuala Lumpur': {
    dailyPrice:34.37,
    climate:[81, 82,	82,	82,	82,	82,	82,	82,	81,	81,	81,	81],
    tstyle:['Archeological', 'Museums', 'Adventure']
  },
  'St. Petersburg': {
    dailyPrice:45.45,
    climate:[21,	21,	28,	41,	54,	61,	64,	61,	52,	43,	34,	23],
    tstyle:['Dining', 'Archeological', 'Museums']
  },
  'Paris': {
    dailyPrice:84.40,
    climate:[41,	43,	48,	52,	59,	61,	68,	68,	61,	54,	45,	41],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  'Dubai': {
    dailyPrice:76.99,
    climate:[66,	68,	73,	79,	88,	91,	95,	97,	91,	84,	77,	70],
    tstyle:['Beach', 'Shopping', 'Dining', 'Adventure']
  },
  'Munich': {
    dailyPrice:77.10,
    climate:[30,	30,	41,	45,	54,	59,	64,	64,	57,	50,	39,	34],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  'Melbourne': {
    dailyPrice:76.34,
    climate:[70,	70,	66,	63,	57,	52,	50,	52,	55,	59,	63,	66],
    tstyle:['Beach', 'Adventure']
  },
  'Beijing': {
    dailyPrice:30.45,
    climate:[25,	28,	41,	57,	68,	75,	81,	77,	68,	55,	41,	28],
    tstyle:['Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Edinburgh': {
    dailyPrice:71.84,
    climate:[37,	39,	43,	45,	50,	55,	59,	59,	55,	50,	43,	41],
    tstyle:['Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Chiang Mai': {
    dailyPrice:19.83,
    climate:[73,	77,	82,	86,	86,	84,	82,	82,	82,	81,	77,	72],
    tstyle:['Beach', 'Dining', 'Archeological', 'Adventure']
  },
  'Buenos Aires': {
    dailyPrice:36.01,
    climate:[77,	72,	72,	66,	59,	54,	54,	57,	59,	64,	70,	73],
    tstyle:['Beach', 'Dining', 'Archeological', 'Museums']
  },
  'Tokyo': {
    dailyPrice:70.63,
    climate:[41,	43,	48,	57,	64,	70,	77,	79,	73,	64,	54,	46],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Santiago de Chile': {
    dailyPrice:36.91,
    climate:[70,	68,	64,	59,	54,	48,	48,	50,	54,	59,	63,	68],
    tstyle:['Archeological', 'Museums']
  },
  'Bergen': {
    dailyPrice:94.71,
    climate:[36,	36,	39,	43,	52,	57,	59,	59,	54,	48,	41,	37],
    tstyle:['Archeological', 'Adventure']
  },
  'Vienna': {
    dailyPrice:79.25,
    climate:[30,	34,	41,	48,	59,	64,	66,	66,	59,	50,	41,	30],
    tstyle:['Dining', 'Archeological', 'Museums']
  },
  'Istanbul': {
    dailyPrice:30.06,
    climate:[43,	43,	46,	54,	61,	72,	75,	75,	70,	61,	54,	46],
    tstyle:['Dining', 'Archeological', 'Museums']
  },
  'Prague': {
    dailyPrice:48.01,
    climate:[30,	34,	39,	48,	55,	61,	64,	63,	57,	48,	37,	32],
    tstyle:['Archeological', 'Museums']
  },
  'Florence': {
    dailyPrice:74.29,
    climate:[45,	46,	50,	57,	64,	72,	77,	75,	70,	61,	52,	46],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  'Queenstown': {
    dailyPrice:75.46,
    climate:[61,	61,	59,	52,	46,	39,	39,	43,	46,	52,	55,	59],
    tstyle:['Beach', 'Archeological', 'Adventure']
  },
  'Hong Kong': {
    dailyPrice:51.09,
    climate:[61,	64,	68,	75,	79,	82,	84,	84,	81,	79,	72,	63],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Budapest': {
    dailyPrice:30.29,
    climate:[30,	34,	43,	52,	61, 66,	70,	70,	63,	54,	41,	34],
    tstyle:['Archeological', 'Museums', 'Adventure']
  },
  'Sydney': {
    dailyPrice:73.45,
    climate:[73,	73,	72,	66,	61,	57,	55,	57,	61,	64,	68,	72],
    tstyle:['Beach', 'Shopping', 'Dining', 'Adventure']
  },
  'Barcelona': {
    dailyPrice:73.21,
    climate:[50,	50,	54,	55,	61,	68,	73,	75,	72,	64,	55,	52],
    tstyle:['Beach', 'Shopping', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Cape Town': {
    dailyPrice:41.70,
    climate:[72,	73,	70,	64,	61,	55,	55,	55,	57,	61,	64,	68],
    tstyle:['Beach', 'Archeological', 'Adventure']
  },
  'Krakow': {
    dailyPrice:29.39,
    climate:[27,	28,	39,	46,	57,	63,	66,	64,	57,	48,	37,	30],
    tstyle:['Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Taipei': {
    dailyPrice:34.19,
    climate:[61,	61,	64,	72,	75,	81,	86,	84,	81,	75,	70,	64],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Cusco': {
    dailyPrice:31.76,
    climate:[52,	52,	52,	52,	48,	46,	45,	48,	50,	52,	52,	52],
    tstyle:['Archeological', 'Museums', 'Adventure']
  },
  'Seoul': {
    dailyPrice:42.62,
    climate:[25,	28,	39,	52,	63,	70,	75,	75,	66,	55,	41,	28],
    tstyle:['Shopping', 'Dining', 'Archeological', 'Museums']
  },
  'Lisbon': {
    dailyPrice:56.07,
    climate:[52, 54,	57,	59,	64,	70,	75, 73,	73,	66,	57,	54],
    tstyle:['Beach', 'Archeological', 'Museums', 'Adventure']
  },
  'Lima': {
    dailyPrice:32.71,
    climate:[73,	75,	73,	72,	68,	66,	64,	63,	64,	66,	68,	72],
    tstyle:['Beach', 'Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Auckland': {
    dailyPrice:60.53,
    climate:[68,	68,	66,	63,	57,	54,	52,	54,	55,	59,	61,	64],
    tstyle:['Beach', 'Museums', 'Adventure']
  },
  'Amsterdam': {
    dailyPrice:90.60,
    climate:[37,	39,	43,	46,	54,	59,	63,	63,	59,	52,	45,	39],
    tstyle:['Dining', 'Archeological', 'Museums', 'Adventure']
  },
  'Copenhagen': {
    dailyPrice:93.61,
    climate:[32,	34,	37,	43,	54,	59,	63,	63,	57,	50,	41,	36],
    tstyle:['Dining', 'Archeological', 'Museums']
  },
};
//function returns best destination according to parameters
function whereToTravel(database, myBudget, myClimate, myTStyle, myMonth) {
  //function checks if object is empty
  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
            return false;
      }
    return true;
  }
  var objectsBudget = {};
  var objectsClimate = {};
  var arrayOfObjects3 = {};
  
  for (var city in database) {
    switch (myBudget) {
      case 'Moderate':
        if (database[city].dailyPrice > 35 && database[city].dailyPrice <=70) {
          objectsBudget[city] = database[city];
        }
        break;
      case 'High':
        if (database[city].dailyPrice > 70) {
          objectsBudget[city] = database[city];
        }
        break;
      case 'Low':
        if (database[city].dailyPrice <=35) {
          objectsBudget[city] = database[city];
        }
        break;
      default:
        console.log('Need myBudget');
    }
  }
 
  for (var city2 in objectsBudget) {
    switch (myClimate) {
      case 'Moderate':
        if (objectsBudget[city2].climate[MONTHS[myMonth]] >50 && objectsBudget[city2].climate[MONTHS[myMonth]] <=70)  {
          objectsClimate[city2] = objectsBudget[city2];
        }
        break;
      case 'Cold':
        if (objectsBudget[city2].climate[MONTHS[myMonth]] <=50) {
          objectsClimate[city2] = objectsBudget[city2];
        }
        break;
      case 'Hot':
        if (objectsBudget[city2].climate[MONTHS[myMonth]] >70) {
          objectsClimate[city2] = objectsBudget[city2];
        }
        break;
      default:
        console.log('Need myClimate');
    }
  }

  for (var city3 in objectsClimate) {
    var arrayTStyles = objectsClimate[city3].tstyle;
    var count = 0;
    for (var i = 0; i < arrayTStyles.length; i++ ) {
      for (var j = 0; j < myTStyle.length; j++) {
        if (arrayTStyles[i] === myTStyle[j]) {
          count++;
        }
      }
    }
    if (count >=3) {
      arrayOfObjects3[city3] = objectsClimate[city3];
    }
  }
  
  //console.log(arrayOfObjects3);
  if (isEmpty(arrayOfObjects3)) {
    return objectsClimate;
  } else {
      return arrayOfObjects3;
    }
}

whereToTravel(destinations, 'High', 'Cold', [ 'Museums', 'Dining', 'Adventure' ], 'July');
