// https://www.codeeval.com/open_challenges/18/

//Given numbers x and n, where n is a power of 2, print out the smallest multiple of n which is greater than or equal to x. Do not use division or modulo operator.


// this is coming back as "Partially" but can't see why. Score 90. 

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
  		var temp = line.split(",");
  		var compareNum = parseInt(temp[0]); 
  		var toMult = parseInt(temp[1]);
  		var stdout = 1; 
  		var i = 2; 

  		while (stdout <= compareNum) {
  			stdout = toMult * i; 
  			i++; 
  		}
  		console.log(stdout);

    }
});




