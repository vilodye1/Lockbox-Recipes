import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
// styles
import './Search.css'

//components
import RecipeList from '../../components/RecipeList';

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, isPending, data } = useFetch(url);

  const { mode } = useTheme();
  
  return (
    <div className={`search ${mode}`}>
      <h2>Recipes including "{query}":</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
