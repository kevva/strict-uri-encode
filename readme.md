# strict-uri-encode [![Build Status](https://travis-ci.org/kevva/strict-uri-encode.svg?branch=master)](https://travis-ci.org/kevva/strict-uri-encode)

> A stricter URI encode adhering to [RFC 3986](http://tools.ietf.org/html/rfc3986)


## Install

```
$ npm install --save strict-uri-encode
```


## Usage

```js
var strictUriEncode = require('strict-uri-encode');

strictUriEncode('unicorn!foobar')
//=> 'unicorn%21foobar'

strictUriEncode('unicorn*foobar')
//=> 'unicorn%2Afoobar'

strictUriEncode('unicorn.foobar')
//=> 'unicorn%2Efoobar'
```


## API

### strictUriEncode(string)

#### string

*Required*  
Type: `string`, `number`

String to URI encode.


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
