const express = require("express");
const cors=require("cors")
const { userRouter } = require("./routes/user.route");
const { productRouter } = require("./routes/product.route");
const { cartRouter } = require("./routes/cart.route");
const { adminRouter } = require("./routes/admin.route");
const { connection } = require("./configs/db");

const app = express();
app.use(cors())
app.use(express.json());
require("dotenv").config();

app.use("/admin", adminRouter);

app.use("/user", userRouter);

app.use("/product", productRouter);

app.use("/cart", cartRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to MongoDb");
  } catch (err) {
    console.log("Not able to connected to MongoDb");
    console, log(err);
  }

  console.log(`Server is running on ${process.env.port}`);
});
