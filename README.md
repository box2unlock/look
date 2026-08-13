# Look

Minimalistic CSS framework

Plain and simple Sass-based CSS framework. Includes basic set of UI components.
Built for [Box2Unlock](https://box2unlock.xml.ovh/) but released as standalone
package that might be useful as a starting point for other projects.

## Demo

[https://box2unlock.github.io/look/](https://box2unlock.github.io/look/)

## Highlights

- follows vertical rhythm
- uses `rem` sizing
- defaults to the [Inter](https://rsms.me/inter/) typeface with a system-font fallback
- available in two color themes: `light` and `dark`
- follows [rstacruz/rscss](https://github.com/rstacruz/rscss) methodology
- bundles [sindresorhus/modern-normalize](https://github.com/sindresorhus/modern-normalize)
- bundles [Font Awesome](https://fontawesome.com/)

## Install

```bash
npm install @box2unlock/look
```

## Usage

### Compiled CSS (no Sass required)

```html
<link rel="stylesheet" href="node_modules/@box2unlock/look/dist/look.min.css">
```

### Sass

```scss
@use '@box2unlock/look/scss/look';
```

## Customizing

Override any framework variable as you import it by passing values 
through `with`:

```scss
@use '@box2unlock/look/scss/look' with (
    $look-color-text: rebeccapurple
);
```

Any variable declared `!default` in `scss/_variables.scss` can be overridden 
this way.

## Dark color theme

Look ships `light` and `dark` color themes built on CSS custom properties, so 
no extra stylesheet or JavaScript is required.

Switch the whole page to dark by adding the `dark` class to the `<html>` 
element (or any wrapping element):

```html
<html class="dark">
```

## Typography

Look sets its default typeface to [Inter](https://rsms.me/inter/) - a modern,
highly legible sans-serif - and falls back to the platform's native UI font
(`system-ui`) so text still looks current before any web font loads.

To keep the package lightweight the font files are **not** bundled, so load 
Inter in your app to get the intended look, for example:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
```

## Icons

Look bundles [Font Awesome Free](https://fontawesome.com/) (brands, regular and
solid styles), so the icon classes work straight out of the compiled CSS:

```html
<i class="fa-brands fa-square-facebook" aria-hidden="true"></i>
<i class="fa-solid fa-heart" aria-hidden="true"></i>
```

The web fonts ship next to the stylesheet in `dist/fonts`. If you serve them
from somewhere else, point the framework at that location:

```scss
@use '@box2unlock/look/scss/look' with (
    $look-icon-font-path: '/assets/fonts'
);
```

## License

Released under the [MIT License](https://opensource.org/license/mit).
