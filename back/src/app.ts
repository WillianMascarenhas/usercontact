import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/user.routes";
import { handlerAppError } from "./middlewares/handlerAppError.middleware";
import { contactRoutes } from "./routes/contact.routes";
import { loginRouter } from "./routes/login.routes";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))
// se alguma rota estiver acima dessa chamada, o cors não será aplicado para ela
// essa url passada acima e a mesma da do front 
app.use("/user", userRoutes);
app.use("/contact", contactRoutes);
app.use("/login", loginRouter)
app.use(handlerAppError);

export default app;
