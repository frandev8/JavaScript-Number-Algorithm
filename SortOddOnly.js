// Code chef coding challenge
// Given an array of numbers. You're to sort the odd numbers only in ascending order while leaving the even numbers in their original position.


// classical approach

function SortOddOnly(numberSet) {

  const oddSort = numberSet.filter((x) => x % 2).sort((a,b) => a - b);

  numberSet.forEach((num, i) => {
    if(num % 2 ===0){
      oddSort.splice(i,0,num);
    }
  });
  return oddSort;
}




  // current approach
  function SortOddOnly2 (array) {
    let oddNum = array.filter(num=> num % 2).sort((a,b)=> a-b);
    return array.map(num => num%2 ? oddNum.shift() : num);
  }



  // console.log(SortOddOnly([ -45,
  //   -36,
  //   -43,
  //   18,
  //   -26,
  //   -41,
  //   -41,
  //   -39,
  //   -21,
  //   2,
  //   13,
  //   15,
  //   25,
  //   29,
  //   22,
  //   43,
  //   -6,
  //   10,
  //   46,
  //   32]));
  

  