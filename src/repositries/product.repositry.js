import { Product } from "../models/product.model.js";

export const productRepository = {
  getProductData: async () => {
    return (await Product.find()) || [];
  },

  addProduct: async (product) => {
    return await Product.create(product);
  },
};
