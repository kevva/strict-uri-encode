# strict-uri-encode [![Build Status](https://travis-ci.org/kevva/strict-uri-encode.svg?branch=master)](https://travis-ci.org/kevva/strict-uri-encode)

> A stricter URI encode adhering to [RFC 3986](http://tools.ietf.org/html/rfc3986)


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
