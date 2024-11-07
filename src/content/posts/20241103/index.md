---
pubDate: 2024-11-03
---

I went outside for a walk yesterday and managed to find a cool spot to capture a photosphere.

![Basketball court photosphere](/a-frame/ref/PXL_20241102_035407704.PHOTOSPHERE.jpg)

Still trying to work out the kinks of capturing this type of image, but otherwise I'd say it's pretty good. After I'd taken the photosphere, my camera also tried to blend in the parts of the image that I'd missed.

You can find the photosphere experience here: [Skybox 2](/a-frame/sketch/2-skybox-2)

<video controls>
  <source src="/a-frame/ref/2-skybox-2.mp4" type="video/mp4">
</video>

I also spent some time figuring out how to update the sky of the interaction to change colour just on hover.

There were two additional events I needed to listen for:

- mouse enter
- mouse leave

It was as easy as extracting the current colour of the element that was hovered and setting the colour attribute of the sky element with that colour.

<video controls>
  <source src="/a-frame/ref/3-interaction-2.mp4" type="video/mp4">
</video>

You can find the colour-changing interaction here: [Interaction - Colour Change](/a-frame/sketch/3-interaction-1)
