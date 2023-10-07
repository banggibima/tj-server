import { z } from "zod";
import User from "../domain/entity";
import presenter from "../interface/presenter";
import service from "./service";

async function selectMany() {
  try {
    const users = await service.selectMany();
    const message = "successfully selected many users";
    const response = presenter.success(users, message);
    return response;
  } catch (error) {
    const message = "failed to select many users";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function selectUniqueById(path: User["id"]) {
  try {
    const user = await service.selectUniqueById(path);
    const message = "successfully selected unique user by id";
    const response = presenter.success(user, message);
    return response;
  } catch (error) {
    const message = "failed to select unique user by id";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function insertMany(payloads: User[]) {
  try {
    const users = await service.insertMany(payloads);
    const message = "successfully inserted many users";
    const response = presenter.success(users, message);
    return response;
  } catch (error) {
    const message = "failed to insert many users";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function insert(payload: User) {
  try {
    const user = await service.insert(payload);
    const message = "successfully inserted user";
    const response = presenter.success(user, message);
    return response;
  } catch (error) {
    const message = "failed to insert user";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function edit(path: User["id"], payload: User) {
  try {
    const user = await service.edit(path, payload);
    const message = "successfully edited user";
    const response = presenter.success(user, message);
    return response;
  } catch (error) {
    const message = "failed to edit user";
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
    const users = await service.removeMany();
    const message = "successfully removed many users";
    const response = presenter.success(users, message);
    return response;
  } catch (error) {
    const message = "failed to remove many users";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function remove(path: User["id"]) {
  try {
    const user = await service.remove(path);
    const message = "successfully removed user";
    const response = presenter.success(user, message);
    return response;
  } catch (error) {
    const message = "failed to remove user";
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
