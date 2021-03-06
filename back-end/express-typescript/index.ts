import express, { Request, Response } from "express";
import BooksRoutes from "./routes/books";

const app = express();

const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript")
});

app.use(express.json())

app.use(BooksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});