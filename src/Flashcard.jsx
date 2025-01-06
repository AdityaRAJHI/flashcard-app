import React from 'react';

    function Flashcard({ card, showAnswer, onToggleAnswer }) {
      return (
        <div className={`flashcard ${showAnswer ? 'flipped' : ''}`} onClick={onToggleAnswer}>
          <div className="flashcard-content">
            {showAnswer ? card.answer : card.question}
          </div>
        </div>
      );
    }

    export default Flashcard;
