import { Prisma } from "@prisma/client";
import User from "../domain/entity";
import repository from "../domain/repository";

async function selectMany() {
  const selectMany = await repository.selectMany();
  const users = selectMany as User[];
  return users;
}

async function selectUniqueById(path: User["id"]) {
  const selectUniqueById = await repository.selectUniqueById(path);
  const user = selectUniqueById as User;
  return user;
}

async function insertMany(payloads: User[]) {
  const insertMany = await repository.insertMany(payloads);
  const users = insertMany as Prisma.BatchPayload;
  return users;
}

async function insert(payload: User) {
  const insert = await repository.insert(payload);
  const user = insert as User;
  return user;
}

async function edit(path: User["id"], payload: User) {
  const edit = await repository.edit(path, payload);
  const user = edit as User;
  return user;
}

async function removeMany() {
  const removeMany = await repository.removeMany();
  const users = removeMany as Prisma.BatchPayload;
  return users;
}

async function remove(path: User["id"]) {
  const remove = await repository.remove(path);
  const user = remove as User;
  return user;
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
