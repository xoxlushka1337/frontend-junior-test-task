const data = require("./data.json");

const task11Result = animals => {
	const result = {
		dogs: 0,
		cats: 0,
		avgage: 0,
	};

	let sum = 0;
	let count = 0;

	// your code here

	for (const animal of animals) {
		if (animal.type === "cat") {
			result.cats++;
		} else if (animal.type === "dog") {
			result.dogs++;
		}

		if (Number.isInteger(animal.age)) {
			sum += animal.age;
			count++;
		}
	}

	if (count > 0) {
		result.avgage = Math.floor(sum / count);
	} else {
		result.avgage = "Нет целочисленных значений в массиве.";
	}

	return result;
};

// console.log(task11Result(data));

const task12Result = animals => {
	let result = 0;

	// your code here
	for (let i = 0; i < animals.length; i++) {
		if (
			animals[i].type === "dog" &&
			animals[i].features &&
			animals[i].features.includes("black") &&
			animals[i].breed === true
		) {
			result++;
		}
	}

	return result;
};

// console.log(task12Result(data));

const task13Result = animals => {
	const result = [];
	// your code here

	for (let i = 0; i < animals.length; i++) {
		if (
			animals[i].type === "cat" &&
			animals[i].features &&
			animals[i].features.includes("black") &&
			animals[i].breed === true
		) {
			result.push(animals[i]);
		}

		if (
			animals[i].type === "dog" &&
			animals[i].features &&
			animals[i].features.includes("white") &&
			animals[i].breed === true
		) {
			result.push(animals[i]);
		}
	}
	return result;
};

// console.log(task13Result(data));

const task14Result = animals => {
	const result = [];
	// your code here
	let ageSortCats = [];
	let ageSortDogs = [];

	for (let i = 0; i < animals.length; i++) {
		if (animals[i].type === "cat") {
			ageSortCats.push(animals[i]);
		}
		if (animals[i].type === "dog") {
			ageSortDogs.push(animals[i]);
		}
	}

	ageSortCats.sort((a, b) => b.age - a.age);

	ageSortDogs.sort((a, b) => a.age - b.age);

	result.push(...ageSortCats, ...ageSortDogs);

	return result;
};

console.log(task14Result(data));

// const myPowFunc = (number, n) => {
// 	const result = number;
// 	// your code here
// 	return result;
// };

// console.log(myPowFunc(3, 4));

// const myFlatFunc = inputArray => {
// 	const result = inputArray;
// 	// your code here
// 	return result;
// };

// console.log(myFlatFunc([1, 3, 5, [1, [4, 5], "asdf", [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
