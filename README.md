# U21 Styles

Allow to encapsulate styles from u21 to be used in other projects.

## Installation

```
npm install @bitlogic-eng/u21-styles
```

## How to use

### Css

```
.example-primary {
  color: var(--bit-color-primary)
}

.example-primary-light {
  color: var(--bit-color-primary-tint)
}

.example-primary-dark {
  color: var(--bit-color-primary-shade)
}

.example-primary-contrast {
  color: var(--bit-color-primary-contrast)
}

```

### React

App.js

```
import '@bitlogic-eng/u21-styles/dist/style.css';

...

return (
    <div className='App'>
      <header className='App-header'>

        <p className='text-primary-base'>Text Primary</p>
        <p className='text-primary-tint'>Text Primary tint</p>
        <p className='text-primary-shade'>Text Primary shade</p>
        <p className='text-primary-contrast'>Text Primary contrast</p>
...

```

### Angular

styles.scss

```
 @import '~@bitlogic-eng/u21-styles/dist/style.css';
```

app.components.html

```

    <div class='App'>
      <header class='App-header'>
        <p className='text-primary-base'>Text Primary</p>
        <p className='text-primary-tint'>Text Primary tint</p>
        <p className='text-primary-shade'>Text Primary shade</p>
        <p className='text-primary-contrast'>Text Primary contrast</p>

```

## Tech used ...

- Scss (https://sass-lang.com/)
- Tailwind (https://tailwindcss.com/)

## Custom content ...

- index.html: visual test

- public/assets (theme):

  - img: here the img will be defined.
  - scss: here the scss will be defined. (Base: colors, function, typo)

- tailwind.config.cjs: extend theme (colors, font ...)

## What we will export ...

- Custon styles (css, scss)
- Tailwindcss: bg|text|p|m|flex|grid|justify|content. (https://tailwindcss.com/docs)

```

```
