import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ title: "GET all Users" }));
userRouter.get("/:id", (req, res) => res.send({ title: "GET users details" }));
userRouter.post("/", (req, res) => res.send({ title: "CREATE new user" }));
userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user" }));
userRouter.delete("/", (req, res) => res.send({ title: "DELETE user" }));

export default userRouter;
