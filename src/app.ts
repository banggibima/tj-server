import express from "express";
import cors from "cors";
import permission from "./modules/permission/interface/router";
import profile from "./modules/profile/interface/router";
import role from "./modules/role/interface/router";
import user from "./modules/user/interface/router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/permissions", permission);
app.use("/api/profiles", profile);
app.use("/api/roles", role);
app.use("/api/users", user);

export default app;
