import { ProductService } from "../services/product.service.js";

export const productController = {
  getProductData:async (req, res) => {
    const data =await ProductService.getProductData();
    res.json({
      message: "Product data retrieved successfully",
      data: data || [],
      status: "success",
    });
  },

  addProduct: async (req, res) => {
    const product = req.body;
    const result = await ProductService.addProduct(product);
    res.json({
      message: "Product added successfully",
      data: result,
      status: "success",
    });
  },
};
