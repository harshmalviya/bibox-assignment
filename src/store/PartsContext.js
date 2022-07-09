import { createContext, useState } from 'react';

export const PartsContext = createContext({
  availableParts: [],
  choosenParts: [],
  addToAvailableParts: () => {},
  addToChoosenParts: () => {},
  reset: () => {}
});

export const PartsContextProvider = ({ children }) => {
  const [availableParts, setAvailableParts] = useState([]);
  const [choosenParts, setChoosenParts] = useState([]);

  const addToAvailableParts = (part) => {
    setAvailableParts([...availableParts, part]);
  };

  const addToChoosenParts = (part) => {
    let newAvailableParts = availableParts.filter((p) => p.id !== +part.id);
    setAvailableParts(newAvailableParts);
    setChoosenParts([...choosenParts, part]);
  };

  function reset() {
    setAvailableParts([]);
    setChoosenParts([]);
  }

  return (
    <PartsContext.Provider
      value={{
        choosenParts,
        availableParts,
        addToChoosenParts,
        addToAvailableParts,
        reset
      }}
    >
      {children}
    </PartsContext.Provider>
  );
};
