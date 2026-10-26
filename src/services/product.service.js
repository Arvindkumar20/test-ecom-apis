import {  productRepository } from "../repositries/product.repositry.js";

export const ProductService = {
  getProductData: async() => {
    // Simulate fetching product data
    const products= await productRepository.getProductData();
    console.log(products);
    return products;
  },

  addProduct: async (product) => {
    return await productRepository.addProduct(product);
  }
};
