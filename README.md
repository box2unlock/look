Look
====

Simple set of CSS rules & basic user-interface components.

Built primarily for my site [box2unlock.com](https://box2unlock.com/) but
released publicly as it might be useful as a foundation for other projects out
there. Short and simple.

Demo
----

[https://cdn.rawgit.com/box2unlock/look/master/index.html](https://cdn.rawgit.com/box2unlock/look/master/index.html)

Features
---------

- includes [Normalize](https://necolas.github.io/normalize.css/)
- includes [Font Awesome](http://fontawesome.io/)
- follows vertical rhythm
- uses `rem` sizing with `px` fallback
- two color variants: `day` and `night`

Compiling
---------

```
node-sass --source-map true --precision 10 --output-style compressed $FileName$ ../css/$FileNameWithoutExtension$.css
```

where `$FileName$` is either `daylook.scss` or `nightlook.scss`.
