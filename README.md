Look
====

Minimalistic CSS framework.

A set of CSS rules & basic user-interface components. Built primarily for my
site [box2unlock.tk](https://box2unlock.tk/) but released publicly as it might
be useful as a foundation for other projects out there. Plain and simple.

Demo
----

[https://rawgit.com/box2unlock/look/master/index.html](https://rawgit.com/box2unlock/look/master/index.html)

Features
--------

- uses `rem` sizing with `px` fallback
- available in two color variants: `day` and `night`
- follows vertical rhythm
- follows [RSCSS](http://rscss.io/) methodology
- includes [Normalize](https://necolas.github.io/normalize.css/)
- includes [Font Awesome](http://fontawesome.io/)
- includes [ungrid](http://chrisnager.github.io/ungrid/)

Compiling
---------

Install [node-sass](https://github.com/sass/node-sass) (extremely
fast [Sass](http://sass-lang.com/) compiler).

```
node-sass
--source-map true
--precision 10
--output-style compressed
$FileName$ ../css/$FileNameWithoutExtension$.css
```

where `$FileName$` is either `daylook.scss` or `nightlook.scss`.
