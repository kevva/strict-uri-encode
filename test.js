import test from 'ava';
import m from './';

test(t => {
	t.is(m('unicorn!foobar'), 'unicorn%21foobar');
	t.is(m('unicorn\'foobar'), 'unicorn%27foobar');
	t.is(m('unicorn*foobar'), 'unicorn%2Afoobar');
	t.not(m('unicorn*foobar'), encodeURIComponent('unicorn*foobar'));
});
