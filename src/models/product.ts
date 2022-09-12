interface Product {
  id:  number   ;
  title: string | undefined;
  price: number | undefined;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
  includedInSum: boolean | undefined;
  page: number;
  per_page: number
}
export default Product;

