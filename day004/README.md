# Day 4

src: https://www.freecodecamp.org/news/how-to-use-css-to-create-a-beautiful-loading-animation-for-your-app/

# Takeaways

- `min-width` + `margin: 0 auto` to center the content
- `color: transparent` to hide the text
- `keyframes` for animation

The idiom for loading placeholder

```css
.loading {
  color: transparent;
  background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
  background-size: 400%;
  animation: loading 1.2s ease-in-out infinite;
}

@keyframes loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
```
