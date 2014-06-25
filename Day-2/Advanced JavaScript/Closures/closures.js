function getSpinner(){
	var counter = 0;
	function inc(){
		return ++counter;
	}
	function dec(){
		return --counter;
	}
	return {
		up : inc,
		down : dec
	}
}

function getPrimeChecker(){
	var cache = {};
	return function isPrime(n){
		if (typeof cache[n] !== "undefined"){
			console.log("from cache...");
			return cache[n];
		}
		cache[n] = true;
		for(var i=2;i<=(n/2);i++)
			if (n % i === 0){
				cache[n] = false;
				break;
			}
		console.log("freshly brewed...");
		return cache[n];
	}
}
