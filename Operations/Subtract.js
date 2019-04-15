module.exports = (first, ...args) => args.reduce((agg, value) => { return agg -= value; }
	, first);
