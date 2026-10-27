import { asyncHandler } from "../middlewares/asyncHandler.js";
import { ProductService } from "../services/product.service.js";

export const productController = {
  getProductData: asyncHandler(async (req, res) => {
    const data = await ProductService.getProductData();
    res.json({
      message: "Product data retrieved successfully",
      data: data || [],
      status: "success",
    });
  }),

  addProduct: asyncHandler(async (req, res) => {
    const product = req.body;
    const result = await ProductService.addProduct(product);
    res.json({
      message: "Product added successfully",
      data: result,
      status: "success",
    });
  }),

  updateProduct: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const result = await ProductService.updateProduct(id, product);
    res.json({
      message: "Product updated successfully",
      data: result,
      status: "success",
    });
  }),

  deleteProduct: asyncHandler(async (req, res) => {
    const { id } = req.params;
    await ProductService.deleteProduct(id);
    res.json({
      message: "Product deleted successfully",
      status: "success",
    });
  }),

  addReview: asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const review = req.body;
    const result = await ProductService.addReview(productId, review);
    res.json({
      message: "Review added successfully",
      data: result,
      status: "success",
    });
  }),

  updateReview: asyncHandler(async (req, res) => {
    const { productId, reviewId } = req.params;
    const updatedReview = req.body;
    const result = await ProductService.updateReview(productId, reviewId, updatedReview);
    res.json({
      message: "Review updated successfully",
      data: result,
      status: "success",
    });
  }),

  deleteReview: asyncHandler(async (req, res) => {
    const { productId, reviewId } = req.params;
    await ProductService.deleteReview(productId, reviewId);
    res.json({
      message: "Review deleted successfully",
      status: "success",
    });
  }),

  findReviewById: asyncHandler(async (req, res) => {
    const { productId, reviewId } = req.params;
    const result = await ProductService.findReviewById(productId, reviewId);
    res.json({
      message: "Review retrieved successfully",
      data: result,
      status: "success",
    });
  }),

  getReviewsByProductId: asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const result = await ProductService.getReviewsByProductId(productId);
    res.json({
      message: "Reviews retrieved successfully",
      data: result,
      status: "success",
    });
  }),

};
