'use strict';
function encodeChar(x) {
	return '%' + x.charCodeAt(0).toString(16).toUpperCase();
}

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, encodeChar);
};
