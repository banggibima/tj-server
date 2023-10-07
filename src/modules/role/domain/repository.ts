import { PrismaClient } from "@prisma/client";
import Role from "./entity";
import validator from "../interface/validator";

const prisma = new PrismaClient();

async function selectMany() {
  const roles = await prisma.role.findMany({
    include: {
      permission: true,
      user: true,
    },
  });
  return roles;
}

async function selectUniqueById(path: Role["id"]) {
  const role = await prisma.role.findUnique({
    where: { id: path },
    include: {
      permission: true,
      user: true,
    },
  });
  return role;
}

async function insertMany(payloads: Role[]) {
  const items = validator.insertMany.parse(payloads);
  const roles = await prisma.role.createMany({
    data: items.map((item) => ({
      name: item.name,
    })),
  });
  return roles;
}

async function insert(payload: Role) {
  const item = validator.insert.parse(payload);
  const role = await prisma.role.create({
    data: {
      name: item.name,
    },
  });
  return role;
}

async function edit(path: Role["id"], payload: Role) {
  const item = validator.edit.parse(payload);
  const role = await prisma.role.update({
    where: { id: path },
    data: {
      name: item.name,
    },
  });
  return role;
}

async function removeMany() {
  const roles = await prisma.role.deleteMany();
  return roles;
}

async function remove(path: Role["id"]) {
  const role = await prisma.role.delete({
    where: { id: path },
  });
  return role;
}

const repository = {
  selectMany,
  selectUniqueById,
  insertMany,
  insert,
  edit,
  removeMany,
  remove,
};

export default repository;
