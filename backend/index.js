import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import verifyjwt from "./middleware/veriryjwt.js";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

// app.use(verifyjwt);

app.get("/", verifyjwt, (req, res) => {
  // res.send("Welcome to the Users API! " + req.user_id);
  console.log(req.user, "user from req");
  return res.status(200).json({ message: "Welcome to the Users API!" });
});
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
