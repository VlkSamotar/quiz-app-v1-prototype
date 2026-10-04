# QuizApp v1: Prototyp a Základní Rozhraní

## 1. Cíl aplikace a fáze vývoje
Tato verze představuje **1. fázi (vyhovující prototyp)** vývoje modulární kvízové webové aplikace. 

Cílem je vytvořit statickou, ale plně funkční kostru jedné otázky s více možnostmi výběru. Aplikace klade důraz na **principy přístupnosti (A11y)** – vysoký kontrast, přehledné rozvržení prvků, velká tlačítka a dostatečně čitelný text tak, aby byla přívětivá i pro uživatele se zrakovým omezením nebo mladší děti.

---

## 2. Pohled uživatele (User Experience)
1. **Otevření aplikace:** Uživatel vidí v horní části přehledný záhlaví s názvem aplikace.
2. **Karta otázky:** Uprostřed obrazovky je zobrazen jasně čitelný box s textem otázky (nebo matematickým výrazem).
3. **Možnosti odpovědí:** Pod otázkou se nachází mřížka/karta 4 velkých, kontrastních tlačítek s možnostmi odpovědí. Při najetí myší (hover) tlačítka jemně mění stav.
4. **Interakce:** Po kliknutí na tlačítko odpovědi se informace o zvolené možnosti předá zpracovatelské logice v JavaScriptu a výsledek (zda jde o správnou či špatnou volbu) se zapiše do vývojářské konzole prohlížeče.

---

## 3. Architektura a souborová struktura

```text
quiz-app-v1-prototype/
├── index.html            # Sémantický HTML5 dokument
├── style.css             # Produkční CSS styly (Flexbox, přístupnost)
├── styles-students.css   # Pracovní verze stylů s TODO komentáři
├── script.js             # Produkční JS logika (OOP třída Question, DOM)
├── script-students.js    # Pracovní verze JS kódu s nápovědou pro studenty
└── README.md             # Dokumentace, architektura a UML diagram (Mermaid)
```

---

## 4. Detailní specifikace komponent a technologií

### A. HTML5 (Struktura rozhraní)
* **Sémantické prvky:**
  * `<header>`: Záhlaví aplikace s titulkem.
  * `<main>`: Hlavní kontejner aplikace.
  * `<section id="quiz-container">`: Kontejner pro zobrazovaný kvíz.
  * `<article id="question-card">`: Karta obsahující text otázky v nadpisu `<h2>`.
  * `<div id="answers-grid">`: Mřížka obsahující 4 tlačítka `<button class="answer-btn">`.

### B. CSS3 (Layout a Přístupnost)
* **Layout:** Použití **Flexboxu** pro vertikální i horizontální centrovaní hlavního obsahu (`display: flex`, `flex-direction: column`, `align-items: center`).
* **Přístupnost (A11y):**
  * Tmavé pozadí s vysoce kontrastními světlými kartami nebo tmavý text na světlém pozadí s dodržením pomeru kontrastu min. 4.5:1.
  * Minimální velikost písma `1.2rem` až `1.8rem`.
  * Import přístupného bezpatkového písma z Google Fonts (např. *Lexend* nebo *Roboto*).
* **Interaktivní stavy:** Definice tlačítek odpovědí s `transition`, `:hover` (změna barvy/zvětšení) a `:active` (stisknutí).

### C. JavaScript ES6+ (Objektově orientovaná logika)
* **Třída `Question` (OOP Paradigm):**
  * **Atributy konstruktoru (`constructor`):**
    * `this.text` (String): Text samotné otázky.
    * `this.options` (Array of Strings/Numbers): Pole 4 možných odpovědí.
    * `this.correctIndex` (Number): Index správné odpovědi v poli (0–3).
  * **Metoda `render()` / `displayQuestion()`:**
    * Vybere HTML prvky v DOM pomocí `document.querySelector()`.
    * Zapíše `this.text` do elementu otázky přes `.textContent`.
    * Projde pole `this.options` a naplní jednotlivá tlačítka textem odpovědí.
* **Správa událostí (Event Listeners):**
  * Připojení `click` listenerů na tlačítka odpovědí přes `querySelectorAll` a cyklus `forEach`.
  * Vyhodnocení kliknutého indexu vůči `correctIndex` a výpis výsledku přes `console.log()`.

---

## 5. Akceptační kritéria pro vývojáře
- [ ] Stránka je sémanticky správně strukturovaná bez chyb v HTML5 validátoru.
- [ ] Všechna tlačítka odpovídají zásadám prístupnosti (velká klikatelná plocha, vysoký kontrast).
- [ ] V JavaScriptu je definována třída `Question` obsahující konstruktor a metodu pro zobrazení.
- [ ] Aplikace vytvoří testovací instanci třídy `Question` a vykreslí ji do HTML.
- [ ] Kliknutí na libovolné tlačítko v konzoli správně identifikuje, zda byla zvolena správná či špatná odpověď.
