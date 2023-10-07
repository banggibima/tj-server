import { Prisma } from "@prisma/client";
import Profile from "../domain/entity";
import repository from "../domain/repository";

async function selectMany() {
  const selectMany = await repository.selectMany();
  const profiles = selectMany as Profile[];
  return profiles;
}

async function selectUniqueById(path: Profile["id"]) {
  const selectUniqueById = await repository.selectUniqueById(path);
  const profile = selectUniqueById as Profile;
  return profile;
}

async function insertMany(payloads: Profile[]) {
  const insertMany = await repository.insertMany(payloads);
  const profiles = insertMany as Prisma.BatchPayload;
  return profiles;
}

async function insert(payload: Profile) {
  const insert = await repository.insert(payload);
  const profile = insert as Profile;
  return profile;
}

async function edit(path: Profile["id"], payload: Profile) {
  const edit = await repository.edit(path, payload);
  const profile = edit as Profile;
  return profile;
}

async function removeMany() {
  const removeMany = await repository.removeMany();
  const profiles = removeMany as Prisma.BatchPayload;
  return profiles;
}

async function remove(path: Profile["id"]) {
  const remove = await repository.remove(path);
  const profile = remove as Profile;
  return profile;
}

const service = {
  selectMany,
  selectUniqueById,
  insertMany,
  insert,
  edit,
  removeMany,
  remove,
};

export default service;
