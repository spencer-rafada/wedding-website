import React, {useState} from 'react';
import { FaQuestion } from 'react-icons/fa';
import QuestionCard from './components/QuestionCard';

export default function FAQ() {
  const getData = async () => {
    const result = await fetch('./data/questions.json');
    const data = await result.json();
    return data;
  };

  const [data, setData] = useState([]);

  useEffect()

  return (
    <div className="faqContainer">
      <div className="faqHeader" onClick={getData}>
        <FaQuestion />
        <h1>FAQ</h1>
      </div>
      {/* FAQs from our side */}
      {/* Map QuestionCard */}
      {data.map((item) => {
        <QuestionCard data={item} />
      })}
      {/* Questions from others */}
      {/* Map APPROVED QuestionCard */}
    </div>
  );
}
