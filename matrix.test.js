const Matrix = require('./matrix.js');

// Contruct a new Matrix object
test("Creating Matrix object",(done) => {
	let matrix = new Matrix(2,2);
	expect(matrix).toEqual({
		rows: 2,
		cols: 2,
		data: [
			[0,0],
			[0,0]
		]
	});
	done();
});

// Static from array
test("Matrix.fromArray",(done) => {
	let matrix = Matrix.fromArray([1,2,3,4]);
	expect(matrix).toEqual({
		rows: 4,
		cols: 1,
		data: [[1],[2],[3],[4]]
	})
	done();
});

// Subtracting two matrices
test("Subtracting two matrices",(done) => {
	let m1 = new Matrices(2,2).map((_,i,j) => i * 2 + j + 1);
	let m2 = new Matrices(2,2).map((_,i,j) => i * 2 + j);
	let result = Matrix.subtract(m1,m2);
	expect(result).toEqual({
		rows: 2,
		cols: 2,
		data: [
			[1,1],
			[1,1]
		]
	});
	done();
});