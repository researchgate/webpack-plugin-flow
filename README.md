# webpack-plugin-flow

Webpack plugin that runs [flow](http://flowtype.org/) checks before each
compilation or watch.

# Usage

In your webpack config:

```js
var FlowCheck = require('webpack-plugin-flow');

...

module.exports = {
...
plugins: [ new FlowCheck() ]
}

```
