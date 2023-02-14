import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaQuestion } from 'react-icons/fa';
import QuestionCard from './components/QuestionCard.jsx';
import './styles/FAQ.css';

export default function FAQ() {
  const fetchQuestions = async () => {
    const result = await axios.get('/data/questions.json');
    return await result.data;
  };

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  return (
    <div className="faqContainer">
      <div className="faqHeader">
        <FaQuestion className="icon" />
        <h1>FAQ</h1>
      </div>
      <div className="faqSubmitQuestion">
        <a href="mailto:hanaandspencer0721@gmail.com">Click to Send a Question</a>
      </div>
      {/* FAQs from our side */}
      {/* Map QuestionCard */}
      <div className="faqGrid">
        {questions.map((item, index) => {
          return item.answer !== '' ? <QuestionCard data={item} key={index} /> : null;
        })}
      </div>
      {/* Questions from others */}
      {/* Map APPROVED QuestionCard */}
    </div>
  );
}
