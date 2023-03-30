var express = require("express");
var app = express();
var PORT = 8080;


app.get('/:operator/:num1/:num2', function(req,res){
	// /parses a string argument and returns an integer of the specific mathematical numeral function
	var operator = req.params.operator
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	
	// Check if num1 and num2 are valid numbers
	if (isNaN(num1) || isNaN(num2)) {
		res.status(400).send('Error: Invalid input parameters. Please provide valid integers.');
		return;
	}
	
	var result;
    //defining operators to support for the simple calculator
	switch(operator){
		case "addition":
		result = add(num1, num2); //(+) Operator
		break;

		case "subtraction": //(-) Operator
		result = subtract(num1, num2);
		break;

		case "multiplication": //(*) Operator
		result = multiply(num1, num2);
		break;

		case "division": //(/) Operator
		result = divide(num1, num2);
		break;
        // following message will display on the web browswe if user enters a incorrect operator
		default:
		result = "Sorry, please enter a valid operator!"
	}
    //Get the sum (+) of two integers
	function add(a, b){
		return a + b
	}
    //Get the Subtraction (-) of two integers
	function subtract(a, b){
		return a - b
	}
    //Get the Multiplication (*) of two integers
	function multiply(a, b){
		return a * b
	}
    //Get the Division (/) of two integers
	function divide(a, b){
		return a / b
	}

	res.json(result);
});

//Start an instance of our Express server, listening on port 8080
app.get("/", function(req, res){
	res.send("Hello I'm listening ..")
});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});