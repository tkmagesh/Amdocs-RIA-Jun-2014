
function runTests(){
	test("should be able to add two numbers",function(){
		//arrange
		var number1 = 10, number2 = 20, expectedResult = 30;

		//act
		var result = add(number1, number2);

		//assert
		return result === expectedResult;
	});

	test("Should be able to add two numbers in string format", function(){
		//arrange
		var number1 = "10", number2 = "20", expectedResult = 30;

		//act
		var result = add(number1, number2);

		//assert
		return result === expectedResult;
	});

	test("Should be able to treat non numeric strings as zero", function(){
		//arrange
		var number1 = "10", number2 = "abc", expectedResult = 10;

		//act
		var result = add(number1, number2);

		//assert
		return result === expectedResult;
	});


	test("Should be able to add two functions returning numbers", function(){
		//arrange
		var f1 = function(){ return 10;}, 
			f2 = function(){ return 20;}
			, expectedResult = 30;

		//act
		var result = add(f1, f2);

		//assert
		return result === expectedResult;
	})
	test("Should be able to add two functions returning numbers in string format", function(){
		//arrange
		var f1 = function(){ return "10";}, 
			f2 = function(){ return "20";}
			, expectedResult = 30;

		//act
		var result = add(f1, f2);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add only one number", function(){
		//arrange
		var number1 = 10
			, expectedResult = 10;

		//act
		var result = add(number1);

		//assert
		return result === expectedResult;
	});

	test("Should return 0 when no arguments are passed", function(){
		//arrange
		var expectedResult = 0;

		//act
		var result = add();

		//assert
		return result === expectedResult;
	});

	test("Should be able to add any number of numbers", function(){
		//arrange
		var expectedResult = 150;

		//act
		var result = add(10,20,30,40,50);

		//assert
		return result === expectedResult;
	});

	test("Should be able to add an array of numbers",function(){
		var numbers = [10,20,30,40,50];
		var expectedResult = 150;

		//act
		var result = add(numbers);

		//assert
		return result === expectedResult;
	});

	test("Should be able to add an array of numbers and strings",function(){
		var numbers = [10,"20",30,"40",50];
		var expectedResult = 150;

		//act
		var result = add(numbers);

		//assert
		return result === expectedResult;
	});

	test("Should be able to add multiple array of numbers",function(){
		var expectedResult = 150;
		var numbers1 = [10,20];
		var numbers2 = [30,40,50];

		//act
		var result = add(numbers1, numbers2);

		//assert
		return result === expectedResult;
	});

	test("Should be able to add nested array of numbers",function(){
		var expectedResult = 150;
		var numbers = [10,[20,[30,[40,[50]]]]];

		//act
		var result = add(numbers);

		//assert
		return result === expectedResult;
	});
	test("Should be able to add two functions returning array of numbers", function(){
		//arrange
		var f1 = function(){ return [10,20];}, 
			f2 = function(){ return [30,40,50];}
			, expectedResult = 150;

		//act
		var result = add(f1, f2);

		//assert
		return result === expectedResult;
	})

	test("Should be able to add array of functions returning array of numbers", function(){
		//arrange
		var f1 = function(){ return [10,20];}, 
			f2 = function(){ return [30,40,50];}
			, expectedResult = 150;

		//act
		var result = add([f1, f2]);

		//assert
		return result === expectedResult;
	})

	test("Should be able to add array of functions returning functions returning array of numbers", function(){
		//arrange
		var f1 = function(){ return function(){ return [10,20];}}, 
			f2 = function(){ return function(){ return [30,40,50];}}
			, expectedResult = 150;

		//act
		var result = add([f1, f2]);

		//assert
		return result === expectedResult;
	})


}
window.addEventListener("DOMContentLoaded",runTests);
	