import React from 'react';
import { useRef } from 'react';
import { PartsContext } from '../store/PartsContext';

function Card({ data }) {
  const buttonRef = useRef();
  const ctx = React.useContext(PartsContext);
  function handleButtonClick() {
    ctx.addToAvailableParts({ id: data.id, title: data.title });
    buttonRef.current.classList.add('bg-yellow-500');
    buttonRef.current.classList.remove('bg-teal-500');
    buttonRef.current.innerHTML = 'Added';
  }
  return (
    <article
      className="p-4 bg-white border shadow-lg w-80 rounded-md"
      style={{ flex: '0 0 auto' }}
    >
      <img
        src={data.image}
        alt=""
        className="w-full object-contain h-40 mb-4"
      />
      <div className="px-3">
        <h1 className="text-xl font-bold mb-2">{data.title}</h1>
        <p>{data.description}</p>
        <button
          ref={buttonRef}
          className={`${data.button.buttonColor} my-3 px-3 py-1 rounded-sm text-white`}
          onClick={
            data.button.onClick ? data.button.onClick : handleButtonClick
          }
        >
          {data.button.text}
        </button>
      </div>
    </article>
  );
}

export default Card;
