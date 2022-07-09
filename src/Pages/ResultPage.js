import React from 'react';
import { useContext } from 'react';
import { PartsContext } from '../store/PartsContext';
import { useNavigate } from 'react-router-dom';

function ResultPage() {
  const { choosenParts, reset } = useContext(PartsContext);
  const navigate = useNavigate();
  function handleClick() {
    reset();
    navigate('/');
  }
  return (
    <main className="w-full h-full flex flex-col items-center mt-20">
      <h1 className="text-4xl font-semibold mb-10 text-purple-800">
        Your Computer is built with the following parts.
      </h1>
      <section className="w-1/3">
        {choosenParts.map((part) => (
          <div key={part.id} className="border mb-1 py-3 px-5 text-center">
            {part.title}
          </div>
        ))}
      </section>
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 mt-10 px-3 py-1 rounded-sm text-white"
        >
          Back to Homepage
        </button>
      </div>
    </main>
  );
}

export default ResultPage;
