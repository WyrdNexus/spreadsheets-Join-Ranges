function rangeUnion(range1, range2, keyColR1, keyColR2) {
  this.keyR1 = keyColR1;
  this.keyR2 = keyColR2;
  this.filter = '';
  
  this.filterR2ByKey = function(row){
    return ( row[this.keyR2] == this.filter );
  };
}

function joinRanges(range1, range2, keyColR1, keyColR2) {
  //=joinRanges(Items!C2:E,Variations!A3:B,2,1)
  // range1 = new Array(
  //   [1,"X","Item1"],
  //   [59,"X","Item2"]
  // );

  // range2 = new Array(
  //   ["X","a"],
  //   ["X","b"],
  //   ["X","c"],
  //   ["X","d"],
  //   ["X","e"],
  //   ["X","f"]
  // );

  // keyColR1 = 2;
  // keyColR2 = 1;
  
  keyColR1 -= 1;
  keyColR2 -= 1;
  
  var newData = [];
  var u = new rangeUnion(range1, range2, keyColR1, keyColR2);
  
  for(var i = 0; i<range1.length; i++){
      
    if (typeof range1[i][keyColR1] !== 'undefined' && range1[i][keyColR1].length > 0) {
      
      var row = range1[i];
      var newRow = row.slice();
      newRow.splice(keyColR1,1);
      
      u.filter = row[keyColR1];
      
      var addRows = range2.filter( u.filterR2ByKey, u );
      
      for(j=0; j<addRows.length; j++ ) {
        addRows[j] = addRows[j].concat(newRow);
      }
      if (newData.length) {
        newData = newData.concat( addRows );  
      } else {
        newData = addRows;
      }
    }  else {
       return newData;
    }
  }
  
  return newData;
}

function test(rangeA, rangeB, val1, val2) {
  var newR = [];
  for(var i=0; i <rangeA.length; i++ ) {
    if (typeof rangeA[i][val1] !== 'undefined' && rangeA[i][val1].length > 0) {
      newR.push(rangeA[i][val1]);
    }
  }
  return newR;
}