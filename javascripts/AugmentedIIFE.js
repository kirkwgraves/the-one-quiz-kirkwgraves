var FruitMaker = (function(fruitmaker) {

	fruitmaker.slices = function(fruit, sliceNum) {
		var slicesArray = [];
		for (var i = 0; i < sliceNum; i++) {
			slicesArray[i] = fruit;
		}
		return slicesArray;
	};

	return fruitmaker;

})(FruitMaker);


var output = FruitMaker.slices('cherries', 3);
console.log('output', output);