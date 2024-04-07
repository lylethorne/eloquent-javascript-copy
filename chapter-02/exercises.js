
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(whatever) {
  //initializing x and assigning to empty string
  let x = '';
  //for loop for rows
  for(let i = 1; i <= whatever; i++){
    //for loop inner
    for(let j = 1; j <= i; j++){
      //assigning increasing value to x
     x += '#'
    }
    //on each iteration adding a new line
    x += '\n';
  }
  //bring it on back now
  return x;

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  let count = 0;
//creating loop to run from 1 to 15
while(count >= 0 && count <= 14){
    //incrementing each time by 1
    count++
    //if the iteration count is on is divisible by 3 and by 5
    if(count % 3 === 0 && count % 5 === 0){
        //prints fizzbuzz
        console.log('fizzbuzz');
        //if it is only divisible by 3
    }else if(count % 3 === 0){
        //print fizz
        console.log('fizz');
        //only divisible by 5
    }else if (count % 5 === 0){
        //print buzz
        console.log('buzz');
        //finaly else statement for count
    }else {
        //print ittttt
        console.log(count);
    }
}
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(whatever) {
  //initz count to an empty string
 let count = '';
 //for loop for rows
 for(let i = 0; i < whatever; i++){
  //for loop for inner
  for(let j = 0; j < whatever; j++){
    //if they have the same remainder
    if(i % 2 === j % 2){
      //add a space
      count += ' ';
      //and if they do not
    }else{
      //add a #
      count += '#';
    }
  }
  //adding a line after each iteration
  count += '\n'
 }
 //returnnnnnn
return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}