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