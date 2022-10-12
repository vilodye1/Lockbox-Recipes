import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useTheme } from './hooks/useTheme';
// components
  import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector';

// pages
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'


function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/redirect" element={<Navigate to= "/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
