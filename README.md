# json-post
How to post JSON in NodeJS.

<sup><sub>You know those simplest things ever not properly documented online? That!</sub></sup>

```js
const postJSON = require('post-json');
// or import postJSON from 'post-json'

postJSON(
  'https://whatever:5000/seriously',
  {hello: 'world'}
  // optionally extra headers as third argument
  // {...}
).then(
  console.info,
  console.error
);
```

That's literally it.
