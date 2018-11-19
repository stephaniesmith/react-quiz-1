# React Quiz

## Components

* `App.js`
  * Container component
* `ColorSelector.js`
  * Presentational/Functional component
  * Select input with options to change font color to black, white, blue, red, yellow
  * Select input with option to change background color to black, white, blue, red, yellow
* `TextSelector.js`
  * Presentational/Functional component
  * Text input
* `Shape.js`
  * Presentational/Functional component
  * takes `text`, `color` and `backgroundColor` props
  * Should display `text`
  * Should change `color` and `backgroundColor` based on props
  * HINT: Use `<div style={{ width: '100px', height: '100px' }}>` to pass in styles


## Tests

Snapshot test all components. Use `toMatchSnapshot()`
to create a snapshot.

## Rubric

* Tests: 10pts
* Components: 15pts
* Clean style: 5pts
* State management: 10pts
* Free points: 10pts
