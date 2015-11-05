# angular-radialgraph

This is an Angular component that draws SVG radial graphs for a given normalized value (0-100) as a SVG element with an additional state for *complete* values (100). Highly inspired by [D3 Radial Progress](http://www.brightpointinc.com/clients/brightpointinc.com/library/radialProgress/index.html).

Some examples here [http://www.morra.co/radialgraph/](http://www.morra.co/radialgraph/)

## Usage

### Installation

Install into your app with Bower:

```sh
$ bower install --save angular-radialgraph
```

Declare module dependency `angularRadialgraph` in your Angular app:

```javascript
angular.module('myApp', ['angularRadialgraph']);
```

### Directive options

Use the directive `fs-radial-graph` in your markup:

```html
  <div fs-radial-graph
       data-value="79"
       data-size="120"
       data-strokewidth="9">
  </div>
```
#### value

Linked value to be plotted. Must be a normalized value (0-100).

#### size

Width of the expected square that contains the SVG graph in pixels.

#### strokewidth

Default value: 9. Stroke width value in pixels.

### Styles

Include styles `styles.css` or create your own styles to define the `.fs-radial-graph` class:

```css
.fs-radial-graph circle {
  fill: #fff;
  stroke: #ccc;
  stroke-width: 9;
}
.fs-radial-graph path {
  fill: none;
  stroke: #F0AD4E;
  stroke-width: 9;
}
.fs-radial-graph path.complete {
  stroke: #5BB85C;
}
```

## Changelog


### 1.0.4

Removed fill to inner graph. Updated example.

### 1.0.3

Fixed config dependency in directive.

### 1.0.2

Removed unused config module.

### 1.0.1

Fixed dist files names.

### 1.0.0

Initial version. Not much to say about.

## License

MIT
