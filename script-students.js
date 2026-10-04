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
 * QuizApp v1 - Pracovní JavaScript pro studenty (Studentská verze)
 * Úkoly: Doplnit ES6 třídu Question, DOM zápis a vyhodnocení odpovědi
 * ==============================================================================
 */

/**
 * Třída reprezentující jednu kvízovou otázku.
 */
class Question {
    /**
     * Konstruktor pro inicializaci instance kvízové otázky.
     * @param {string} text - Znění samotné otázky.
     * @param {string[]} options - Pole 4 možných odpovědí.
     * @param {number} correctIndex - Index správné odpovědi v poli (0 až 3).
     */
    constructor(text, options, correctIndex) {
        // TODO 1: Ulož předané parametry (text, options, correctIndex) do vlastností objektu (this).
        // NÁPOVĚDA: Použij klíčové slovo this pro přiřazení: this.text = text;
        // PŘÍKLAD:
        // this.text = text;
        // this.options = options;
        // this.correctIndex = correctIndex;

        // ZDE NAPIŠ SVŮJ KÓD PRO TODO 1:
    }

    /**
     * Vykreslí data otázky do připravené HTML šablony v DOMu.
     */
    displayQuestion() {
        // TODO 2: Vyber element otázky (#question-text) a nastav jeho textový obsah na text otázky (this.text).
        // NÁPOVĚDA: document.querySelector('#question-text'), poté element.textContent = this.text;
        // PŘÍKLAD:
        // const questionEl = document.querySelector('#question-text');
        // if (questionEl) questionEl.textContent = this.text;

        // ZDE NAPIŠ SVŮJ KÓD PRO TODO 2:


        // ----------------------------------------------------------------------
        // Následující výběr tlačítek je připraven pro tebe:
        const answerButtons = document.querySelectorAll('.answer-btn');

        // TODO 3: Projdi pole tlačítek (answerButtons) a do každého tlačítka vlož text odpovídající možnosti (this.options[index]).
        // NÁPOVĚDA: Použij cyklus forEach((button, index) => { ... }) a najdi uvnitř tlačítka element s třídou .option-text
        // PŘÍKLAD:
        // answerButtons.forEach((button, index) => {
        //     const optionTextEl = button.querySelector('.option-text');
        //     if (optionTextEl && this.options[index] !== undefined) {
        //         optionTextEl.textContent = this.options[index];
        //     }
        // });

        // ZDE NAPIŠ SVŮJ KÓD PRO TODO 3:
    }

    /**
     * Zkontroluje, zda uživatelem zvolený index odpovídá správné odpovědi.
     * @param {number} selectedIndex - Index zvolené odpovědi (0-3).
     * @returns {boolean} True, pokud je volba správná, jinak False.
     */
    isCorrect(selectedIndex) {
        // TODO 4: Porovnej předaný selectedIndex s uloženým indexem správné odpovědi (this.correctIndex) a vrať boolean výsledek.
        // NÁPOVĚDA: Použij operátor přísné rovnosti (===)
        // PŘÍKLAD: return selectedIndex === this.correctIndex;

        // ZDE NAPIŠ SVŮJ KÓD PRO TODO 4:
        return false; // Nahraď tento výchozí návrat svým kódem
    }
}

/**
 * Inicializace aplikace a propojení DOM událostí (UI Plumbing ponecháno funkční).
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('📝 QuizApp v1 spuštěna ve studentském režimu. Doplňte TODO úkoly.');

    // TODO 5: Vytvoř novou instanci třídy Question s vlastní otázkou a 4 možnostmi a zavolej její metodu displayQuestion().
    // NÁPOVĚDA:
    // const myQuestion = new Question('Jaké je hlavní město ČR?', ['Brno', 'Praha', 'Ostrava', 'Plzeň'], 1);
    // myQuestion.displayQuestion();

    // ZDE NAPIŠ SVŮJ KÓD PRO TODO 5:
    let currentQuestion = null; // Nahraď null instancí Question


    // --------------------------------------------------------------------------
    // Následující kód obsluhuje kliknutí na tlačítka a výpis do konzole.
    // Nemusíš ho měnit – jakmile splníš TODO 1-5, začne okamžitě fungovat!
    // --------------------------------------------------------------------------
    const answerButtons = document.querySelectorAll('.answer-btn');

    answerButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (!currentQuestion) {
                console.warn('⚠️ Otázka zatím nebyla inicializována. Dokonči nejprve TODO 5.');
                return;
            }

            const clickedIndex = parseInt(button.dataset.index, 10);
            const selectedText = currentQuestion.options ? currentQuestion.options[clickedIndex] : `Možnost ${clickedIndex + 1}`;
            const isAnswerCorrect = currentQuestion.isCorrect(clickedIndex);

            if (isAnswerCorrect) {
                console.log(`%c✅ SPRÁVNĚ! Vybrali jste možnost [${clickedIndex}]: "${selectedText}"`, 'color: #22c55e; font-weight: bold; font-size: 1.1em;');
            } else {
                const correctText = currentQuestion.options ? currentQuestion.options[currentQuestion.correctIndex] : 'správná volba';
                console.log(`%c❌ ŠPATNĚ! Vybrali jste možnost [${clickedIndex}]: "${selectedText}". Správná odpověď byla: "${correctText}"`, 'color: #ef4444; font-weight: bold; font-size: 1.1em;');
            }
        });
    });
});
