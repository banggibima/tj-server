import { PrismaClient } from "@prisma/client";
import Profile from "./entity";
import validator from "../interface/validator";

const prisma = new PrismaClient();

async function selectMany() {
  const profiles = await prisma.profile.findMany({
    include: {
      user: true,
    },
  });
  return profiles;
}

async function selectUniqueById(path: Profile["id"]) {
  const profile = await prisma.profile.findUnique({
    where: { id: path },
    include: {
      user: true,
    },
  });
  return profile;
}

async function insertMany(payloads: Profile[]) {
  const items = validator.insertMany.parse(payloads);
  const profiles = await prisma.profile.createMany({
    data: items.map((item) => ({
      first_name: item.first_name,
      last_name: item.last_name,
    })),
  });
  return profiles;
}

async function insert(payload: Profile) {
  const item = validator.insert.parse(payload);
  const profile = await prisma.profile.create({
    data: {
      first_name: item.first_name,
      last_name: item.last_name,
    },
  });
  return profile;
}

async function edit(path: Profile["id"], payload: Profile) {
  const item = validator.edit.parse(payload);
  const profile = await prisma.profile.update({
    where: { id: path },
    data: {
      first_name: item.first_name,
      last_name: item.last_name,
    },
  });
  return profile;
}

async function removeMany() {
  const profiles = await prisma.profile.deleteMany();
  return profiles;
}

async function remove(path: Profile["id"]) {
  const profile = await prisma.profile.delete({
    where: { id: path },
  });
  return profile;
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
