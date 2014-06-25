var products = [
	{id :8, name :"pen", cost:100, units:10, category:1},
	{id :3, name :"hen", cost:100, units:60, category:1},
	{id :6, name :"ten", cost:300, units:40, category:2},
	{id :2, name :"den", cost:200, units:80, category:1},
	{id :9, name :"zen", cost:100, units:30, category:2},
	{id :1, name :"ken", cost:50, units:20, category:1}
]

console.table(products);

function sort(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

sort(products,"id");
console.log("Products sorted by id...")
console.table(products);

sort(products,"units");
console.log("Products sorted by units...")
console.table(products);


var sort = function(list, comparerFn){
	console.log(comparerFn);
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (comparerFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

function productComparerByValue(p1,p2){
	var p1Value = p1.units * p1.cost,
		p2Value = p2.units * p2.cost;

	if (p1Value < p2Value) return -1;
	if (p1Value === p2Value) return 0;
	return 1;

}

sort(products,productComparerByValue);
console.log("Products sorted by value...");
console.table(products);

function min(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++)
		if (list[i][attrName] < result)
			result = list[i][attrName];
	return result;
}

function max(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++)
		if (list[i][attrName] > result)
			result = list[i][attrName];
	return result;
}

function sum(list,attrName){
	var result = 0;
	for(var i=0;i<list.length;i++)
		result += list[i][attrName];
	return result;
}

function avg(list,attrName){
	return sum(list,attrName)/list.length;
}

function filterBy(list,predicate){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			result.push(list[i]);
	return result;
}

function countBy(list,predicate){
	var result = 0;
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			result++;
	return result;	
}

function all(list,predicate){
	for(var i=0;i<list.length;i++)
		if (!predicate(list[i]))
			return false;
	return true;	
}

function any(list,predicate){
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			return true;
	return false;	
}

function groupBy(list,selector){
	var result = {};
	var selectorFn = typeof selector === "function" ? selector : function(item){ return item[selector]};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var categories =[
	{id : 1, name : "grocery"},
	{id : 2, name : "stationary"}
]

function join(leftList, rightList, leftAttrName, rightAttrName, transformFn){
	var result = [];
	for(var i=0;i<leftList.length;i++){
		var leftValue = leftList[i][leftAttrName];
		for(var j=0;j<rightList.length;j++){
			var rightValue = rightList[j][rightAttrName];
			if (leftValue === rightValue){
				result.push(transformFn(leftList[i],rightList[j]));
			}
		}
	}
	return result;
}





