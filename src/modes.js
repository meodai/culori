const converters = {};
const modes = {};
const parsers = [];

const defineMode = definition => {
	converters[definition.mode] = Object.assign(
		converters[definition.mode] || {},
		definition.output
	);
	Object.keys(definition.input || {}).forEach(k => {
		if (!converters[k]) {
			converters[k] = {};
		}
		converters[k][definition.mode] = definition.input[k];
	});

	// Color space channel ranges
	if (!definition.ranges) {
		definition.ranges = {};
	}

	definition.channels.forEach(channel => {
		// undefined channel ranges default to the [0, 1] interval
		if (definition.ranges[channel] === undefined) {
			definition.ranges[channel] = [0, 1];
		}
	});

	modes[definition.mode] = definition;
	(definition.parsers || []).forEach(parser => parsers.push(parser));
};

const getModeDefinition = mode => modes[mode];

export { defineMode, getModeDefinition, converters, parsers };
