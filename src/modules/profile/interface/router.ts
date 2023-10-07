import express from "express";
import controller from "./controller";

const profile = express.Router();

profile.get("/", controller.selectMany);
profile.get("/:id", controller.selectUniqueById);
profile.post("/insert-many", controller.insertMany);
profile.post("/insert", controller.insert);
profile.put("/:id/edit", controller.edit);
profile.delete("/remove-many", controller.removeMany);
profile.delete("/:id/remove", controller.remove);

export default profile;
