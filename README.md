# json-post
How to post JSON in NodeJS.

<sup><sub>You know those simplest things ever not properly documented online? That!</sub></sup>

```js
const jsonPOST = require('json-post');
// or import jsonPOST from 'json-post'

jsonPOST(
  'https://whatever:5000/seriously',
  {hello: 'world'}
  // optionally extra headers {...}
).then(
  console.info,
  console.error
);
```

That's literally it.

#### ... and what about browsers ?

You can use this [MDN fetch example](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) to post JSON data.
