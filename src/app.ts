import express, { Application, Request, Response } from "express";
import cors from "cors";
import ModuleRoutes from "./routes/index";
import cookieParser from 'cookie-parser';
import globalErrorHandler from "./middlewares/globalErrorhandler";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
// 
app.use(cors({ origin: 'http://localhost:5173' }));


//application routes
app.use("/api/v1", ModuleRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to project root",
  });
});
app.use(globalErrorHandler);

export default app;
