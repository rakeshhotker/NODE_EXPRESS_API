import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  UpdateUser,
  deleteUser,
} from "./controllers/users.js";
const router = express.Router();
//THIS IS TO UNDERSTAND THE CRUD PRINCIPLES
//getAllUsers route
router.get("/", getAllUsers);
//createUser route
router.post("/", createUser);
//readUser route
router.get("/:id", getUser);
//UpdateUser route
router.patch("/:id", UpdateUser);
//deleteUser route
router.delete("/:id", deleteUser);
export default router;
