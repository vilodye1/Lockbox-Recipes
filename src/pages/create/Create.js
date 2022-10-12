import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';

// styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = { title, ingredients, method, cookingTime: cookingTime + ' min' };

    try {
      // adding a new document to firebase
      await projectFirestore.collection('recipes').add(doc)
      navigate('/')
    } catch(err) {
      console.log(err)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  }

  const { mode } = useTheme();
  
  return (
    <div className="create">
      <h2 className={`page-title ${mode}`}>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>

        {/* Recipe Title */}
        <label>
          <span className={`${mode}`}>Recipe title:</span>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        {/* Recipe Ingredients */}
        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input 
            type="text" 
            onChange={(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref = {ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>+</button>
          </div>
        </label>
          <p className="current-ing">Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
        
        {/* Recipe Method */}
        <label>
          <span>Recipe method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        {/* Cooking Time */}
        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className={`button ${mode}`}>submit</button>
      </form>
    </div>
  )
}
