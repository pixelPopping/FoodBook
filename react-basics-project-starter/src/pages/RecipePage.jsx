import React from 'react';
import { Box, Image, Text, Heading, Stack, Tag, Button } from '@chakra-ui/react';

const RecipePage = ({ selectedRecipe, clickFn }) => {
  const {
    label,
    image,
    healthLabels,
    dietLabels,
    cautions,
    ingredientLines,
    mealType,
    dishType,
    servings,
    totalNutrients,
  } = selectedRecipe;

  
  const displayedNutrients = {
    ENERC_KCAL: totalNutrients.ENERC_KCAL,
    PROCNT: totalNutrients.PROCNT,
    FAT: totalNutrients.FAT,
    CHOCDF: totalNutrients.CHOCDF,
    CHOLE: totalNutrients.CHOLE,
    NA: totalNutrients.NA,
  };

  return (
    <Box maxW="600px" mx="auto" p={4} bg="white" borderRadius="md" boxShadow="md">
      <Button onClick={clickFn} mb={4} colorScheme="blue">
        Back to list
      </Button>
      <Image src={image} alt={label} borderRadius="md" mb={4} />
      <Heading as="h2" size="lg" mb={2}>{label}</Heading>

      {/* Meal Type */}
      <Text fontSize="md" fontWeight="bold" mb={2}>Meal Type:</Text>
      <Text fontSize="md" mb={2}>{mealType}</Text>

      {/* Dish Type */}
      <Text fontSize="md" fontWeight="bold" mb={2}>Dish Type:</Text>
      <Text fontSize="md" mb={2}>{dishType}</Text>

      {/* Servings */}
      <Text fontSize="md" fontWeight="bold" mb={2}>Servings:</Text>
      <Text fontSize="md" mb={4}>{servings}</Text>

      {/* Ingredients */}
      <Text fontSize="md" fontWeight="bold" mb={2}>Ingredients:</Text>
      <Stack spacing={1} mb={4}>
        {ingredientLines.map((ingredient, index) => (
          <Text key={index} fontSize="md">{ingredient}</Text>
        ))}
      </Stack>

      {/* Cautions */}
      <Text fontSize="md" fontWeight="bold" mb={2}>Cautions:</Text>
      <Stack spacing={1} mb={4}>
        {cautions.map((caution, index) => (
          <Tag key={index} colorScheme="red" variant="subtle">
            {caution}
          </Tag>
        ))}
      </Stack>

      {/* Nutrients */}
      <Text fontSize="md" fontWeight="bold" mb={2}>Nutrients:</Text>
      <Stack spacing={1} mb={4}>
        {Object.entries(displayedNutrients).map(([key, nutrient], index) => (
          <Tag key={index} colorScheme="purple" variant="subtle" mb={2}>
            {`${key}: ${nutrient.quantity} ${nutrient.unit}`}
          </Tag>
        ))}
      </Stack>

      {/* Health Labels */}
      <Text fontSize="md" fontWeight="bold" mb={2}>Health Labels:</Text>
      <Stack direction="row" mb={2} flexWrap="wrap">
        {healthLabels.map((healthLabel, index) => (
          <Tag key={index} colorScheme="blue" mr={2} mb={2} variant="subtle">
            {healthLabel}
          </Tag>
        ))}
      </Stack>

      {/* Diet Labels */}
      <Text fontSize="md" fontWeight="bold" mb={2}>Diet Labels:</Text>
      <Stack direction="row" mb={4} flexWrap="wrap">
        {dietLabels.map((dietLabel, index) => (
          <Tag key={index} colorScheme="green" mr={2} mb={2} variant="subtle">
            {dietLabel}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
};

export default RecipePage;

