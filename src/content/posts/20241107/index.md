---
pubDate: 2024-11-07
---

Since I haven't been working on this project for the last few days, I decided to jump back in and watch some videos on using [raycasting](https://www.youtube.com/watch?v=r_pq9EuE-o0&list=PLP3KjR1TMw7ekqC4o5gy0rR4odw7Jga84&index=10&pp=iAQB), [mixins](https://www.youtube.com/watch?v=UjvvtIQwaqo&list=PLP3KjR1TMw7ekqC4o5gy0rR4odw7Jga84&index=11&pp=iAQB), [integrating physics](https://www.youtube.com/watch?v=eQtMgt-R0lE&list=PLP3KjR1TMw7ekqC4o5gy0rR4odw7Jga84&index=13&pp=iAQB) and [hand-controllers](https://www.youtube.com/watch?v=vQ85u3dzmZY&list=PLP3KjR1TMw7ekqC4o5gy0rR4odw7Jga84&index=12&pp=iAQB).

I don't think I have use for the hand-controllers, but it's nice to know there are tools available to help test the experience through a simulation. This is made possible via browser extensions:

- Firefox: https://addons.mozilla.org/en-US/firefox/addon/webxr-api-emulator/
- Google Chrome: https://chromewebstore.google.com/detail/webxr-api-emulator/mjddjgeghkdijejnciaefnkjmkafnnje?hl=en

To apply what I learned today, I've updated the interaction example to use mixins instead of copy and pasting the same code. This effectively uses the DRY methodology.

First you need to make sure you have the asset manager defined

```html
<a-assets> ...insert mixins here </a-assets>
```

Next define your mixin and give it an ID so that it can be referenced in any of your entities in the scene. You are not limited to just geometry, I've also included colour mixins.

```html
<a-assets>
  <a-mixin id="myshape" geometry="primitive:box"></a-mixin>
  <a-mixin id="blue" material="color:#4CC3D9"></a-mixin>
  <a-mixin id="red" material="color:#EF2D5E"></a-mixin>
  <a-mixin id="yellow" material="color:#FFC65D"></a-mixin>
  <a-mixin id="green" material="color:#7BC8A4"></a-mixin>
</a-assets>
```

Then finally, we remove the duplicated components and replace it with the mixin component. We can add multiple mixins by joining the IDs with a space.

```html
<!-- FROM THIS -->
<a-entity
  foo
  geometry="primitive:box"
  material="color:#4CC3D9"
  position="-2 0 -3"
></a-entity>
<!-- TO THIS -->
<a-entity foo mixin="myshape blue" position="-2 0 -3"></a-entity>
```

So now if I decide to change the primitive across all the elements, I can just update the `myshape` mixin geometry component.

Unfortunately, after some experimentation, it looks like I can't add custom components into the mixin.

> Note: The order of how you write the mixin matters. It runs in order of first to last. So the last will override any previous classes that were called.

You can find the colour-changing interaction here: [Interaction - Colour Change](/a-frame/sketch/3-interaction-1)
