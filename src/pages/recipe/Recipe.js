import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipes, setRecipes] = useState(null);
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    // collect data from a single document
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if(doc.exists) {
        setIsPending(false)
        setRecipes(doc.data())
      } else {
        setIsPending(false)
        setError('Could not find recipe')
      }
    })
  }, [id])


  return (
    <div className="recipe">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {recipes && (<div className={`recipe-card ${mode}`}>
        <h2>{recipes.title}</h2>
        <p>{recipes.cookingTime}</p>
        <ul>
          {recipes.ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}
        </ul>
        <p>{recipes.method}</p>

      </div>)}
    </div>
  )
}
