import express from "express";
import controller from "./controller";

const role = express.Router();

role.get("/", controller.selectMany);
role.get("/:id", controller.selectUniqueById);
role.post("/insert-many", controller.insertMany);
role.post("/insert", controller.insert);
role.put("/:id/edit", controller.edit);
role.delete("/remove-many", controller.removeMany);
role.delete("/:id/remove", controller.remove);

export default role;
