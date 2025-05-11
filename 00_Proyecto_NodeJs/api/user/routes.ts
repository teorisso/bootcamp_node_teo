import express from "express";
import { userController } from "./controller";
import { adminRoutes } from "../../middlewares/adminRoutes";

const userRouter = express.Router();

const { getUsers, getUser, createUser, loginUser, deleteUser, editUser, changeRole } = userController;

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("/editUser/:id", editUser);
userRouter.put("/changeRole/:id", adminRoutes, changeRole);

export default userRouter;
