var FruitMaker = (function() {

	var fruits = ['apples', 'bananas', 'cherries', 'huckleberries'];

	return {
		
		getFruits: function() {
			return fruits;
		},

		setFruit: function(newFruits) {
			fruits = newFruits;
		},

		addFruit: function(addedFruit) {
			fruits.push(addedFruit);
		}

	};

})();

console.log('FruitMaker.getFruits()', FruitMaker.getFruits());