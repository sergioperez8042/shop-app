interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  includedInSum: boolean;
  page: number;
  per_page: number;
  quantity: number;
}
export default Product;
