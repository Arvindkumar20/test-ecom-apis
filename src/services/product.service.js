import { productRepository } from "../repositries/product.repositry.js";

export const ProductService = {
  getProductData: async () => {
    // Simulate fetching product data
    const products = await productRepository.getProductData();
    console.log(products);
    return products;
  },

  addProduct: async (product) => {
    return await productRepository.addProduct(product);
  },

  updateProduct: async (id, product) => {
    return await productRepository.updateProduct(id, product);
  },

  deleteProduct: async (id) => {
    return await productRepository.deleteProduct(id);
  },

  addReview: async (productId, review) => {
    if (!productId || !review) {
      throw new Error("Invalid product ID or review");
    }
    return await productRepository.addReview(productId, review);
  },

  updateReview: async (productId, reviewId, updatedReview) => {
    if (!productId || !reviewId || !updatedReview) {
      throw new Error("Invalid product ID, review ID or updated review");
    }
    return await productRepository.updateReview(productId, reviewId, updatedReview);
  },

  deleteReview: async (productId, reviewId) => {
    if (!productId || !reviewId) {
      throw new Error("Invalid product ID or review ID");
    }
    return await productRepository.deleteReview(productId, reviewId);
  },

  findReviewById: async (productId, reviewId) => {
    if (!productId || !reviewId) {
      throw new Error("Invalid product ID or review ID");
    }
    return await productRepository.findReviewById(productId, reviewId);
  },
  
  getReviewsByProductId: async (productId) => {
    if (!productId) {
      throw new Error("Invalid product ID");
    }
    return await productRepository.getReviewsByProductId(productId);
  },


};
