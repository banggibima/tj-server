import { z } from "zod";
import Profile from "../domain/entity";
import presenter from "../interface/presenter";
import service from "./service";

async function selectMany() {
  try {
    const profiles = await service.selectMany();
    const message = "successfully selected many profiles";
    const response = presenter.success(profiles, message);
    return response;
  } catch (error) {
    const message = "failed to select many profiles";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function selectUniqueById(path: Profile["id"]) {
  try {
    const profile = await service.selectUniqueById(path);
    const message = "successfully selected unique profile by id";
    const response = presenter.success(profile, message);
    return response;
  } catch (error) {
    const message = "failed to select unique profile by id";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function insertMany(payloads: Profile[]) {
  try {
    const profiles = await service.insertMany(payloads);
    const message = "successfully inserted many profiles";
    const response = presenter.success(profiles, message);
    return response;
  } catch (error) {
    const message = "failed to insert many profiles";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function insert(payload: Profile) {
  try {
    const profile = await service.insert(payload);
    const message = "successfully inserted profile";
    const response = presenter.success(profile, message);
    return response;
  } catch (error) {
    const message = "failed to insert profile";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function edit(path: Profile["id"], payload: Profile) {
  try {
    const profile = await service.edit(path, payload);
    const message = "successfully edited profile";
    const response = presenter.success(profile, message);
    return response;
  } catch (error) {
    const message = "failed to edit profile";
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
    const profiles = await service.removeMany();
    const message = "successfully removed many profiles";
    const response = presenter.success(profiles, message);
    return response;
  } catch (error) {
    const message = "failed to remove many profiles";
    if (error instanceof z.ZodError) {
      const response = presenter.failure(error.issues, message);
      return response;
    } else {
      const response = presenter.failure(error, message);
      return response;
    }
  }
}

async function remove(path: Profile["id"]) {
  try {
    const profile = await service.remove(path);
    const message = "successfully removed profile";
    const response = presenter.success(profile, message);
    return response;
  } catch (error) {
    const message = "failed to remove profile";
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
