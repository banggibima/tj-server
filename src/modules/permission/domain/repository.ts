import { PrismaClient } from "@prisma/client";
import Permission from "./entity";
import validator from "../interface/validator";

const prisma = new PrismaClient();

async function selectMany() {
  const permissions = await prisma.permission.findMany({
    include: {
      role: true,
    },
  });
  return permissions;
}

async function selectUniqueById(path: Permission["id"]) {
  const permission = await prisma.permission.findUnique({
    where: { id: path },
    include: {
      role: true,
    },
  });
  return permission;
}

async function insertMany(payloads: Permission[]) {
  const items = validator.insertMany.parse(payloads);
  const permissions = await prisma.permission.createMany({
    data: items.map((item) => ({
      name: item.name,
      role_id: item.role_id,
    })),
  });
  return permissions;
}

async function insert(payload: Permission) {
  const item = validator.insert.parse(payload);
  const permission = await prisma.permission.create({
    data: {
      name: item.name,
      role_id: item.role_id,
    },
  });
  return permission;
}

async function edit(path: Permission["id"], payload: Permission) {
  const item = validator.edit.parse(payload);
  const permission = await prisma.permission.update({
    where: { id: path },
    data: {
      name: item.name,
      role_id: item.role_id,
    },
  });
  return permission;
}

async function removeMany() {
  const permissions = await prisma.permission.deleteMany();
  return permissions;
}

async function remove(path: Permission["id"]) {
  const permission = await prisma.permission.delete({
    where: { id: path },
  });
  return permission;
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
