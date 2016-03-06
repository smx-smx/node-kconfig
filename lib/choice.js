var Choice = function(options){
	/* TOKEN: prompt <text>
	 * Text for the choice menu
	 */
	this.title = options.title;

	/* TOKEN: default <expr>
	 * The default value
	 */
	this.default = options.default;

	/* TOKEN: ---help--- <content>
	 * The help text
	 */
	this.help = options.help;

	this.choices = [];
	if(options.choices)
		this.choices = options.choices;
}

Choice.prototype.toString = function(){
	var output = "";
	output += "choice\n";
	output += "\tprompt \"" + this.title + "\"\n";
	if(this.default)
		output += "\tdefault " + this.default + "\n";

	if(this.help){
		output += "\t---help---\n";
		this.help.split(/\r?\n/g).forEach(function(line){
			output += "\t\t" + line + "\n";
		});
	}
	output += "\n";

	this.choices.forEach(function(choice){
		choice.toString().split(/\r?\n/g).forEach(function(line){
			output += "\t" + line + "\n";
		});
		output += "\n";
	});

	output += "endchoice\n";

	return output;
}

module.exports = Choice;
