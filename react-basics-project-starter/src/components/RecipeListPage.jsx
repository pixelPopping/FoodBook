import React, { useState } from 'react';
import { Box, Heading, Input, Stack, Grid } from '@chakra-ui/react';
import Card from './Card'; // Adjust the path as needed
import { data } from '../utils/data'; // Adjust the path as needed

const RecipeListPage = ({ onClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [healthLabel, setHealthLabel] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleHealthLabelChange = (event) => {
    setHealthLabel(event.target.value);
  };

  if (!data || !data.hits) {
    return <Box>Error: No recipe data found</Box>;
  }

  const filteredRecipes = data.hits.filter((hit) => {
    const { label, healthLabels } = hit.recipe;
    const matchesSearchTerm = label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesHealthLabel =
      healthLabel === '' ||
      healthLabels
        .map((label) => label.toLowerCase())
        .includes(healthLabel.toLowerCase());
    return matchesSearchTerm && matchesHealthLabel;
  });

  return (
    <Box maxW="800px" mx="auto" p={4} bg="gray.50" borderRadius="md" boxShadow="md">
      <Heading as="h1" mb={4} fontSize="2xl" textAlign="center" color="blue.600">
        FoodBook. 
      </Heading>
      <Stack spacing={4} mb={6}>
        <Input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchTermChange}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="full"
          _focus={{ borderColor: 'blue.400', boxShadow: 'outline' }}
          p={4}
        />
        <Input
          type="text"
          placeholder="Filter by health label"
          value={healthLabel}
          onChange={handleHealthLabelChange}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="full"
          _focus={{ borderColor: 'blue.400', boxShadow: 'outline' }}
          p={4}
        />
      </Stack>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        {filteredRecipes.map((hit, index) => (
          <Box key={index} onClick={() => onClick(hit.recipe)} cursor="pointer">
            <Card
              label={hit.recipe.label}
              image={hit.recipe.image}
              dietLabels={hit.recipe.dietLabels}
              healthLabels={hit.recipe.healthLabels}
              cautions={hit.recipe.cautions}
              mealType={hit.recipe.mealType}
              dishType={hit.recipe.dishType}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default RecipeListPage;
