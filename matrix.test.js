global.Matrix = require('./matrix.js');

expect.extend({
	toBeRandom(received) {
		let isRandom = true;
		if(received instanceof Matrix){
			received.data.forEach(rows => {
				rows.forEach(value => {
					isRandom = isRandom && value !== 0;
				});
			});
		}

		return {message: `expected ${received.data} to be random`,pass: isRandom};
	}
});

// Contruct a new Matrix object
test("Creating Matrix object",() => {
	let matrix = new Matrix(2,2);
	expect(matrix).toEqual({
		rows: 2,
		cols: 2,
		data: [
			[0,0],
			[0,0]
		]
	});
});

// Static from array
test("Matrix:fromArray",() => {
	let matrix = Matrix.fromArray([1,2,3,4]);
	expect(matrix).toEqual({
		rows: 4,
		cols: 1,
		data: [[1],[2],[3],[4]]
	})
});

// Subtracting two matrices
test("Matrix:subtract",() => {
	let m1 = new Matrix(2,2).map((_,i,j) => i * 2 + j + 1);
	let m2 = new Matrix(2,2).map((_,i,j) => i * 2 + j);
	let result = Matrix.subtract(m1,m2);
	expect(result).toEqual({
		rows: 2,
		cols: 2,
		data: [
			[1,1],
			[1,1]
		]
	});
});

// Convert to Array
test("Matrix.toArray",() => {
	let m1 = new Matrix(2,2).map((_,i,j) => i * 2 + j + 1);
	let result = m1.toArray();
	expect(result).toEqual(
		[1,2,3,4]
	);
});

// Randomize a matrix
test("Matrix.randomize",() => {
	let result = new Matrix(2,2);
	result.randomize();
	expect(result).toBeRandom();
});

// Adding two matrices
test("Matrix.add",() => {
	let result = new Matrix(2,3).map((_,i,j) => i * 3 + j + 1);
	let adder = new Matrix(2,3).map(() => 1);
	result.add(adder);
	expect(result).toEqual({
		rows: 2,
		cols: 3,
		data: [
			[2,3,4],
			[5,6,7]
		]
	});
});

// Transpose a matrix
test("Matrix:transpose",() => {
	let result = new Matrix(2,3).map((_,i,j) => i * 3 + j + 1);
	let expected = new Matrix(3,2).map((_,i,j) => i + j * 3 + 1);
	let transpose = Matrix.transpose(result);
	expect(transpose).toEqual(expected);
});

// Multiply two matrices
test("Matrix:multiply",() => {
	let m1 = new Matrix(2,3).map((_,i,j) => i * 3 + j + 1);
	let m2 = new Matrix(3,3).map((_,i,j) => i === j ? 1 : 0);  // Identity
	let result = Matrix.multiply(m1,m2);
	expect(result).toEqual(m1); 		// MI = M
});

// Mapping
test("Matrix.map",() => {
	let result = new Matrix(2,3).map((_,i,j) => i * 3 + j + 1);
	expect(result).toEqual({
		rows: 2,
		cols: 3,
		data: [
			[1,2,3],
			[4,5,6]
		]
	});
});

// Static mapping
test("Matrix:map",() => {
	let result = Matrix.map(new Matrix(2,3),(_,i,j) => i * 3 + j + 1);
	expect(result).toEqual({
		rows: 2,
		cols: 3,
		data: [
			[1,2,3],
			[4,5,6]
		]
	});
});