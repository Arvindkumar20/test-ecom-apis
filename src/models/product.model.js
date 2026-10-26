import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      //   required: true,
    },
    image: {
      type: String,
      //   required: true,
    },
    variant: {
      type: String,
      //   required: true,
    },
    stock: {
      type: Number,
      //   required: true,
      default: 1,
      min: 1,
      max: 100,
    },
    rating: {
      type: Number,
      //   required: true,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          //   required: true,
        },
        comment: {
          type: String,
          //   required: true,
        },
        rating: {
          type: Number,
          //   required: true,
        },
      },
    ],
    images: [
      {
        type: String,
        // required: true,
      },
    ],
    brand: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", productSchema);
