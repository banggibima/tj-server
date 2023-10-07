import { z } from "zod";
import Permission from "../domain/entity";
import presenter from "../interface/presenter";
import service from "./service";

async function selectMany() {
  try {
    const permissions = await service.selectMany();
    const message = "successfully selected many permissions";
    const response = presenter.success(permissions, message);
    return response;
  } catch (error) {
    const message = "failed to select many permissions";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function selectUniqueById(path: Permission["id"]) {
  try {
    const permission = await service.selectUniqueById(path);
    const message = "successfully selected unique permission by id";
    const response = presenter.success(permission, message);
    return response;
  } catch (error) {
    const message = "failed to select unique permission by id";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function insertMany(payloads: Permission[]) {
  try {
    const permissions = await service.insertMany(payloads);
    const message = "successfully inserted many permissions";
    const response = presenter.success(permissions, message);
    return response;
  } catch (error) {
    const message = "failed to insert many permissions";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function insert(payload: Permission) {
  try {
    const permission = await service.insert(payload);
    const message = "successfully inserted permission";
    const response = presenter.success(permission, message);
    return response;
  } catch (error) {
    const message = "failed to insert permission";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function edit(path: Permission["id"], payload: Permission) {
  try {
    const permission = await service.edit(path, payload);
    const message = "successfully edited permission";
    const response = presenter.success(permission, message);
    return response;
  } catch (error) {
    const message = "failed to edit permission";
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
    const permissions = await service.removeMany();
    const message = "successfully removed many permissions";
    const response = presenter.success(permissions, message);
    return response;
  } catch (error) {
    const message = "failed to remove many permissions";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function remove(path: Permission["id"]) {
  try {
    const permission = await service.remove(path);
    const message = "successfully removed permission";
    const response = presenter.success(permission, message);
    return response;
  } catch (error) {
    const message = "failed to remove permission";
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
