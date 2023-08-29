import CartSection from '@/components/cart-section/CartSection';
import ProductSection from '@/components/product-list/ProductSection';
import { Grid } from '@chakra-ui/react';

export default function Home() {
  return (
    <Grid
      w='100vw'
      templateColumns='2fr 1fr'
      mt='32px'
      px='64px'
      gridGap='64px'
    >
      <ProductSection />
      <CartSection />
    </Grid>
  );
}
