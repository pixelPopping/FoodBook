import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa'; 

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <InputGroup size="md">
      <InputLeftElement
        pointerEvents="none"
        children={<FaSearch color="gray.300" />}
        ml={2}
      />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        bg="white"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="full"
        _focus={{ borderColor: 'blue.400', boxShadow: 'outline' }}
        pl="40px"
      />
    </InputGroup>
  );
};

export default TextInput;
