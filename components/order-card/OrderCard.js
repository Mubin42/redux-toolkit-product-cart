import {
  Button,
  Divider,
  Flex,
  FlexProps,
  IconButton,
  IconButtonProps,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillEdit, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const OrderCard = ({ index, title, price, quantity, note, ...props }) => {
  const handleAddItem = ({}) => {};

  const handleDeleteItem = () => {};

  const handleDeleteSingleItem = () => {};
  return (
    <>
      <Flex w='full' my='12px' justify='space-between'>
        <Stack flex={4} gap='0' mx='10px'>
          <Text fontSize='16px' fontWeight='500'>
            {title}
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
        <Text fontSize='20px' fontWeight='500' mr='8px'>
          $ {price}
        </Text>
      </Flex>
      <Divider />
    </>
  );
};

export default OrderCard;

const CustomIconButton = ({ icon, ...props }) => {
  return <IconButton size='xs' borderRadius='50%' icon={icon} {...props} />;
};
