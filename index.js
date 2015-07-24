'use strict';
module.exports = function (str) {
	if (typeof str !== 'string' && typeof str !== 'number') {
		throw new TypeError('Expected a string or a number');
	}

	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16);
	});
};
