'use strict';
var test = require('ava');
var strictUriEncode = require('./');

test(function (t) {
	t.assert(strictUriEncode('unicorn!foobar') === 'unicorn%21foobar');
	t.assert(strictUriEncode('unicorn\'foobar') === 'unicorn%27foobar');
	t.assert(strictUriEncode('unicorn*foobar') === 'unicorn%2Afoobar');
	t.assert(strictUriEncode('unicorn*foobar') !== encodeURIComponent('unicorn*foobar'));
	t.assert(strictUriEncode('unicorn.foobar') === 'unicorn%2Efoobar');
	t.assert(strictUriEncode('unicorn.foobar') !== encodeURIComponent('unicorn.foobar'));
	t.end();
});
