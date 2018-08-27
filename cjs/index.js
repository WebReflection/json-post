/*!
 * ISC License
 *
 * Copyright (c) 2018, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
const postJSON = (where, data) => new Promise((resolve, reject) => {
  const json = JSON.stringify(data);
  const url = require('url').parse(where);
  const request = require(url.protocol.slice(0, -1)).request(
    {
      hostname: url.hostname,
      port: url.port,
      path: url.path,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'content-length': json.length
      }
    },
    res => {
      res.setEncoding('utf8');
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(data.join('')));
    }
  );
  request.on('error', reject);
  request.end(json);
});
module.exports = postJSON;
