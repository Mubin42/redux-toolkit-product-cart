import { Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const ProductCard = ({ name, price }) => {
  return (
    <Stack
      mt='64px'
      position='relative'
      w='250px'
      h='300px'
      borderRadius='30px'
      bgColor='#FFF'
      boxShadow='2px 4px 4px 0px rgba(208, 189, 162, 0.30)'
      py='24px'
      px='22px'
      cursor='pointer'
    >
      <Image
        mx='auto'
        h='150px'
        w='150px'
        borderRadius='50%'
        border='1px solid black'
        src='item/item-photo.jpg'
        objectFit='cover'
        alt={name && name}
      />
      <Text fontWeight='500' fontSize='22px'>
        {name && name}
      </Text>
      <Text>{price && price}</Text>
    </Stack>
  );
};

export default ProductCard;
