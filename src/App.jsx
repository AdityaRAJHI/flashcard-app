import React, { useState } from 'react';
    import Flashcard from './Flashcard';
    import ProgressBar from './ProgressBar';

    const flashcards = [
      {
        question: 'What is the difference between var, let, and const?',
        answer:
          'In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.',
      },
      {
        question: 'What is the purpose of the useEffect hook in React?',
        answer:
          'The useEffect hook is used for performing side effects in functional components, such as data fetching, DOM manipulation, or setting up subscriptions.',
      },
      {
        question: 'Explain the concept of closures in JavaScript.',
        answer:
          'A closure is a function that has access to its outer function’s scope, even after the outer function has returned. This allows the inner function to maintain access to variables from the outer scope.',
      },
      {
        question: 'What is JSX?',
        answer:
          'JSX is a syntax extension to JavaScript that allows you to write HTML-like code within your JavaScript files. It is commonly used in React to describe the structure of the UI.',
      },
      {
        question: 'What are React props?',
        answer:
          'Props are a way to pass data from a parent component to a child component. They are read-only and allow components to be reusable and dynamic.',
      },
      {
        question: 'What is the virtual DOM in React?',
        answer:
          'The virtual DOM is a lightweight copy of the actual DOM. React uses it to efficiently update the UI by comparing the virtual DOM with the previous version and only updating the necessary parts of the actual DOM.',
      },
      {
        question: 'What is the purpose of the useState hook in React?',
        answer:
          'The useState hook is used to add state to functional components. It returns a state variable and a function to update that variable, triggering a re-render of the component.',
      },
      {
        question: 'What is the difference between controlled and uncontrolled components in React?',
        answer:
          'Controlled components have their state managed by React, while uncontrolled components have their state managed by the DOM. Controlled components are generally preferred for better control and predictability.',
      },
      {
        question: 'What is the purpose of the key prop in React lists?',
        answer:
          'The key prop is used to give React a stable identity for each item in a list. This helps React efficiently update the list when items are added, removed, or reordered.',
      },
      {
        question: 'What is the purpose of the React Router library?',
        answer:
          'React Router is a library that provides routing functionality for React applications. It allows you to navigate between different views or pages within your application.',
      },
    ];

    function App() {
      const [currentCardIndex, setCurrentCardIndex] = useState(0);
      const [showAnswer, setShowAnswer] = useState(false);

      const handleNextCard = () => {
        setShowAnswer(false);
        setCurrentCardIndex((prevIndex) =>
          prevIndex < flashcards.length - 1 ? prevIndex + 1 : prevIndex,
        );
      };

      const handlePrevCard = () => {
        setShowAnswer(false);
        setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      };

      const handleToggleAnswer = () => {
        setShowAnswer((prevShowAnswer) => !prevShowAnswer);
      };

      const progress = ((currentCardIndex + 1) / flashcards.length) * 100;

      return (
        <div className="flashcard-container">
          <ProgressBar progress={progress} current={currentCardIndex + 1} total={flashcards.length} />
          <Flashcard
            card={flashcards[currentCardIndex]}
            showAnswer={showAnswer}
            onToggleAnswer={handleToggleAnswer}
          />
          <div className="navigation">
            <button onClick={handlePrevCard} disabled={currentCardIndex === 0}>
              Previous
            </button>
            <button onClick={handleToggleAnswer}>
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
            <button
              onClick={handleNextCard}
              disabled={currentCardIndex === flashcards.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      );
    }

    export default App;
