import { PrismaClient } from "@prisma/client";
import Express from "express";

const app = Express();
const prismaClient = new PrismaClient();

app.use(Express.json()); // ✅ Middleware to parse JSON requests

// ✅ GET request - Fetch users
app.get("/", async (req, res) => {
  try {
    const data = await prismaClient.user.findMany(); // ✅ Correct model case
    res.json({ data }); // ✅ Only one response
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // ✅ Handles errors properly
  }
});

// ✅ POST request - Create a new user
app.post("/", async (req, res) => {
  try {
    const newUser = await prismaClient.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });
    res.status(201).json({ message: "User created", user: newUser }); // ✅ Only one response
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// ✅ Start server
app.listen(3000, () => console.log("🚀 Server running on port 3000"));
