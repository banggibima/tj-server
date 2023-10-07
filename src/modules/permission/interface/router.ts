import express from "express";
import controller from "./controller";

const permission = express.Router();

permission.get("/", controller.selectMany);
permission.get("/:id", controller.selectUniqueById);
permission.post("/insert-many", controller.insertMany);
permission.post("/insert", controller.insert);
permission.put("/:id/edit", controller.edit);
permission.delete("/remove-many", controller.removeMany);
permission.delete("/:id/remove", controller.remove);

export default permission;
