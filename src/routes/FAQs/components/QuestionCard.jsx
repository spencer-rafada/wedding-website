/* eslint-disable react/prop-types */
import React from 'react';

export default function QuestionCard({ data }) {
  return (
    <div className={`faqQuestionCard`}>
      <h1>{data.question}</h1>
      <p>{data.answer}</p>
    </div>
  );
}
