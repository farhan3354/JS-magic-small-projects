let arr = [43,23,44,12, 9, 43];
let arr1 = [10, 20, 30,];

console.log("Reverse an array");
console.log(arr.reverse());

let compare_asc = (a, b) => {
	return a - b;
}

let compare_desc = (a, b) => {
	return b - a;
}
console.log("Array sort asc");
console.log(arr.sort(compare_asc));

console.log("Array sort desc");
console.log(arr.sort(compare_desc));

console.log("Filter an array");
console.log(arr.filter( x => x != 43 ));

// add new value at the end of the array
console.log("Array push");
arr.push(34);
console.log(arr);

// remove value at the end of the array
console.log("Array Pop");
arr.pop();
console.log(arr);

// remove value from start of an array
console.log("Array shift");
arr.shift();
console.log(arr);

// add new value at the begining of an array
console.log("Array unshift");
arr.unshift(50);
console.log(arr);

// convert an array to string
console.log("Array to string");
console.log(arr.toString());

// convert array to given character
console.log("Array join");
console.log(arr.join('-'));

// combine multiple arrays to a single array
console.log("Combine Arrays");
console.log(arr.concat(arr1));

// extract values from start index to given index
console.log("Array Slice");
// slice (start, end);
arr.slice(0,3);
console.log(arr);

// add items in array from specific index and also remove an item or items
console.log("Add Items in array");
arr.splice(2, 1, 51, 52, 53, 54);
console.log(arr);