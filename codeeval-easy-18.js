var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
  		var temp = line.split(",");
  		var x = parseInt(temp[0]); 
  		var n = parseInt(temp[1]);
  		var stdout = 1; 
  		var i = 2; 

  		while (stdout <= x) {
  			stdout = n * i; 
  			i++; 
  		}
  		console.log(stdout + "\n");

    }
});