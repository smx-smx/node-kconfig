var Menu = function(options){
	/* TOKEN: menu <title>
	 * Title of the menu
	 */
	this.title = options.title;

	/* Array of Choices */
	this.choices = [];

	if(options.choices){
		this.options = options.choices;
	}
}

Menu.prototype.toString = function(){
	var output = "";
	output += "menu \""+this.title + "\"\n";

	this.choices.forEach(function(choice){
		choice.toString().split(/\r?\n/g).forEach(function(line){
			output += "\t" + line + "\n";
		});
		output += "\n";
	});

	output += "endmenu\n";

	return output;
}


module.exports = Menu;
