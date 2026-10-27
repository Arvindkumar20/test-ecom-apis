import { Product } from "../models/product.model.js";

export const productRepository = {
  getProductData: async () => {
    return (await Product.find()) || [];
  },

  addProduct: async (product) => {
    return await Product.create(product);
  },
  updateProduct: async (id, product) => {
    return await Product.findByIdAndUpdate(id, product, { new: true });
  },
  deleteProduct: async (id) => {
    return await Product.findByIdAndDelete(id);
  },

  findProductById: async (id) => {
    return await Product.findById(id);
  },
  addReview: async (productId, review) => {
    return await Product.findByIdAndUpdate(
      productId,
      { $push: { reviews: review } },
      { new: true },
    );
  },
  updateReview: async (productId, reviewId, updatedReview) => {
    return await Product.findOneAndUpdate(
      { _id: productId, "reviews._id": reviewId },
      { $set: { "reviews.$": updatedReview } },
      { new: true },
    );
  },

  deleteReview: async (productId, reviewId) => {
    return await Product.findOneAndUpdate(
      { _id: productId },
      { $pull: { reviews: { _id: reviewId } } },
      { new: true },
    );
  },

  findReviewById: async (productId, reviewId) => {
    return await Product.findOne(
      { _id: productId, "reviews._id": reviewId },
      { "reviews.$": 1 },
    );
  },
  getReviewsByProductId: async (productId) => {
    return await Product.findById(productId, { reviews: 1 });
  },
};
