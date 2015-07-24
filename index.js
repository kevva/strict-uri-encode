'use strict';
module.exports = function (str) {
	var type = typeof str;
	if (str != null && (type === 'object' || type === 'function')) {
		throw new TypeError('Expected a string, or a primitive type. ');
	}

	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16);
	});
};
