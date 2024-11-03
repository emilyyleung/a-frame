---
pubDate: 2024-11-02
---

Today I learned how to create my own component in A-Frame!

Each component you create comes with a set of lifecycle methods. It also comes with a schema by default which you can set up - I think comes from object-oriented programming.

```js
// Registering component in foo-component.js
AFRAME.registerComponent("foo", {
  schema: {}, // insert default data here
  init: function () {},
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
  // when an event happens
  events: {
    click: function () {},
  },
});
```

To register the component, you reference it to an entity.

```html
<a-entity geometry="primitive: box;" foo></a-entity>
```

To summarise the project I was working on, basically I wanted to have elements scattered in view. Each element had a specific colour assigned to the material. When a user moves around with the cursor, the background (or sky) would change to follow that colour.

For this functionality to work, I needed to use the `events` listener which listened for a cursor event. There are two ways that a cursor can "click" an element:

1. hover enables the click (triggers once)
2. pointing on the element and you either click the mouse or touch the screen (can click multiple times one after the other)

These options are set via the cursor element - where fuse set to true enables click on hover (option 1).

```html
<a-entity camera look-controls>
  <a-entity
    cursor="fuse: true; fuseTimeout: 500"
    position="0 0 -1"
    geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
    material="color: black; shader: flat"
  >
  </a-entity>
</a-entity>
```

Other than that, I was having some troubles with following examples because I had set up Astro to use TypeScript. Luckily there was [a types package for A-Frame](https://www.npmjs.com/package/@types/aframe) as well as [sample code](https://aframe-typescript.dev/reference/component/) I could implement for building custom components.

There's still some work to be done, but you can find project 3 here: [Interaction](/a-frame/sketch/3-interaction)

<video controls width="250">
  <source src="/a-frame/ref/3-interaction-1.mp4" type="video/mp4">
</video>
