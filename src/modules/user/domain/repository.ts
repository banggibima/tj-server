import { PrismaClient } from "@prisma/client";
import User from "./entity";
import validator from "../interface/validator";

const prisma = new PrismaClient();

async function selectMany() {
  const users = await prisma.user.findMany({
    include: {
      profile: true,
      role: true,
    },
  });
  return users;
}

async function selectUniqueById(path: User["id"]) {
  const user = await prisma.user.findUnique({
    where: { id: path },
    include: {
      profile: true,
      role: true,
    },
  });
  return user;
}

async function insertMany(payloads: User[]) {
  const items = validator.insertMany.parse(payloads);
  const users = await prisma.user.createMany({
    data: items.map((item) => ({
      email: item.email,
      phone: item.phone,
      username: item.username,
      password: item.password,
      role_id: item.role_id,
      profile_id: item.profile_id,
    })),
  });
  return users;
}

async function insert(payload: User) {
  const item = validator.insert.parse(payload);
  const user = await prisma.user.create({
    data: {
      email: item.email,
      phone: item.phone,
      username: item.username,
      password: item.password,
      role_id: item.role_id,
      profile_id: item.profile_id,
    },
  });
  console.log(user);
  return user;
}

async function edit(path: User["id"], payload: User) {
  const item = validator.edit.parse(payload);
  const user = await prisma.user.update({
    where: { id: path },
    data: {
      email: item.email,
      phone: item.phone,
      username: item.username,
      password: item.password,
      role_id: item.role_id,
      profile_id: item.profile_id,
    },
  });
  return user;
}

async function removeMany() {
  const users = await prisma.user.deleteMany();
  return users;
}

async function remove(path: User["id"]) {
  const user = await prisma.user.delete({
    where: { id: path },
  });
  return user;
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
