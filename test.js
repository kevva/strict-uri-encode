import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('unicorn!foobar'), 'unicorn%21foobar');
	t.is(fn('unicorn\'foobar'), 'unicorn%27foobar');
	t.is(fn('unicorn*foobar'), 'unicorn%2Afoobar');
	t.not(fn('unicorn*foobar'), encodeURIComponent('unicorn*foobar'));
});
