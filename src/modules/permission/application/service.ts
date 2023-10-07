import { Prisma } from "@prisma/client";
import Permission from "../domain/entity";
import repository from "../domain/repository";

async function selectMany() {
  const selectMany = await repository.selectMany();
  const permissions = selectMany as Permission[];
  return permissions;
}

async function selectUniqueById(path: Permission["id"]) {
  const selectUniqueById = await repository.selectUniqueById(path);
  const permission = selectUniqueById as Permission;
  return permission;
}

async function insertMany(payloads: Permission[]) {
  const insertMany = await repository.insertMany(payloads);
  const permissions = insertMany as Prisma.BatchPayload;
  return permissions;
}

async function insert(payload: Permission) {
  const insert = await repository.insert(payload);
  const permission = insert as Permission;
  return permission;
}

async function edit(path: Permission["id"], payload: Permission) {
  const edit = await repository.edit(path, payload);
  const permission = edit as Permission;
  return permission;
}

async function removeMany() {
  const removeMany = await repository.removeMany();
  const permissions = removeMany as Prisma.BatchPayload;
  return permissions;
}

async function remove(path: Permission["id"]) {
  const remove = await repository.remove(path);
  const permission = remove as Permission;
  return permission;
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
