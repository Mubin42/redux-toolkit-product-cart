import CartSection from '@/components/cart-section/CartSection';
import ProductSection from '@/components/product-list/ProductSection';
import { Grid } from '@chakra-ui/react';

export default function Home() {
  return (
    <Grid w='full' templateColumns='2.5fr 1fr' mt='32px' mx='128px'>
      <ProductSection />
      <CartSection />
    </Grid>
  );
}
