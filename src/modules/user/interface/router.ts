import express from "express";
import controller from "./controller";

const user = express.Router();

user.get("/", controller.selectMany);
user.get("/:id", controller.selectUniqueById);
user.post("/insert-many", controller.insertMany);
user.post("/insert", controller.insert);
user.put("/:id/edit", controller.edit);
user.delete("/remove-many", controller.removeMany);
user.delete("/:id/remove", controller.remove);

export default user;
