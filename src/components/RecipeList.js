import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import deleteIcon from '../assets/deleteIcon.svg'
// styles
import './RecipeList.css';
import { projectFirestore } from '../firebase/config';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme()
  
  if (recipes.length === 0) {
    return <div className="error">There are no recipes.</div>
  }

  const handleClick = (id) => {
    // delete a document from firebase
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className="recipe-list">
        {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime}</p>
          <Link to={`/recipes/${recipe.id}`}>START</Link>
          <img
            className="delete"
            src={deleteIcon}
            onClick = {() => handleClick(recipe.id)} />
        </div>
      ))}
    </div>
  )
}
