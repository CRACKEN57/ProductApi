import axios from 'axios';

const ProductsGen = axios.create({
  baseURL: 'https://dummyjson.com/products?limit=10',
});