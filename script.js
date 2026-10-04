/*
    Copyright (C) 2026 Jakub Březa

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://gnu.org>.
*/

/**
 * ==============================================================================
 * QuizApp v1 - Produkční logika (Referenční řešení)
 * Téma: Objektově orientované programování (OOP) v ES6 & DOM Manipulace
 * ==============================================================================
 */

/**
 * Třída reprezentující jednu kvízovou otázku.
 * Zapouzdřuje data (text otázky, možnosti, index správné odpovědi) i chování (vykreslení, validace).
 */
class Question {
    /**
     * Konstruktor pro inicializaci instance kvízové otázky.
     * @param {string} text - Znění samotné otázky.
     * @param {string[]} options - Pole 4 možných odpovědí.
     * @param {number} correctIndex - Index správné odpovědi v poli (0 až 3).
     */
    constructor(text, options, correctIndex) {
        this.text = text;
        this.options = options;
        this.correctIndex = correctIndex;
    }

    /**
     * Vykreslí data otázky do připravené HTML šablony v DOMu.
     * Používá bezpečné vlastnosti .textContent pro zabránění XSS zranitelnostem.
     */
    displayQuestion() {
        // 1. Nalezení textového elementu pro otázku
        const questionTextElement = document.querySelector('#question-text');
        if (questionTextElement) {
            questionTextElement.textContent = this.text;
        }

        // 2. Nalezení všech tlačítek odpovědí
        const answerButtons = document.querySelectorAll('.answer-btn');

        // 3. Projití možností a jejich vložení do jednotlivých tlačítek
        answerButtons.forEach((button, index) => {
            if (this.options[index] !== undefined) {
                // Hledáme textový popisek uvnitř tlačítka
                const optionTextElement = button.querySelector('.option-text');
                if (optionTextElement) {
                    optionTextElement.textContent = this.options[index];
                } else {
                    button.textContent = this.options[index];
                }
            }
        });
    }

    /**
     * Zkontroluje, zda uživatelem zvolený index odpovídá správné odpovědi.
     * @param {number} selectedIndex - Index zvolené odpovědi (0-3).
     * @returns {boolean} True, pokud je volba správná, jinak False.
     */
    isCorrect(selectedIndex) {
        return selectedIndex === this.correctIndex;
    }
}

/**
 * Inicializace aplikace a propojení DOM událostí.
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 QuizApp v1 spuštěna v referenčním režimu.');

    // 1. Vytvoření testovací instance třídy Question (OOP)
    const sampleQuestion = new Question(
        'Která CSS vlastnost slouží k aktivaci flexibilního boxového modelu?',
        ['display: flex;', 'position: absolute;', 'float: left;', 'grid-template: auto;'],
        0 // Správná odpověď je 'display: flex;' (index 0)
    );

    // 2. Vykreslení otázky do HTML rozhraní
    sampleQuestion.displayQuestion();

    // 3. Výběr všech tlačítek odpovědí v DOM
    const answerButtons = document.querySelectorAll('.answer-btn');

    // 4. Připojení posluchače události (Event Listener) na každé tlačítko
    answerButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // Získání indexu kliknutého tlačítka z atributu data-index
            const clickedIndex = parseInt(button.dataset.index, 10);
            const selectedText = sampleQuestion.options[clickedIndex];

            // Vyhodnocení pomocí metody třídy Question
            const isAnswerCorrect = sampleQuestion.isCorrect(clickedIndex);

            if (isAnswerCorrect) {
                console.log(`%c✅ SPRÁVNĚ! Vybrali jste možnost [${clickedIndex}]: "${selectedText}"`, 'color: #22c55e; font-weight: bold; font-size: 1.1em;');
            } else {
                const correctText = sampleQuestion.options[sampleQuestion.correctIndex];
                console.log(`%c❌ ŠPATNĚ! Vybrali jste možnost [${clickedIndex}]: "${selectedText}". Správná odpověď byla: "${correctText}"`, 'color: #ef4444; font-weight: bold; font-size: 1.1em;');
            }
        });
    });
});
