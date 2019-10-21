# strict-uri-encode [![Build Status](https://travis-ci.org/kevva/strict-uri-encode.svg?branch=master)](https://travis-ci.org/kevva/strict-uri-encode)

> A stricter URI encode adhering to [RFC 3986](http://tools.ietf.org/html/rfc3986)

## Explanation

This is a drop-in replacement for [`encodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent). The only difference is that strict-uri-encode also encodes the following characters:

`!` `'` `(` `)` `*`

For historical reasons, `encodeURIComponent` doesn't encode the above characters. In most cases this is fine, as they have no formalized delimiting uses in generic URI components. But as of RFC 3986 (2005), these characters are now reserved. Also, leaving them unencoded can create ambiguity in contexts where they have other meanings, such as Markdown syntax. So it is generally safer to encode them.

For decoding, just use [`decodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) as usual.

## Install

```
$ npm install strict-uri-encode
```


## Usage

```js
const strictUriEncode = require('strict-uri-encode');

strictUriEncode('unicorn!foobar');
//=> 'unicorn%21foobar'

strictUriEncode('unicorn*foobar');
//=> 'unicorn%2Afoobar'
```


## API

### strictUriEncode(string)

#### string

Type: `string | number`

String to URI encode.


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-strict-uri-encode?utm_source=npm-strict-uri-encode&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
