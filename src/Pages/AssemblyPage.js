import React from 'react';
import { useContext } from 'react';
import { PartsContext } from '../store/PartsContext';
import { useNavigate } from 'react-router-dom';

function AssemblyPage() {
  const navigate = useNavigate();
  const { availableParts, choosenParts, addToChoosenParts } =
    useContext(PartsContext);
  function dropHandler(e) {
    const data = JSON.parse(e.dataTransfer.getData('text'));
    addToChoosenParts(data);
  }
  function handleOnDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add('bg-blue-500');
    e.target.classList.add('text-white');

    e.dataTransfer.setData(
      'text',
      JSON.stringify({
        id: e.target.getAttribute('data-key'),
        title: e.target.innerText
      })
    );
  }
  function handleOnDragOver(e) {
    e.preventDefault();
  }
  function handleClick() {
    navigate('/result');
  }
  return (
    <main className="w-full h-full flex flex-col items-center mt-20">
      <h1 className="text-4xl font-semibold mb-10 text-purple-800">
        Drag and Drop to assemble your Computer.
      </h1>
      <div className="flex gap-8 w-full px-10">
        <div className="w-1/3">
          <h1 className="text-3xl font-semibold mb-2">Available Parts</h1>
          {availableParts.map((part) => (
            <div
              className="border mb-1 py-3 px-5"
              draggable
              onDragStart={(e) => handleOnDragStart(e)}
              key={part.id}
              data-key={part.id}
            >
              {part.title}
            </div>
          ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl font-semibold mb-2">Choosen Parts</h1>
          <div
            className="w-full"
            onDrop={(e) => dropHandler(e)}
            onDragOver={(e) => handleOnDragOver(e)}
          >
            <div className="min-h-[400px] w-full">
              {choosenParts.map((part) => (
                <div key={part.id} className="border mb-1 py-3 px-5">
                  {part.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 mt-10 px-3 py-1 rounded-sm text-white"
        >
          Finish Assembly
        </button>
      </div>
    </main>
  );
}

export default AssemblyPage;
