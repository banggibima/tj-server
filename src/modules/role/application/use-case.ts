import { z } from "zod";
import Role from "../domain/entity";
import presenter from "../interface/presenter";
import service from "./service";

async function selectMany() {
  try {
    const roles = await service.selectMany();
    const message = "successfully selected many roles";
    const response = presenter.success(roles, message);
    return response;
  } catch (error) {
    const message = "failed to select many roles";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function selectUniqueById(path: Role["id"]) {
  try {
    const role = await service.selectUniqueById(path);
    const message = "successfully selected unique role by id";
    const response = presenter.success(role, message);
    return response;
  } catch (error) {
    const message = "failed to select unique role by id";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function insertMany(payloads: Role[]) {
  try {
    const roles = await service.insertMany(payloads);
    const message = "successfully inserted many roles";
    const response = presenter.success(roles, message);
    return response;
  } catch (error) {
    const message = "failed to insert many roles";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function insert(payload: Role) {
  try {
    const role = await service.insert(payload);
    const message = "successfully inserted role";
    const response = presenter.success(role, message);
    return response;
  } catch (error) {
    const message = "failed to insert role";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function edit(path: Role["id"], payload: Role) {
  try {
    const role = await service.edit(path, payload);
    const message = "successfully edited role";
    const response = presenter.success(role, message);
    return response;
  } catch (error) {
    const message = "failed to edit role";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function removeMany() {
  try {
    const roles = await service.removeMany();
    const message = "successfully removed many roles";
    const response = presenter.success(roles, message);
    return response;
  } catch (error) {
    const message = "failed to remove many roles";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function remove(path: Role["id"]) {
  try {
    const role = await service.remove(path);
    const message = "successfully removed role";
    const response = presenter.success(role, message);
    return response;
  } catch (error) {
    const message = "failed to remove role";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

const useCase = {
  selectMany,
  selectUniqueById,
  insertMany,
  insert,
  edit,
  removeMany,
  remove,
};

export default useCase;
