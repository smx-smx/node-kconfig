var Config = function(options, depends, selects){
	/* TOKEN: depends on <boolean expression>
	 * The options that must be selected for this item to appear
	 * This token can have Boolean logic tokens
	 */
	this.depends = depends;

	/* TOKEN: select <option>
	 * The options that this item enables when chosen
	 * One select for each item
	 */
	this.selects = selects;

	/* TOKEN: config <name>
	 * The option name
	 */
	this.name = options.name;
	if(this.name){
		this.name = this.name.replace(/\s\s*/g, "_");
	}

	/* TOKEN: bool/tristate/string/hex <prompt>
	 * The option type and associated text
	 */
	this.type = options.type;
	this.text = options.text;

	/* TOKEN: ---help--- <content>
	 * The help text
	 */
	this.help = options.help;
}

Config.prototype.toString = function(){
	var output = "";
	output += "config " + this.name + "\n";
	output += "\t" + this.type + " \"" + this.text + "\"\n";
	if(this.help){
		output += "\t---help---\n";
		this.help.split(/\r?\n/g).forEach(function(line){
			output += "\t\t" + line.trim() + "\n";
		});
	}

	return output;
}

module.exports = Config;
