import express from "express";
import { productController } from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", productController.getProductData);
router.post("/", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.post("/:productId/reviews", productController.addReview);
router.put("/:productId/reviews/:reviewId", productController.updateReview);
router.delete("/:productId/reviews/:reviewId", productController.deleteReview);
router.get("/:productId/reviews/:reviewId", productController.findReviewById);
router.get("/:productId/reviews", productController.getReviewsByProductId);

export const productRoute = router;
