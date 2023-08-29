import {
  Grid,
  Heading,
  Flex,
  Button,
  Input,
  Stack,
  Text,
  Center,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import OrderCard from '../order-card/OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllFromTestCart } from '@/store/slices/cartSlice';

const CartSection = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleDeleteAll = () => {
    dispatch(deleteAllFromTestCart());
  };
  return (
    <Stack>
      <Grid w='full' templateColumns='2.5fr 1fr' gridGap='16px' rowGap='32px'>
        <Flex fontWeight='500' fontSize='20px' gap='16px'>
          <Text>Cart</Text>
          <Text>#901235</Text>
        </Flex>
        <Button
          size='sm'
          colorScheme='red'
          py='0'
          px='24px'
          fontSize='14px'
          onClick={handleDeleteAll}
        >
          Clear Cart
        </Button>
        <Input placeholder='Search Customer' />
        <Button borderRadius='4px' colorScheme='blue' fontSize='14px'>
          Add Customer
        </Button>
      </Grid>
      <Stack w='full'>
        <Text fontWeight='500' fontSize='20px'>
          Orders List
        </Text>
        <Stack h='460px' overflowY='auto'>
          {cart.cartItems.map((order, index) => {
            return (
              <OrderCard
                key={index}
                index={order.id}
                name={order.name}
                price={order.price}
                quantity={order.quantity}
                note={order.note}
              />
            );
          })}
        </Stack>
      </Stack>
      <Center h='230px' flexDir='column' alignContent='center'>
        <Center flex={3}>
          <Grid w='300px' templateColumns='1fr 1fr' fontSize='16px'>
            <Text>Item({cart.totalItems})</Text>
            <Text textAlign='right'>{cart.totalSubTotal}</Text>
            <Text>Tax(10%)</Text>
            <Text textAlign='right'>
              {(cart.totalPrice - cart.totalSubTotal).toFixed(2)}
            </Text>
            <Box
              width='full'
              height='1px'
              background='transparent'
              borderBottom={`2px solid black`}
              my='8px'
              gridColumn='1 / -1'
            />
            <Text fontWeight='600' fontSize='22px'>
              Total
            </Text>
            <Text fontWeight='600' fontSize='22px' textAlign='right'>
              {cart.totalPrice.toFixed(2)}
            </Text>
          </Grid>
        </Center>

        <Button
          flex={1}
          w='full'
          h='full'
          borderRadius='0'
          fontWeight='500'
          fontSize='20px'
          colorScheme='blue'
        >
          Continue to Payment
        </Button>
      </Center>
    </Stack>
  );
};

export default CartSection;
