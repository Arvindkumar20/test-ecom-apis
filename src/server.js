import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { productRoute } from "./routes/product.route.js";

const app = express();
//cors setup
app.use(cors());    

//handle form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect mongo db
connectDB();

// Health check endpoint
app.get("/health", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/product",productRoute);


// custoome console.log();
app.use((err, req, res, next) => {
  // console.log(err.stack);
  res.status(500).json({
    message:err.message||"server error",
    name:err.name||"server error",
    stack:err.stack||"no stack available"
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
