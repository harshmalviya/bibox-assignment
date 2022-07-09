import { Routes, Route, Navigate } from 'react-router-dom';
import AssemblyPage from './Pages/AssemblyPage';
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';
import SelectParts from './Pages/SelectParts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/select-parts" element={<SelectParts />} />
      <Route path="/assembly-page" element={<AssemblyPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
