import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

// app.use("/hello", (req, res) => {
//   res.send("<h1>Hello<h1>");
// });

app.use("/", (req, res) => {
  res.send("<h1>Welcome to the server<h1>");
});

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
