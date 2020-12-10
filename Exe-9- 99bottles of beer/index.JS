/* we are trying to write the lyrics of song named "99 bottles of beers" with loop. */

/* solution */

var number=99;

function beer(){

    while(number >= 1) {


     console.log( number + " bottles of beer on the wall,"+number+" bottles of beer,take one down, pass it around "+ (number-1) +" bottles of beer on the wall.");
      number=number-1;
    }
}
