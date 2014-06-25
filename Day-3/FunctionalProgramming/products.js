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