# GALLERY SLIDER DOCUMENTATION

A responisve animated gallery slider created with NextJs v14 and tailwind css.

## IMAGES/VIDEO

VIEW ON CODEPEN: [https://codepen.io/Developer-Renaissance/pen/gONOXVQ]

### HOW TO USE

1. Install Nextjs and tailwind in your project, `[NextJs Doc]` `(https://nextjs.org/docs/getting-started/installation)`

2. Copy source code from /gallery-slider/components/GallerySlider.js

3(I) The slider accepts two props: **array(Compulsory)** (which is an array of objects with image and a serialized id, see data.js file, emulate the object structure.). You can decide to the text object or not.

```
   const imageSlides = [{
    id: 1,
    src: 'https://images.unsplash.com/photo-1666782199657-09885cc1c088',
    text: {
      header: 'Header',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
    text: {
      header: 'Header',
      sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  }]
  ...

```

3(II) **timeSec(optional)** which is a number prop of the number of miiiseconds for the interval, if this prop is not provided, it fallbacks to a _default 4000ms_.

### HOW TO CONTRIBUTE

Contributions are welcome! If you have an idea for improvement or have found a bug, please open an issue or submit a pull request.
