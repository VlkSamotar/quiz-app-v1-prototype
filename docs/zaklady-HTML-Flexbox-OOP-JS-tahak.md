
# 🚀 Cheat Sheet: Základy rozhraní, Flexbox & OOP v JS

---

## 1. HTML5 & Přístupnost (A11y)

Sémantika dává prvním prvkům význam pro prohlížeče i odečítače obrazovky. Přístupný web je čitelný, ovladatelný a použitelný pro všechny.

### 🏗️ Sémantické značky
* `<main>` – Hlavní, neopakující se obsah konkrétní stránky (na stránce by měl být jen jeden).
* `<header>` – Hlavička stránky nebo sekce (obsahuje logo, navigaci, nadpis).
* `<section>` – Tematické seskupení obsahu, obvykle má vlastní nadpis.
* `<article>` – Samostatná, nezávislá jednotka obsahu (např. příspěvek na blogu, karta produktu, komentář).
* `<button>` – Interaktivní prvek pro spuštění akce na stránce (nepoužívej `<div>` s click eventem!).

### ♿ Prvky přístupnosti
* **Struktura nadpisů (`<h1>`–`<h6>`):**
  * Nadpisy tvoří logickou kostru. `<h1>` má být na stránce pouze jednou.
  * Nikdy nepřeskakuj úrovně (např. z `<h2>` přímo na `<h4>`).
* **Čitelnost textu:**
  * Používej dostatečnou velikost písma (min. `16px` pro tělo) a relativní jednotky (`rem`, `em`).
* **Kontrastní poměry:**
  * Běžný text vyžaduje kontrastní poměr vůči pozadí minimálně **4.5:1** (standard WCAG AA).
* **Velké klikatelné plochy:**
  * Tlačítka a odkazy musí mít na dotykových zařízeních velikost alespoň **44×44 px** (využívej `padding`).

```html
<!-- Ukázka přístupné struktury karty -->
<article class="card">
  <header>
    <h2>Název kurzu</h2>
  </header>
  <main class="card-body">
    <p>Krátký popis obsahu kurzu pro začátečníky.</p>
  </main>
  <button type="button" class="btn">Zobrazit detail</button>
</article>

```

---

## 2. CSS3 Layout & Typografie

### 📦 Flexbox (Flexibilní Layout)

Zapíná se na rodičovském prvku pomocí `display: flex`.

```css
.container {
  display: flex;
  
  /* Směr hlavní osy */
  flex-direction: row;       /* Vedle sebe (výchozí) */
  /* flex-direction: column; */ /* Pod sebou */

  /* Zarovnání na hlavní ose (main axis) */
  justify-content: flex-start; /* Na začátek */
  /* justify-content: center; */    /* Na střed */
  /* justify-content: space-between; */ /* Rozprostřít s mezerami mezi */

  /* Zarovnání na kolmé ose (cross axis) */
  align-items: center;        /* Na středy prvků */
  /* align-items: stretch; */  /* Roztáhnout na plnou výšku (výchozí) */

  /* Mezera mezi flex položkami */
  gap: 1.5rem;               /* 24px mezera */
}

```

### 🎨 Stylování prvků a stavů

Kaskáda určuje, které pravidlo vyhrají (specifičnost: `ID` > `.třída` > `prvek`).

```css
/* Stylování třídy */
.btn {
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

/* Pseudo-třídy pro stavy */
.btn:hover {
  background-color: #1d4ed8; /* Najetí myší */
}

.btn:active {
  transform: scale(0.98);   /* Stisknutí tlačítka */
}

.btn:focus {
  outline: 3px solid #93c5fd; /* Přístupnost: zvýraznění při navigaci klávesnicí (Tab) */
  outline-offset: 2rem;
}

```

### ✍️ Typografie

Pro použití fontů z Google Fonts přidej do HTML hlavičky `<link>` nebo importuj přímo v CSS.

```css
/* Import z Google Fonts */
@import url('[https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap)');

body {
  font-family: 'Inter', system-ui, sans-serif; /* Záložní systémové písmo */
  font-size: 1rem;                             /* 16px */
  line-height: 1.5;                            /* Výška řádku pro dobrou čitelnost */
  letter-spacing: -0.011em;                    /* Jemné zahuštění / rozvolnění písma */
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;                            /* Nadpisy potřebují menší řádkování */
}

```

---

## 3. JavaScript (ES6+) – OOP a DOM

### 🏗️ Základy Objektově Orientovaného Programování (OOP)

```javascript
// Definice třídy
class Student {
  // Konstruktor – spouští se při vytváření nové instance (new)
  constructor(jmeno, rocnik) {
    this.jmeno = jmeno;
    this.rocnik = rocnik;
    this.skore = 0; // Výchozí vlastnost
  }

  // Metoda třídy
  pridatBody(body) {
    this.skore += body;
    console.log(`${this.jmeno} má nyní ${this.skore} bodů.`);
  }

  predstavSe() {
    return `Ahoj, jsem ${this.jmeno} a chodím do ${this.rocnik}. ročníku.`;
  }
}

// Instanciace – vytvoření konkrétního objektu
const student1 = new Student('Petr', 3);
const student2 = new Student('Ema', 1);

// Volání metod
console.log(student1.představSe()); // "Ahoj, jsem Petr a chodím do 3. ročníku."
student1.pridatBody(15);            // "Petr má nyní 15 bodů."

```

---

### 🌳 DOM Manipulace & Události

#### Výběr prvků z DOMu

```javascript
// Výběr jednoho (prvního odpovídajícího) prvku
const mainHeader = document.querySelector('.main-title');
const submitBtn = document.querySelector('#submit-button');

// Výběr všech odpovídajících prvků (vrací NodeList)
const allCards = document.querySelectorAll('.card');

```

#### Změna obsahu

```javascript
const cardTitle = document.querySelector('.card-title');

// textContent – Bezpečný zápis čistého textu (doporučeno pro přístupnost i bezpečnost)
cardTitle.textContent = 'Nový název karty';

// innerHTML – Vkládání HTML struktury (pozor na XSS z neověřených zdrojů)
const cardBody = document.querySelector('.card-body');
cardBody.innerHTML = '<p>Tohle je <strong>nový</strong> text v odstavci.</p>';

```

#### Reakce na události (Events)

```javascript
const button = document.querySelector('.btn-action');

// Připojení posluchače události (event listener)
button.addEventListener('click', (event) => {
  // Událostní objekt (e / event)
  console.log('Kliknuto na prvek:', event.target);

  // Propojení s OOP / změnou DOMu
  const card = event.target.closest('.card');
  if (card) {
    card.classList.toggle('active');
  }
});

```