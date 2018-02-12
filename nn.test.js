const {NeuralNetwork,NeuralNetworkLayer} = require('./nn.js');
global.NeuralNetwork = NeuralNetwork;
global.NeuralNetworkLayer = NeuralNetworkLayer;

Array.prototype.random = function(){
	return this[Math.random() * this.length | 0];
}

expect.extend({
	isNeuralNetworkWithLayerOf(received,numLayer){
		let haveAllProperties = true;

		[
			"input_nodes","hidden_nodes","output_nodes","learning_rate",
			"activation_function","d_activation_function","layer"
		].forEach(propName => {
			haveAllProperties = haveAllProperties && received[propName] !== undefined;
		});

		return {
			message: () => `Expected ${received} to be NeuralNetwork`,
			pass: haveAllProperties && received instanceof NeuralNetwork && 
					received.hidden_nodes instanceof Array &&
					received.learning_rate === 0.1 && received.layer instanceof Array &&
					received.layer.length === numLayer-1  // Not include the input layer
		};
	}
})

test('Creating a new NeuralNetwork',() => {
	let nn = new NeuralNetwork(2,2,1);
	expect(nn).isNeuralNetworkWithLayerOf(3);
});