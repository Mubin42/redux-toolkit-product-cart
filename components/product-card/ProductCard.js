import { addToCart } from '@/store/slices/cartSlice';
import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';

const ProductCard = ({ id, name, note, price }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        note: note,
      })
    );
  };

  return (
    <Stack
      mt='64px'
      position='relative'
      w='250px'
      h='400px'
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
      <Text fontSize='16px'>
        Note: This is a dummy product. Please do not buy it.
      </Text>
      <Text fontWeight='500' fontSize='22px'>
        ${price && price}
      </Text>
      <Flex w='full' justify='flex-end'>
        <Button size='sm' colorScheme='blue' onClick={handleAddItem}>
          Add
        </Button>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
