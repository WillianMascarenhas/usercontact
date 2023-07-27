import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/user.routes";
import { handlerAppError } from "./middlewares/handlerAppError.middleware";
import { contactRoutes } from "./routes/contact.routes";
import { loginRouter } from "./routes/login.routes";

const app = express();

app.use(express.json());
app.use("/user", userRoutes);
app.use("/contact", contactRoutes);
app.use("/login", loginRouter)
app.use(handlerAppError);

export default app;
