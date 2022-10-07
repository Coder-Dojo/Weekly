# Tip of the Week

Här samlar vi alla Tip of the Week.

## `&shy;`

Silent hyphen. Använd för att radbryta långa ord i t.ex. menyer eller andra trånga utrymmen. Det fina är att ordet radbryts med bindestreck vid behov, men behövs ordet inte radbrytas visas inte bindestrecket.

```
// Användning
Kommunfullmäktige&shy;representant

// Visas så här om det får plats horisontellt i sin container
Kommunfullmäktigerepresentant

// Visas så här om det inte får plats
Kommunfullmäktige-
representant
```

## `<details />` och `<summary />`

Använd för att toggla innehåll med endast HTML. All tillgänglighet på köpet.

[Se help kodexempel för details/summary här](https://codepen.io/mikaeln/pen/KKRXqEv)


## Breakout click area

Teknik för att få till en större klickyta, t.ex. för att kunna klicka på en hel teaser i stället för bara länken i den.

```
<!-- HTML -->
<div class="teaser">
  <h2>Foo bar</h2>
  <p>Lorem ipsum dolor sit amet</p>
  <a class="teaser-button" href="#">Läs mer om foo bar</a>
</div>

/* CSS */
.teaser {
  position: relative;
  …
}

…

.teaser-button::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

[Se helt kodexempel för breakout click area](https://codepen.io/mikaeln/pen/oNdPmQd)

Bonus-tips: top/right/bottom/left kan ersättas med `inset: 0;` men det är hyggligt nytt så kolla först stödet på [Can I Use…](https://caniuse.com/?search=inset)
