import test from 'ava';
import strictUriEncode from '.';

test(t => {
	t.is(strictUriEncode('unicorn!foobar'), 'unicorn%21foobar');
	t.is(strictUriEncode('unicorn\'foobar'), 'unicorn%27foobar');
	t.is(strictUriEncode('unicorn*foobar'), 'unicorn%2Afoobar');
	t.not(strictUriEncode('unicorn*foobar'), encodeURIComponent('unicorn*foobar'));
});
