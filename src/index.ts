import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";
import { seedInitialProducts } from "./services/productService";

const app = express();
const port = 3001;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Mongo Connected"));
  
seedInitialProducts();

app.use('/user',userRoute)
app.use('/product',productRoute);
app.use('/cart',cartRoute);

app.listen(port, () => {
  console.log("server is running at 3001");
});
