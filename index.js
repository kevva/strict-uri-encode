'use strict';
module.exports = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
        return "%" + x.charCodeAt(0).toString(16).toUpperCase()
    })
};
