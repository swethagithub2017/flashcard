// BasicCard constructor 
exports.BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

// ClozeCard constructor 
exports.ClozeCard = function(text, cloze) {
	// Strings to lower case
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	// Converts to lowercase and checks for cloze statement 
	if (!textToLower.includes(clozeToLower)) {
		console.log('ERROR: cloze not in text -- "' + cloze + '"');
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '___');
}