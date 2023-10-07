import { Prisma } from "@prisma/client";
import Role from "../domain/entity";
import repository from "../domain/repository";

async function selectMany() {
  const selectMany = await repository.selectMany();
  const roles = selectMany as Role[];
  return roles;
}

async function selectUniqueById(path: Role["id"]) {
  const selectUniqueById = await repository.selectUniqueById(path);
  const role = selectUniqueById as Role;
  return role;
}

async function insertMany(payloads: Role[]) {
  const insertMany = await repository.insertMany(payloads);
  const roles = insertMany as Prisma.BatchPayload;
  return roles;
}

async function insert(payload: Role) {
  const insert = await repository.insert(payload);
  const role = insert as Role;
  return role;
}

async function edit(path: Role["id"], payload: Role) {
  const edit = await repository.edit(path, payload);
  const role = edit as Role;
  return role;
}

async function removeMany() {
  const removeMany = await repository.removeMany();
  const roles = removeMany as Prisma.BatchPayload;
  return roles;
}

async function remove(path: Role["id"]) {
  const remove = await repository.remove(path);
  const role = remove as Role;
  return role;
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
