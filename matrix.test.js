const Matrix = require('./matrix.js');

// Contruct a new Matrix object
test("Creating Matrix object",(value) => {
	let matrix = new Matrix(2,2);
	expect(matrix).toEqual(
		{
			rows: 2,
			cols: 2,
			data: [
				[0,0],
				[0,0]
			]
		}
	);
});