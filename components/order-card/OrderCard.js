import {
  addToCart,
  deleteOneFromTestCart,
  deleteSingleItemFromTestCart,
} from '@/store/slices/cartSlice';
import {
  Button,
  Divider,
  Flex,
  FlexProps,
  IconButton,
  IconButtonProps,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const OrderCard = ({ index, name, price, quantity, note, ...props }) => {
  const dispatch = useDispatch();
  const handleAddItem = ({}) => {
    dispatch(addToCart({ id: index, name: name, price: price, note: note }));
  };

  const handleDeleteItem = () => {
    dispatch(deleteOneFromTestCart(index));
  };

  const handleDeleteSingleItem = () => {
    dispatch(deleteSingleItemFromTestCart(index));
  };
  return (
    <>
      <Flex w='full' my='12px' justify='space-between' align='center'>
        <Image
          mx='auto'
          h='50px'
          w='50px'
          borderRadius='50%'
          border='1px solid black'
          src='item/item-photo.jpg'
          objectFit='cover'
          alt={name && name}
        />
        <Stack flex={4} gap='0' mx='10px'>
          <Text fontSize='16px' fontWeight='500'>
            {name}
          </Text>
          <Text fontSize='12px'>Note-{note}</Text>

          <Flex align='center' gap='8px'>
            <CustomIconButton
              icon={<AiOutlineMinus />}
              aria-label='Search database'
              onClick={handleDeleteItem}
            />
            <Text fontWeight='500'>{quantity}</Text>
            <CustomIconButton
              icon={<AiOutlinePlus />}
              aria-label='Search database'
              onClick={handleAddItem}
            />
          </Flex>
        </Stack>
        <Flex flexDir='column' justify='space-between'>
          <Text fontSize='20px' fontWeight='500' mr='8px'>
            $ {price}
          </Text>
          <Flex justify='flex-end'>
            <CustomIconButton
              icon={<AiFillDelete />}
              aria-label='Search database'
              onClick={handleDeleteSingleItem}
            />
          </Flex>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default OrderCard;

const CustomIconButton = ({ icon, ...props }) => {
  return (
    <IconButton
      size='xs'
      colorScheme='blue'
      borderRadius='50%'
      color='white'
      icon={icon}
      {...props}
    />
  );
};
