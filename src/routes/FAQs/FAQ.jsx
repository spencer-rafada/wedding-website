import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import QuestionCard from './components/QuestionCard'

export default function FAQ() {
  return (
    <div className="faqContainer">
      <div className="faqHeader">
        <FaQuestion />
        <h1>FAQ</h1>
      </div>
      {/* FAQs from our side */}
      {/* Map QuestionCard */}
      <QuestionCard />
      {/* Questions from others */}
      {/* Map APPROVED QuestionCard */}
    </div>
  );
}
