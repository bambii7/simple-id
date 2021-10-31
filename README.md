# Plain ID

Simple ID generator for browsers. Zero dependancies by leveraging `crypto.getRandomValues`.

Can either be consumed as an npm package or used as a guide to implementing your own within your app.

Npm packages are notoriously [vulnerable](https://www.bleepingcomputer.com/news/security/popular-npm-library-hijacked-to-install-password-stealers-miners/) with deep dependency chains. It takes one compromised package to threaten the state of your application.

To increase security copy the 30 lines of code to create your own key generator.

## Install

```bash
npm i plain-id
```

## Usage

```javascript
import plainId from 'plain-id'

const key = plainId()
```

## Further reading

V8 switches to `xorshift128`
https://v8.dev/blog/math-random

There is a wonderful article here on seeded random values in JS by David Bau
http://davidbau.com/archives/2010/01/30/random_seeds_coded_hints_and_quintillions.html

Web crypto
https://w3c.github.io/webcrypto/