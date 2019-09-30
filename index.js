'use strict';
module.exports = string => encodeURIComponent(string).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
