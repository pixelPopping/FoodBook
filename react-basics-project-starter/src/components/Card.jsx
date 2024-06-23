import React from 'react';
import { Box, Image, Text, Stack, Tag } from '@chakra-ui/react';

const Card = ({ label, image, healthLabels, cautions, mealType, dishType, onClick }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md" cursor="pointer" onClick={onClick}>
      <Image src={image} alt={label} borderRadius="md" mb={4} />
      <Text fontSize="lg" fontWeight="bold" mb={2}>{label}</Text>
      <Stack direction="row" spacing={2} mb={2}>
        {healthLabels && healthLabels.includes('Vegan') && <Tag colorScheme="green">Vegan</Tag>}
        {healthLabels && healthLabels.includes('Vegetarian') && <Tag colorScheme="teal">Vegetarian</Tag>}
        {cautions && cautions.length > 0 && (
          cautions.map((caution, index) => (
            <Tag key={index} colorScheme="red">{caution}</Tag>
          ))
        )}
      </Stack>
      <Text fontSize="sm" mb={2}>{mealType} - {dishType}</Text>
    </Box>
  );
};

export default Card;












