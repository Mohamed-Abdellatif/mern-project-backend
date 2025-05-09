import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts =async() => {
  const productsArray = [
    { title: "Dell Laptop", image: "https://www.google.com/imgres?q=dell%20laptops&imgurl=https%3A%2F%2Fcairosales.com%2F63353-large_default%2Fdell-notebook-latitude-intel-core-i7-1165g7-16gb-1tb-256-ssd-nvidia-2gb-dos-latitude-3520-i7.jpg&imgrefurl=https%3A%2F%2Fcairosales.com%2Fen%2Fcomputer-accessories%2Fdell-notebook-latitude-intel-core-i7-1165g7-16gb-1tb-256-ssd-nvidia-2gb-dos-latitude-3520-i7.html&docid=vr1G7VpJtmMVeM&tbnid=wt22j357wVPKeM&vet=12ahUKEwj0oMK1wJeNAxXfYEEAHdDuJakQM3oECGYQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwj0oMK1wJeNAxXfYEEAHdDuJakQM3oECGYQAA", price: 16000, stock: 100 },
    // { title: "Laptop", image: "image2.jpg", price: 20, stock: 80 },
    // { title: "Product 3", image: "image3.jpg", price: 15, stock: 50 },
    // { title: "Product 4", image: "image4.jpg", price: 25, stock: 70 },
    // { title: "Product 5", image: "image5.jpg", price: 5, stock: 90 },
    // { title: "Product 6", image: "image6.jpg", price: 30, stock: 60 },
    // { title: "Product 7", image: "image7.jpg", price: 35, stock: 40 },
    // { title: "Product 8", image: "image8.jpg", price: 40, stock: 30 },
    // { title: "Product 9", image: "image9.jpg", price: 45, stock: 20 },
    // { title: "Product 10", image: "image10.jpg", price: 50, stock: 10 },
  ];

  const existingProducts = await getAllProducts();

  if(existingProducts.length===0){
    await productModel.insertMany(productsArray)
  }
};
