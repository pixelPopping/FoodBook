import React, { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { RecipeListPage } from './components/RecipeListPage';


export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage selectedRecipe={selectedRecipe} clickFn={handleBackClick} />
      ) : (
        <RecipeListPage onClick={handleRecipeSelect} />
      )}
    </div>
  );
};







