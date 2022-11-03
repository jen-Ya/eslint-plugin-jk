const getIndent = (line) => {
	return /^\s*/.exec(line)[0];
};

module.exports = {
	getIndent,
};