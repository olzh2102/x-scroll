# Scrollbun

Scrollbun is a lightweight and customizable React component that allow you effortlessly create horizontal scrolling container for your app.

![cover gif image](./hero.gif)

## Installation
To install dependencies:

```bash
npm install scrollbun
bun install scrollbun
```

## Usage
Here's an example of usage:

```javascript
import Scrollbun from 'scrollbun'

function App() {
  return (
    <Scrollbun style={{ width: '500px' }}>
      <div style={{ width: '500px', height: '300px' }} />
      <div style={{ width: '500px', height: '300px' }} />
    </Scrollbun>
  )
}
```

## Props

<table>
  <tr>
    <th>Prop name</th>
    <th>Description</th>
    <th>Default value</th>
  </tr>
  <tr>
    <td>direction</td>
    <td>Can be <code>'horizontal'</code> or <code>'vertical'</code>.</td>
    <td><code>'horizontal'</code></td>
  </tr>
  <tr>
    <td>scrollRate</td>
    <td>A number to control scroll rate.</td>
    <td>0.5</td>
  </tr>
  <tr>
    <td>...rest</td>
    <td>any <code>HTMLDivElement</code> prop, except <code>onWheel</code>, that will be added to the main <code>div</code> element.</td>
    <td>n/a</td>
  </tr>
</table>

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/olzh2102/"><img src="https://avatars.githubusercontent.com/u/27337196?v=4?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Olzh K. Kurikov</b></sub></a>
    <td align="center"><a href="https://www.linkedin.com/in/dinmukhamed-sailaubek-9a5a78234/"><img src="https://avatars.githubusercontent.com/u/57768070?v=4?v=4?s=100" width="100px;" alt=""/><br /><sub><b>D. Sailaubek</b></sub></a>
    
  </tr>
</table>

## LICENSE

MIT

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
