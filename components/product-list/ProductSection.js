import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ProductCard from '../product-card/ProductCard';
import { products } from '@/config/productData';

const ProductSection = () => {
  return (
    <Stack w='full'>
      <Heading>Product List</Heading>
      <Flex flexWrap='wrap' gap='24px'>
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </Flex>
    </Stack>
  );
};

export default ProductSection;
