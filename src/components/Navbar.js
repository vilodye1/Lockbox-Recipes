import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
// styles
import './Navbar.css';

// components
import Searchbar from './Searchbar';

export default function Navbar() {
  const { color, changeColor, mode, changeMode } = useTheme();
  return (
    <div className="navbar" style={{ background:color}}>
        <nav>
            <Link to="/" className="brand">
                <h1>Lockbox Recipes</h1>
            </Link>
            <div>
              <Searchbar />
              <Link to="/create">Create Recipe</Link>
            </div>
            
        </nav>
    </div>
  )
}