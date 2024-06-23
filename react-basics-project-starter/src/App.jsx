import React, { useState } from 'react';
import RecipePage from './pages/RecipePage'; 
import RecipeListPage from './components/RecipeListPage'; 
import { ChakraProvider, Box } from '@chakra-ui/react';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh" p={4}>
        {selectedRecipe ? (
          <RecipePage selectedRecipe={selectedRecipe} clickFn={handleBackClick} />
        ) : (
          <RecipeListPage onClick={handleRecipeSelect} />
        )}
      </Box>
    </ChakraProvider>
  );
};

export default App;






























