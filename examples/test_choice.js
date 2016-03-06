var kconfig = require("../index.js");
var types = kconfig.ConfigTypes;

var menu = new kconfig.Choice({
	title: "Test Choice",
	choices: [
		new kconfig.Config({
			name: "choice1",
			type: types.bool,
			text: "Choice 1",
			help: "Sample Choice 1"
		}),
		new kconfig.Config({
			name: "choice2",
			type: types.bool,
			text: "Choice 2",
			help: "Sample Choice 2"
		})
	]
});

console.log(menu.toString());

